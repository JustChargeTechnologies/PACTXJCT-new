/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import TextArea from "../components/form/input/TextArea";
import FileInput from "../components/form/input/FileInput";
import axios from "axios";

export default function Sponser() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sponserImg, setSponserImg] = useState<string | File>("");
  const [extraImage, setExtraImage] = useState<Array<string | File>>([]);
  const [about, setAbout] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [count, setCount] = useState<number[]>([1]);
  const token = localStorage.getItem("token");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSponserImg(file);
    }
  };
  const handleExtraImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = [...extraImage] as Array<string | File>;
    if (e.target.files) {
      files[index] = e.target.files[0];
      setExtraImage(files);
    }
  };
  const addImageField = () => {
    setCount([...count, count.length + 1]);
  };
  const removeImageField = (index: number) => {
    if (count.length > 1) {
      setCount(count.filter((_, i) => i !== index));
    }
  };

  const handleAddSponser = async (e: any) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("about", about);
      formData.append("country", country);
      formData.append("city", city);
      formData.append("sponserImg", sponserImg);

      extraImage.forEach((image) => {
        formData.append("extraImage", image); // Append each extra image
      });

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/addSponser`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        setTitle("");
        setDescription("");
        setCountry("");
        setCity("");
        setAbout("");
        setSponserImg("");
        setExtraImage([]);
      }
    } catch (error) {
      console.log(error, "SponserError");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">
        Add Sponser
      </h2>
      <form onSubmit={handleAddSponser}>
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
              <Label>About</Label>
              <TextArea
                value={about}
                onChange={(value) => setAbout(value)}
                rows={6}
              />
            </div>
            <div>
              <Label>Description</Label>
              <TextArea
                value={description}
                onChange={(value) => setDescription(value)}
                rows={6}
              />
            </div>

            <div>
              <Label>Upload file</Label>
              <FileInput onChange={handleFileChange} className="custom-class" />
            </div>
            <div className="flex justify-between">
              <div className="w-2/5">
                <Label htmlFor="input">Country</Label>
                <Input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  id="input"
                  placeholder="Country"
                />
              </div>
              <div className="w-2/5">
                <Label htmlFor="input">City</Label>
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="input"
                  placeholder="City"
                />
              </div>
            </div>
            {count.map((_, index) => (
              <div key={index}>
                <Label>Extra images</Label>
                <FileInput
                  onChange={(e) => handleExtraImageChange(index, e)}
                  className="custom-class"
                />
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
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
