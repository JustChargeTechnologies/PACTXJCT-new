/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
// import FileInput from "../components/form/input/FileInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { CalenderIcon } from "../icons";

const News = () => {
  const [images, setImages] = useState<(File | null)[]>([]);
  const [para, setPara] = useState<string[]>([""]);
  const [date, setDate] = useState<Date | null>(null); // Use Date type here
  const [title, setTitle] = useState<string>("");
  const [count, setCount] = useState<number[]>([1]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = [...images];
    if (e.target.files) {
      files[index] = e.target.files[0];
    }
    setImages(files);
  };

  const handleParaChange = (index: number, e: any) => {
    const newpara = [...para];
    newpara[index] = e.target.value;
    setPara(newpara);
  };

  const addImageField = () => {
    setImages([...images, null]);
    setPara([...para, ""]);
    setCount([...count, count.length + 1]);
  };

  const removeImageField = (index: number) => {
    if (para.length > 1) {
      setImages(images.filter((_, i) => i !== index));
      setPara(para.filter((_, i) => i !== index));
      setCount(count.filter((_, i) => i !== index));
    }
  };

  const token = localStorage.getItem("token");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    // Convert date to string "yyyy-MM-dd" if a date is selected
    formData.append("date", date ? date.toISOString().split("T")[0] : "");
    formData.append("paragraph", JSON.stringify(para));

    images.forEach((image) => {
      if (image) {
        formData.append("images", image);
      }
    });
    try {
      console.log(formData);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/addnews`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        setTitle("");
        setImages([]);
        setPara([""]);
        setDate(null);
        setCount([1]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (error) {
      console.log(error, "NewsError");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">
        Add News
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="space-y-6">
            <div>
              <Label htmlFor="input">Title</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="input"
                placeholder="Title"
              />
            </div>
            <div>
              <label
                htmlFor="datePicker"
                className="block text-sm font-medium text-gray-700"
              >
                Date Picker Input
              </label>
              <div className="relative w-full flatpickr-wrapper">
                <DatePicker
                  selected={date}
                  onChange={(date: Date | null) => setDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select an option"
                  className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs
                 placeholder:text-gray-400 focus:outline-none focus:ring-3 
                 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30
                 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 
                 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                />
                <span className="absolute left-47 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <CalenderIcon className="size-6" />
                </span>
              </div>
            </div>

            {count.map((_, index) => (
              <div
                className="border border-gray-500 p-4 rounded-2xl"
                key={index}
              >
                <div>
                  <Label>Upload file</Label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400 "
                    onChange={(e) => handleImageChange(index, e)}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <textarea
                    className="w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden"
                    value={para[index] || ""}
                    onChange={(e) => handleParaChange(index, e)}
                    rows={6}
                  />
                </div>
              </div>
            ))}
            <div className="flex gap-6">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={addImageField}
              >
                Add More
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={() => removeImageField(count.length - 1)}
              >
                Remove
              </button>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              ADD Sponser
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default News;
