/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";

const SoloPayments = () => {
  const donor = {
    firstName: "Virjesh",
    lastName: "Choudhary",
    country: "India",
    street: "123 Green Lane",
    apartment: "Apt 21B",
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
    phoneno: "9876543210",
    email: "virjesh@example.com",
    panNo: "ABCDE1234F",
    additionalInfo: "Looking forward to hearing from you!",
  };
  const {id}=useParams();
  const [arr, setArr] = React.useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/getdonation/${id}`
      );
      console.log(res.data.donations);
      
      setArr(res.data.donations);
    };
    fetchData();
  }, [id]);
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">
          Donor Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <DetailItem label="First Name" value={donor.firstName} />
          <DetailItem label="Last Name" value={donor.lastName} />
          <DetailItem label="Country / Region" value={donor.country} />
          <DetailItem label="Street Address" value={donor.street} />
          <DetailItem label="Apartment (Optional)" value={donor.apartment} />
          <DetailItem label="Town / City" value={donor.city} />
          <DetailItem label="State" value={donor.state} />
          <DetailItem label="Pincode" value={donor.pincode} />
          <DetailItem label="Phone" value={donor.phoneno} />
          <DetailItem label="Email" value={donor.email} />
          <DetailItem label="PAN Number" value={donor.panNo || "—"} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
            Additional Information
          </h3>
          <div className="bg-gray-50 border border-gray-300 rounded p-4 text-gray-800">
            {donor.additionalInfo || "No additional notes provided."}
          </div>
        </div>
      </div>
    </div>
  );
};

interface DetailItemProps {
  label: string;
  value: string | number | null;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-medium text-gray-800 border border-gray-200 bg-gray-50 rounded px-3 py-2">
      {value}
    </p>
  </div>
);

export default SoloPayments;
