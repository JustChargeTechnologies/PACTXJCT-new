/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const SoloPayments = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/getdonation/${id}`
      );
      // console.log(res.data.donations);

      setData(res.data.donations);
    };
    fetchData();
  }, [id]);
  const navigate=useNavigate();
  const onDeletePayment=async()=>{
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/deletedonation/${id}`)
      // console.log(res.data);
      navigate('/supportus');
    } catch (error) {
      console.log("ErrorSinglePaymentDelete",error);
      
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">
          Donor Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <DetailItem
            label="First Name"
            value={data?.donor?.firstName || "—"}
          />
          <DetailItem label="Last Name" value={data?.donor?.lastName || "—"} />
          <DetailItem
            label="Country / Region"
            value={data?.donor?.country || "—"}
          />
          <DetailItem
            label="Street Address"
            value={data?.donor?.address?.street || "—"}
          />
          <DetailItem
            label="Apartment (Optional)"
            value={data?.donor?.address?.apartment || "—"}
          />
          <DetailItem
            label="Town / City"
            value={data?.donor?.address?.city || "—"}
          />
          <DetailItem
            label="State"
            value={data?.donor?.address?.state || "—"}
          />
          <DetailItem
            label="Pincode"
            value={data?.donor?.address?.pincode || "—"}
          />
          <DetailItem label="Phone" value={data?.donor?.phone || "—"} />
          <DetailItem label="Email" value={data?.donor?.email || "—"} />
          <DetailItem label="Amount" value={data?.amount || "—"} />
          <DetailItem label="Status" value={data?.status || "—"} />
          <DetailItem label="PAN Number" value={data?.donor?.pan || "—"} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
            Additional Information
          </h3>
          <div className="bg-gray-50 border border-gray-300 rounded p-4 text-gray-800">
            {data?.donor?.notes || "No additional notes provided."}
          </div>
        </div>
        <button
          onClick={onDeletePayment}
          className="rounded-xl py-4 px-12 text-center bg-blue-600 text-white dark:bg-gray-800 whitespace-nowrap"
        >
          Delete
        </button>
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
