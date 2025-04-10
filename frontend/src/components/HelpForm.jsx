import React, { useState } from "react";
import axios from "axios";

const HelpForm = ({ role }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async () => {
    if (role === "Volunteer") {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/addvolunteer`, {
          firstname,
          lastname,
          email,
          subject,
          message,
          role,
        });
        if (res.status === 200) {
          alert("Form submitted successfully");
          setFirstname("");
          setLastname("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          alert("Form submission failed");
        }
      } catch (error) {
        console.error("Error in form submission:", error);
        alert("Form submission failed");
      }
    }else if (role === "Help") {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/addhelp`, {
          firstname,
          lastname,
          email,
          subject,
          message,
          role,
        });
        if (res.status === 200) {
          alert("Form submitted successfully");
          setFirstname("");
          setLastname("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          alert("Form submission failed");
        }
      } catch (error) {
        console.error("Error in form submission:", error);
        alert("Form submission failed");
      }
    }
  };
  return (
    <div className="w-full bg-white h-auto ">
      <div>
        <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full ">
          {role === "Help" && (
            <h2 className="text-[24px] md:text-[40px] font-bold mb-6 text-black">
              Get assistance from PACT
            </h2>
          )}
          <form onSubmit={handleForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full mt-1 pt-2 border-b border-gray-300 outline-none focus:border-gray-500 focus:ring-0"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full mt-1 pt-2 border-b border-gray-300 outline-none focus:border-gray-500 focus:ring-0"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Email Id</label>
              <input
                type="email"
                placeholder="examplemail@gmail.com"
                className="w-full mt-1 pt-2 border-b border-gray-300 outline-none focus:border-gray-500 focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full mt-1 pt-2 border-b border-gray-300 outline-none focus:border-gray-500 focus:ring-0"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Type your Message"
                className="w-full mt-1 pt-2 border-b border-gray-300 outline-none focus:border-gray-500 focus:ring-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
