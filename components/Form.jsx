"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useFormContext } from "@app/context";
import { indianStates } from "@constants/states";
import { CheckCircle } from "lucide-react";

const Form = (props) => {
  const { isFormOpen, setIsFormOpen } = useFormContext();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [wrongMobile, setWrongMobile] = useState(false);
  const [duplicateMobile, setDuplicateMobile] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPinCode, setWrongPinCode] = useState(false);
  const [duplicateEmail, setDuplicateEmail] = useState(false);
  const [step, setStep] = useState(1);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
    setIsFormSubmitted(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pinCode
    ) {
      alert("Please fill in all the fields.");
      return;
    } else if (formData.name && formData.mobile && formData.email) {
      try {
        const result = await fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pinCode: formData.pinCode,
          }),
        });

        const data = await result.json();

        if (result.ok) {
          setIsFormSubmitted(true);
        }

        if (!result.ok) {
          if (data.message && data.message.includes("mobile")) {
            setWrongMobile(true);
            setStep(1);
            setFormData((prev) => ({
              ...prev,
              mobile: "",
            }));
          }

          if (data.message && data.message.includes("email")) {
            setWrongEmail(true);
            setStep(1);
            setFormData((prev) => ({
              ...prev,
              email: "",
            }));
          }

          if (data.message && data.message.includes("pin")) {
            setWrongPinCode(true);
            setStep(2);
            setFormData((prev) => ({
              ...prev,
              pinCode: "",
            }));
          }

          if (data.duplicateField === "mobile") {
            setDuplicateMobile(true);
            setStep(1);
            setFormData((prev) => ({
              ...prev,
              mobile: "",
            }));
            console.log(duplicateMobile);
          } else if (data.duplicateField === "email") {
            setDuplicateEmail(true);
            setStep(1);
            setFormData((prev) => ({
              ...prev,
              email: "",
            }));
            console.log(duplicateEmail);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent fixed inset-0 w-full p-3 font-montserrat">
      {isFormSubmitted ? (
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto bg-offWhite rounded-lg shadow-lg p-4 sm:p-8 relative flex items-center justify-center mx-auto">
          <div
            onClick={toggleForm}
            className="absolute top-3 left-3 cursor-pointer hover:text-orange-600 transition-all duration-300 h-fit w-fit"
          >
            <X size={20} />
          </div>

          <div className="p-6 sm:p-10 md:p-12 text-center">
            <div className="flex items-center justify-center mb-4 sm:mb-5">
              <CheckCircle
                size={40}
                className="text-green-600 animate-bounce"
              />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 mb-3 sm:mb-4">
              Thank You for Contacting Us!
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 pt-3">
              We've received your details and appreciate your interest. Our team
              will get back to you soon.
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`w-full max-w-md bg-offWhite rounded-lg shadow-lg ${
            step === 2 && "pb-14"
          } p-8  relative `}
        >
          <div
            onClick={toggleForm}
            className="absolute inset-0 top-3 left-3 cursor-pointer hover:text-orange-600 transition-all duration-300 h-fit w-fit"
          >
            <X size={20} />
          </div>
          <div
            onClick={toggleForm}
            className="absolute top-3 right-3 cursor-pointer pointer-events-none h-fit w-fit"
          >
            <div
              className={`text-[0.65rem] font-semibold flex justify-center items-center h-8 w-8 bg-white rounded-full border-4 ${
                step === 1 ? "border-l-black border-t-black" : "border-black"
              } `}
            >
              {" "}
              {step}/2
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 tracking-wide">
            {props.title}
          </h2>
          <p className="text-center text-gray-600 mb-8 tracking-wide">
            {step === 1 ? props.text1 : props.text2}
          </p>
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    autoComplete="off"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-offWhite"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    onClick={() => {
                      setWrongMobile(false);
                      setDuplicateMobile(false);
                    }}
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="98765 43210"
                    value={formData.mobile}
                    autoComplete="off"
                    onChange={handleChange}
                    minLength={10}
                    maxLength={10}
                    // pattern="\d*"
                    onInvalid={(e) => {
                      e.preventDefault();
                      setWrongMobile(true);
                      setStep(1);
                      setFormData((prev) => ({
                        ...prev,
                        mobile: "",
                      }));
                    }}
                    className={`w-full px-3 py-2 border bg-offWhite border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      (wrongMobile || duplicateMobile) &&
                      "border-red-500 focus:ring-0"
                    }`}
                  />
                  {wrongMobile && (
                    <div className="text-xs mt-1 text-red-600">
                      Please enter a valid number.
                    </div>
                  )}
                  {duplicateMobile && (
                    <div className="text-xs mt-1 text-red-600">
                      This number is already registered.
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    onClick={() => {
                      setWrongEmail(false);
                      setDuplicateEmail(false);
                    }}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    autoComplete="off"
                    onChange={handleChange}
                    // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    onInvalid={(e) => {
                      e.preventDefault();
                      setWrongEmail(true);
                      setStep(1);
                      setFormData((prev) => ({
                        ...prev,
                        email: "",
                      }));
                    }}
                    className={`w-full px-3 py-2 border bg-offWhite border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      (wrongEmail || duplicateEmail) &&
                      "border-red-500 focus:ring-0"
                    }`}
                  />
                  {wrongEmail && (
                    <div className="text-xs mt-1 text-red-600">
                      Please enter a valid email.
                    </div>
                  )}
                  {duplicateEmail && (
                    <div className="text-xs mt-1 text-red-600">
                      This email is already registered.
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setStep(2)}
                  type="button"
                  className="w-full bg-black text-offWhite hover:text-white py-2 px-4 rounded-md hover:bg-orange-600  transition duration-300 ease-in-out"
                >
                  Next
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address (Block No, Building name, Street name)
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="123, Tower 0, Street 9"
                    value={formData.address}
                    autoComplete="off"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-offWhite"
                  />
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    autoComplete="off"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-offWhite"
                  />
                </div>

                {/* State */}
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    State <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-offWhite"
                  >
                    <option value="" className="text-gray-400">
                      Select a state
                    </option>
                    {indianStates.map((state, index) => (
                      <option
                        key={index}
                        value={state}
                        className="text-gray-700"
                      >
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="pinCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pin Code <span className="text-red-600">*</span>
                  </label>
                  <input
                    onClick={() => {
                      setWrongPinCode(false);
                    }}
                    id="pinCode"
                    name="pinCode"
                    type="text"
                    placeholder="123456"
                    minLength={6}
                    maxLength={6}
                    value={formData.pinCode}
                    autoComplete="off"
                    onChange={handleChange}
                    onInvalid={(e) => {
                      e.preventDefault();
                      setWrongPinCode(true);
                      setStep(2);
                      setFormData((prev) => ({
                        ...prev,
                        pinCode: "",
                      }));
                    }}
                    className={`w-full px-3 py-2 border bg-offWhite border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      wrongPinCode && "border-red-500 focus:ring-0"
                    }`}
                  />
                  {wrongPinCode && (
                    <div className="text-xs mt-1 text-red-600">
                      Please enter a valid 6 digit pin code.
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-offWhite hover:text-white py-2 px-4 rounded-md hover:bg-orange-600  transition duration-300 ease-in-out"
                >
                  Submit
                </button>
                <div
                  onClick={() => setStep(1)}
                  className="text-sm pb-[0.16rem] font-medium absolute bottom-3 right-4 cursor-pointer hover:text-orange-600 transition-all duration-300 h-fit w-fit"
                >
                  Back
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
