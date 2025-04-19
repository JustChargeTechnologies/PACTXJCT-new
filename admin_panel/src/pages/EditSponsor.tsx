/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import TextArea from "../components/form/input/TextArea";
import { Link, useNavigate, useParams } from "react-router";
import { ProjectContext } from "../context/ProjectsProvider";

const EditSponsor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectImg, setProjectImg] = useState<string | File>("");
  const [projectImgPreview, setProjectImgPreview] = useState<string | File>("");
  const [aboutProject, setAboutProject] = useState("");
  const token = localStorage.getItem("token");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "ProjectContext is undefined. Make sure you are using AllProjects inside a ProjectsProvider."
    );
  }

  const { setProject } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/project/getproject/${id}`
        );
        if (response.status === 200) {
          const data = response.data;
          setTitle(data.title);
          setDescription(data.description);
          setAboutProject(data.aboutProject);
          setProjectImgPreview(data.projectUrl.url)
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader= new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload=()=>{
      if (typeof reader.result === "string") {
        setProjectImgPreview(reader.result);
      }
      setProjectImg(file ?? "");
    }
  };

  const handleAddProject = async (e: any) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("aboutProject", aboutProject);
      if (projectImg) {
        formData.append("projectImg", projectImg as File);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/project/editproject/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setTitle("");
        setAboutProject("");
        setDescription("");
        setProjectImg("");
        const data=await response.data;
        setProject(data.allproject);
        // console.log(data.allproject);
        
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        navigate("/allprojects");
      }
    } catch (error) {
      console.log(error, "ProjectError");
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="w-[92%] md:w-[80%] my-16">
        <div>
        <div className="flex justify-between mb-4">
            <div className="text-xl font-semibold text-gray-800 dark:text-white/90 ">
              Edit The Project
            </div>
            <Link to="/" className=" bg-blue-600 text-white py-2.5 rounded-lg px-6  hover:bg-blue-700">
              Return to home
            </Link>
          </div>
          <form onSubmit={handleAddProject}>
            <div className="space-y-6  border-1 border-black px-4 rounded-lg py-6">
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
              <Label>Uploaded Image</Label>
              <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                <img src={typeof projectImgPreview === "string" ? projectImgPreview : projectImgPreview instanceof File ? URL.createObjectURL(projectImgPreview) : undefined} className="h-70 w-auto " alt="" />
              </p>
            </div>
              <div>
                <Label>Change Image</Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400 "
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSponsor;
