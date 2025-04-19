import { useEffect, useState } from "react";
import Label from "../components/form/Label";
import { Link } from "react-router";
import axios from "axios";

const AllSponsor = () => {

  interface Sponsor {
    title: string;
    about: string;
    description: string;
    imgUrl: { url: string };
    country: string;
    city: string;
    images: { Url: string }[];
  }
  
  const [sponsor, setSponsor] = useState<Sponsor[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/getSponser`
        );
        if (response.status === 200) {
          const data = response.data;
          console.log(data);
          setSponsor(data);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, [setSponsor]);

  return (
    <div className="flex justify-center">
      <div className="w-[92%] md:w-[80%] my-16">
        <div>
          <div className="flex justify-between mb-4">
            <div className="text-xl font-semibold text-gray-800 dark:text-white/90 ">
              All Sponsors
            </div>
            <Link
              to="/"
              className=" bg-blue-600 text-white py-2.5 rounded-lg px-6  hover:bg-blue-700"
            >
              Return to home
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {sponsor?.map((item, idx) => (
              <div
                key={idx}
                className="space-y-6 border-1 border-black px-4 rounded-lg py-6"
              >
                <div>
                  <Label>Title</Label>
                  <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                    {item.title}
                  </p>
                </div>

                <div>
                  <Label>About</Label>
                  <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                    {item.about}
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
                    <img src={item.imgUrl.url} alt="" />
                  </p>
                </div>
                <div className=" grid grid-cols-3 ">
                  <div className="col-span-1">
                    <Label>Country</Label>
                    <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                      {item.country}
                    </p>
                  </div>
                  <div className="col-start-3">
                    <Label>City</Label>
                    <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                      {item.city}
                    </p>
                  </div>
                </div>
                <div>
                  <div>Carousel Images</div>
                  <div className="grid grid-cols-2 gap-5">
                    {item.images && item.images.length > 0 ? (
                      item.images.map((img, index) => (
                        <div key={index}>
                          <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                            <img src={img.Url} alt={`carousel-${index}`} />
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">
                        NO IMAGES AVAILABLE
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Link
                    to="/allsponsor/edit/:id"
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

export default AllSponsor;
