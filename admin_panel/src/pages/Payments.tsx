/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router";

const Payments = () => {
  const [arr, setArr] = React.useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/getDonation`
      );
      setArr(res.data.donations);
      console.log(res.data.donations);
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
                PhoneNO.
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {item.donor.firstName} {item.donor.lastName}
                </th>
                <td className="px-6 py-4">{item.donor.email}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {item.donor.phone}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">paid</td>
                <td className="px-6 py-4">
                  {/* {item.message} */}
                  done
                </td>
                <td>
                  <Link
                    to="/supportus/:id"
                    className="px-4 mt-4 py-2 mr-2 rounded-xl bg-blue-600 text-white dark:bg-gray-800 whitespace-nowrap"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
