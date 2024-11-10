"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useFormContext } from "@app/context";

const Form = (props) => {
  const { isFormOpen, setIsFormOpen } = useFormContext();

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent fixed inset-0 w-full p-3 font-montserrat">
      <div className="w-full max-w-md bg-offWhite rounded-lg shadow-lg p-8 relative ">
        <div
          onClick={toggleForm}
          className="absolute inset-0 top-3 left-3 cursor-pointer hover:text-orange-600 transition-all duration-300 h-fit w-fit"
        >
          <X size={20} />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 tracking-wide">
          {props.title}
        </h2>
        <p className="text-center text-gray-600 mb-8 tracking-wide">
          {props.text}
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              autoComplete="off"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-offWhite"
            />
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.mobile}
              autoComplete="off"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-offWhite "
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              autoComplete="off"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-offWhite "
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-offWhite hover:text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
