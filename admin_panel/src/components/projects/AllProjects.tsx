import { useContext } from "react";
import Label from "../form/Label";
import { ProjectContext } from "../../context/ProjectsProvider";
import { Link } from "react-router";


const AllProjects = () => {
  
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("ProjectContext is undefined. Make sure you are using AllProjects inside a ProjectsProvider.");
  }

  const { project } = context;
  console.log(project);
  return (
    <div className="flex justify-center">
  <div className="w-[92%] md:w-[80%] my-16">
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">
        All Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {project?.map((item, idx) => (
          <div key={idx} className="space-y-6 border-1 border-black px-4 rounded-lg py-6">
            <div>
              <Label>Title</Label>
              <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                {item.title}
              </p>
            </div>

            <div>
              <Label>About</Label>
              <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                {item.aboutProject}
              </p>
            </div>

            <div>
              <Label>Description</Label>
              <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>

            <div>
              <Label>Uploaded file</Label>
              <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                <img src={item.projectUrl.url} alt="" />
              </p>
            </div>

            <div>
              <Link to={`edit/${item._id}`}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg px-6 hover:bg-blue-700"
              >
                EDIT
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default AllProjects;
