import React, { useEffect, useState } from "react";
import below_bg from "../../assets/SupportUs/DonateBelow.webp";
import pactLogo from "../../assets/image_1-removebg-preview.png"; // Replace with your actual logo path
import donationImage from "../../assets/SupportUs/Donate_bg.webp"; // Replace with your image
import yourLogo from "../../assets/SupportUs/payment.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Payment = () => {
  const [selected, setSelected] = useState("");
  const [amount, setAmount] = useState("");
  const [cnt, setCnt] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [panNo, setPantNo] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [invalidFields, setInvalidFields] = useState(false);
  const [apartment, setApartment] = useState("");
  const [country, setCountry] = useState("");

  const handleDonate = async () => {
    try {
      const formData = {
        donor: {
          firstName,
          lastName,
          country,
          address: {
            street,
            apartment,
            city,
            state,
            pincode,
          },
          phone: phoneno,
          email,
          pan: panNo,
          notes: additionalInfo,
        },
      };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/create_order`,
        { amount, donor: formData.donor },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        // alert("Form submitted successfully");
        const data = response.data;
        // console.log(data);
        
        handlePaymentVerify(data.order)
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      alert("Form submission failed");
    }
  };

  const handlePaymentVerify = async (data) => {
    const options = {
        key: import.meta.env.RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "PACT_FOUNDATION",
        description: "Test Mode",
        order_id: data.id,
        handler: async (response) => {
            console.log("response", response)
            try {
                const res = await fetch(`${import.meta.env.VITE_BASE_URL}/verify_payment`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    })
                })

                const verifyData = await res.json();
                
                if (verifyData.message) {
                    toast.success(verifyData.message);
                }
            } catch (error) {
                console.log(error);
            }
        },
        theme: {
            color: "#5f63b8"
        }
    };
    if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    } else {
        console.error("Razorpay SDK not loaded. Please check if the script is included.");
        alert("Payment gateway is not available at the moment. Please try again later.");
    }
}

  useEffect(() => {
    if (
      !firstName ||
      !lastName ||
      !street ||
      !city ||
      !state ||
      !pincode ||
      !phoneno ||
      !email
    ) {
      setInvalidFields(true);
    } else {
      setInvalidFields(false);
    }
  }, [firstName, lastName, street, city, state, pincode, phoneno, email]);

  const options = [
    "Select an option...",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli ",
    " Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  const changeAmount = (amt) => {
    setSelected(amt);
    if (amt !== "Other") {
      setAmount(amt);
      return;
    }
  };

  const amounts = ["4000", "8000", "12000", "16000"];
  return (
    <div>
      <div
        className="relative flex justify-center  bg-cover bg-center bg-no-repeat h-full"
        style={{ backgroundImage: `url(${below_bg})` }}
      >
        {" "}
        <div className="w-[93%] md:w-[78%] nunito-font">
          <div className="w-full  py-10 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
              {/* Left - Image with overlay text */}
              <div className="relative h-full">
                <img
                  src={donationImage}
                  alt="Donate Visual"
                  className={`object-cover w-full ${
                    cnt === 0
                      ? "h-[300px] md:h-[515px]"
                      : cnt === 1
                      ? "h-[300px] md:h-[1349px]"
                      : invalidFields
                      ? "h-[300px] md:h-[959px]"
                      : "h-[300px] md:h-[898px]"
                  }`}
                />
                <div className="absolute inset-0 bg-opacity-30 flex flex-col  items-start p-6 sm:p-10">
                  <div className="text-white mt-9 flex items-center text-sm tracking-widest font-semibold mb-2">
                    <div>DONATE</div>
                    <div className="border-1 border-white ml-4 w-[90px]"></div>
                  </div>
                  <h2 className="text-4xl mt-12 sm:text-5xl font-bold text-white leading-tight font-[Chewy]">
                    Make the world a <br /> happier place
                  </h2>
                </div>
              </div>

              {/* Right - Form */}
              <div className="p-6 sm:p-2 sm:px-10 flex flex-col justify-center bg-[#f9f9f9]">
                {/* Logo */}
                <img
                  src={pactLogo}
                  alt="PACT Foundation"
                  className="w-40 mb-4"
                />

                {/* Description */}
                <p className="text-gray-700 text-[16px] mb-5">
                  Your donations help kids on the path out of poverty, creating
                  a ripple effect that impacts generations. (Donations are 100%
                  tax-deductible under 80G.)
                </p>

                {/* Step Indicator */}
                <div className="flex justify-between text-sm mb-6 border rounded overflow-hidden">
                  <button
                    onClick={() => setCnt(0)}
                    className={`${
                      cnt === 0 ? "bg-lime-500 text-white" : "text-gray-600"
                    }  w-1/3 text-center py-2 font-medium`}
                  >
                    1. Amount
                  </button>
                  <button
                    onClick={() => setCnt(1)}
                    disabled={!amount || amount === ""}
                    className={`${
                      cnt === 1 ? "bg-lime-500 text-white" : "text-gray-600"
                    } ${
                      !amount || amount === "" ? "cursor-not-allowed" : ""
                    } text-gray-600 w-1/3 text-center py-2 border-l`}
                  >
                    2. Details
                  </button>
                  <button
                    onClick={() => setCnt(2)}
                    disabled={!amount || amount === ""}
                    className={`${
                      cnt === 2 ? "bg-lime-500 text-white" : "text-gray-600"
                    } ${
                      !amount || amount === "" ? "cursor-not-allowed" : ""
                    } w-1/3 text-center py-2 border-l`}
                  >
                    3. Payment
                  </button>
                </div>

                {/* Choose amount */}
                <div>
                  {cnt === 0 ? (
                    <div>
                      <label className="font-semibold text-gray-700 mb-2 block">
                        Choose an amount:{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        {amounts.map((amt) => (
                          <button
                            key={amt}
                            onClick={() => changeAmount(amt)}
                            className={`py-2 px-4 rounded text-center font-semibold
                  ${
                    selected === amt
                      ? "bg-lime-500 text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }
                `}
                          >
                            ₹{amt}
                          </button>
                        ))}
                        {selected === "Other" ? (
                          <div className="flex items-center bg-lime-500 rounded px-2">
                            <span className="text-white font-bold text-xl">
                              ₹
                            </span>
                            <input
                              type="number"
                              className="w-full px-2 py-1 rounded outline-none font-semibold text-center"
                              value={amount !== "Other" ? amount : ""}
                              onChange={(e) => setAmount(e.target.value)}
                              placeholder="Amount"
                            />
                            <span className="text-white text-xl ml-1">✔</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => changeAmount("Other")}
                            className="py-2 px-4 rounded text-center font-semibold bg-gray-200 text-black hover:bg-gray-300"
                          >
                            Other
                          </button>
                        )}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() => setCnt(cnt + 1)}
                        disabled={!amount || amount === ""}
                        className={`self-end px-6 py-2 rounded font-semibold transition
                        ${
                          !amount || amount === ""
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-lime-500 hover:bg-lime-600 text-white"
                        }`}
                      >
                        Next »
                      </button>
                    </div>
                  ) : cnt === 1 ? (
                    <div>
                      <h2 className="text-[25px] mb-3">Donor details</h2>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 font-medium">
                              First name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              className={`w-full border ${
                                firstName === ""
                                  ? "border-red-500"
                                  : "border-green-500"
                              } rounded px-3 py-2`}
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium">
                              Last name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              className={`w-full border ${
                                lastName === ""
                                  ? "border-red-500"
                                  : "border-green-500"
                              } rounded px-3 py-2`}
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium">
                            Country / Region{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              country === ""
                                ? "border-red-500"
                                : "border-green-500"
                            } rounded px-3 py-2`}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium">
                            Street address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              street === ""
                                ? "border-red-500"
                                : "border-green-500"
                            }rounded px-3 py-2 mb-2`}
                            placeholder="House number and street name"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                          />
                          <input
                            type="text"
                            className="w-full border border-green-500 rounded px-3 py-2"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium">
                            Town / City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              city === ""
                                ? "border-red-500"
                                : "border-green-500"
                            } rounded px-3 py-2`}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium">
                            State <span className="text-red-500">*</span>
                          </label>
                          <select
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          >
                            {options.map((option) => (
                              <option
                                key={option}
                                value={
                                  option === "Select an option..." ? "" : option
                                }
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium">
                            Pincode <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              pincode === ""
                                ? "border-red-500"
                                : "border-green-500"
                            } rounded px-3 py-2`}
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className={`w-full border ${
                              phoneno === ""
                                ? "border-red-500"
                                : "border-green-500"
                            } rounded px-3 py-2`}
                            value={phoneno}
                            onChange={(e) => setPhoneno(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium">
                            Email address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            className={`w-full border ${
                              email === ""
                                ? "border-red-500"
                                : "border-green-500"
                            } rounded px-3 py-2`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium">
                            PAN Number (optional)
                          </label>
                          <input
                            type="text"
                            className="w-full border border-green-500 rounded px-3 py-2"
                            value={panNo}
                            onChange={(e) => setPantNo(e.target.value)}
                          />
                        </div>
                        <h2 className="text-[28px] mb-3">
                          Additional Information
                        </h2>
                        <div>
                          <label className="block text-gray-700 font-medium">
                            Donation notes (optional)
                          </label>
                          <textarea
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            rows="3"
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                            placeholder="Notes about your donation"
                          ></textarea>
                        </div>

                        <div className="flex justify-between mt-4">
                          <button
                            type="button"
                            onClick={() => setCnt(cnt - 1)}
                            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded font-semibold transition"
                          >
                            « Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setCnt(cnt + 1)}
                            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded font-semibold transition"
                          >
                            Next »
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="">
                      <h2 className="text-[30px]  mb-4">Your Donation</h2>

                      {/* Donation Summary */}
                      <table className="w-full border border-gray-300 mb-6">
                        <tbody>
                          <tr className="border-b border-gray-300">
                            <td className="p-3 font-medium">Donation</td>
                            <td className="p-3">₹{amount}</td>
                          </tr>
                          <tr className="font-bold">
                            <td className="p-3">Donation Amount</td>
                            <td className="p-3">₹{amount}</td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Payment Section */}
                      <div className="bg-purple-100 border border-purple-300 rounded-md p-4 mb-4">
                        <div className="flex items-center mb-3">
                          <div>
                            <h3 className="font-medium text-gray-800">
                              Credit Card/Debit Card/NetBanking
                            </h3>
                          </div>
                          <div className="ml-auto flex items-center">
                            <img
                              src={yourLogo}
                              alt="Custom Logo"
                              className="h-12 mr-2"
                            />
                          </div>
                        </div>

                        <div className="bg-purple-200 text-gray-800 rounded p-3 text-sm shadow-inner">
                          Pay securely by Credit or Debit card or Internet
                          Banking through our payment gateway.
                        </div>
                      </div>

                      {/* Privacy Note */}
                      <p className=" text-gray-600 border-t pt-4">
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our{" "}
                        <Link
                          to="/policy"
                          className="text-pink-600 font-medium cursor-pointer underline"
                        >
                          privacy policy
                        </Link>
                        .
                      </p>
                      {invalidFields && (
                        <div>
                          <div className="border-t pt-4 mt-4">
                            Please fill in all fields under Donor Details
                            correctly before checking out.
                          </div>
                          <button
                            onClick={() => setCnt(cnt - 1)}
                            className="bg-lime-500 relative md:left-81 md:bottom-5 text-white px-6 py-2 rounded font-bold"
                          >
                            Fix Invalid Fields
                          </button>
                        </div>
                      )}
                      {/* Buttons */}
                      <div className="flex justify-between items-center mt-6">
                        <button
                          onClick={() => {
                            setCnt(cnt - 1);
                          }}
                          className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded font-semibold"
                        >
                          « Back
                        </button>
                        {!invalidFields && (
                          <button
                            onClick={handleDonate}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-bold"
                          >
                            Donate now
                          </button>
                        )}
                        <Toaster/>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
