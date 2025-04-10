/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";

const Help = () => {
const [arr, setArr] = React.useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/gethelp`);
      setArr(res.data);
    };
    fetchData();
  }, []);
    
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">
        Get Help
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item,index)=>(
              
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                {item.fullname.firstname} {item.fullname.lastname}
              </th>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.subject}</td>
              <td className="px-6 py-4">
               {item.message}
              </td>
            </tr>
             
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Help;
