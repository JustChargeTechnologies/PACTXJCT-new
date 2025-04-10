import React, { useState } from "react";
import contact_bg from "../../assets/Contact/Contact_bg.png";
import "../../../public/styles/slider.css";


const ContactDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phoneno,
      message,
    };
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/addcontact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        alert("Form submitted successfully");
        setName("");
        setEmail("");
        setPhoneno("");
        setMessage("");
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      alert("Form submission failed");
    }
  };
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col xl:flex-row">
        <div className="bg-gray-200 w-full flex justify-center">
          <iframe
            className="min-w-[373px] lg:min-w-[817px] min-h-[410px] lg:min-h-[655px]"
            loading="lazy"
            src="https://maps.google.com/maps?q=Jasmine%20Plaza%20Moira&t=m&z=14&output=embed&iwloc=near"
            frameBorder="0"
          ></iframe>
        </div>
        <div
          className=" w-[100%] md:w-[120%]  bg-green-200 min-h-[655px] flex  justify-center"
          style={{ backgroundImage: `url(${contact_bg})` }}
        >
          <div className="flex flex-col justify-center items-center gap-[40px] nunito-font px-10 w-full">
            <div className="text-white font-[700] text-[40px] mt-[49px] w-[92%] md:w-[65%]">
              Contact Us
            </div>
            <form
              onSubmit={handleForm}
              className="flex flex-col gap-[12px] w-[92%] md:w-[65%] "
            >
              <input
                className="py-[10px] px-[16px] bg-white"
                placeholder="Name*"
                type="text"
                value={name} // Bind to state
                onChange={(e) => setName(e.target.value)} // Update state on change
              />
              <input
                className="py-[10px] px-[16px] bg-white"
                placeholder="Email*"
                type="email"
                value={email} // Bind to state
                onChange={(e) => setEmail(e.target.value)} // Update state on change
              />
              <input
                className="py-[10px] px-[16px] bg-white"
                placeholder="Phone Number*"
                type="text"
                value={phoneno} // Bind to state
                onChange={(e) => setPhoneno(e.target.value)} // Update state on change
              />
              <textarea
                className="py-[10px] px-[16px] bg-white h-[130px]"
                placeholder="Your Message"
                value={message} // Bind to state
                onChange={(e) => setMessage(e.target.value)} // Update state on change
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="mt-[27px] bg-[#2282B4] rounded-sm text-white p-[10px]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
