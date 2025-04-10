/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import TextArea from "../components/form/input/TextArea";
import axios from "axios";

const Projects = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectImg, setProjectImg] = useState<string | File>("");
  const [aboutProject, setAboutProject] = useState("");
  const token = localStorage.getItem("token");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProjectImg(file);
    }
  };

  const handleAddProject = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/project/addproject`,
        { title, description, aboutProject, projectImg },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(response.data);
      if (response.status == 200) {
        setTitle("");
        setAboutProject("");
        setDescription("");
        setProjectImg("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (error) {
      console.log(error, "ProjectError");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">
        Add Projects
      </h2>
      <form onSubmit={handleAddProject}>
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
                value={aboutProject}
                onChange={(value) => setAboutProject(value)}
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
              {/* <FileInput onChange={handleFileChange} className="custom-class" /> */}
              <input
                ref={fileInputRef}
                type="file"
                className="focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400 "
                onChange={handleFileChange}
              />
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
};

export default Projects;
