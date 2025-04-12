// src/components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-[#F7F6F4] md:mt-[102px] py-1 mt-[72px] text-sm flex justify-center items-center">
      <nav className="w-[84%]">
        <ol className="list-reset flex text-gray-700">
          <li>
            <Link to="/" className=" hover:underline text-[14px]">Home</Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;

            return (
              <li key={index} className="flex items-center">
                <span className="mx-2">»</span>
                {isLast ? (
                  <span className="text-gray-500 text-[14px] capitalize">{decodeURIComponent(name)}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className=" hover:underline capitalize"
                  >
                    {decodeURIComponent(name)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
