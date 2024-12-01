"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useFormContext } from "@app/context";
import { indianStates } from "@constants/states";
import { CheckCircle } from "lucide-react";

const FormNew = (props) => {
  const { isFormOpen, setIsFormOpen } = useFormContext();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const [wrongMobile, setWrongMobile] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPinCode, setWrongPinCode] = useState(false);
  const [wrongCity, setWrongCity] = useState(false);
  const [wrongName, setWrongName] = useState(false);

  const [duplicateMobile, setDulicateMobile] = useState(false);
  const [duplicateEmail, setDulicateEmail] = useState(false);

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

  const fieldChecks = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobileRegex = /^[6-9]\d{9}$/; // Ensures 10 digits, starting with 6-9
    const pinCodeRegex = /^[1-9][0-9]{5}$/; // Ensures 6 digits, not starting with 0
    //name and state cannot contain numbers
    const cityRegex = /^[A-Za-z\s'-]+$/;
    const nameRegex = /^[A-Za-z\s'-]+$/;

    let flag = true;

    if (!nameRegex.test(formData.name)) {
      setWrongName(true);
      setStep(1);
      setFormData((prev) => ({
        ...prev,
        name: "",
      }));
      flag = false;
    }
    if (!emailRegex.test(formData.email)) {
      setWrongEmail(true);
      setStep(1);
      setFormData((prev) => ({
        ...prev,
        email: "",
      }));
      flag = false;
    }
    if (!mobileRegex.test(formData.mobile)) {
      setWrongMobile(true);
      setStep(1);
      setFormData((prev) => ({
        ...prev,
        mobile: "",
      }));
      flag = false;
    }
    if (!pinCodeRegex.test(formData.pinCode)) {
      setWrongPinCode(true);
      setStep(2);
      setFormData((prev) => ({
        ...prev,
        pinCode: "",
      }));
      flag = false;
    }
    if (!cityRegex.test(formData.city)) {
      setWrongCity(true);
      setStep(2);
      setFormData((prev) => ({
        ...prev,
        city: "",
      }));
      flag = false;
    }

    return flag;
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
      alert("Please fill in all fields.");
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    const areFieldsCorrect = fieldChecks();
    if (areFieldsCorrect) {
      try {
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
        //   console.log("response object :", response);
        if (response.ok) {
          setIsFormSubmitted(true);
        } else if (!response.ok) {
          console.log("response object not ok :", response);
          const result = await response.json();
          console.log("result(extracted json from response) :", result);
          if (result.uniqueMobile === false) {
            setDulicateMobile(true);
            setStep(1);
            setFormData((prev) => ({
              ...prev,
              mobile: "",
            }));
          }
          if (result.uniqueEmail === false) {
            setDulicateEmail(true);
            setStep(1);
            setFormData((prev) => ({
              ...prev,
              email: "",
            }));
          }
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent fixed inset-0 w-full p-3 font-montserrat">
      {isFormSubmitted ? (
        <div className="w-full sm:w-3/4 md:w-2/3 xl:w-1/2 h-auto bg-offWhite rounded-lg shadow-lg p-4 sm:p-8 relative flex items-center justify-center mx-auto">
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
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold textblack mb-3 sm:mb-4">
              <span className="text-orange-600">Thank You </span> for Contacting
              Us!
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 pt-3">
              We've received your details and appreciate your interest. Our team
              will get back to you within 24 hours.
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`${
            isSubmitting && "pointer-events-none"
          } w-full max-w-md bg-offWhite rounded-lg shadow-lg ${
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
                    onClick={() => {
                      setWrongName(false);
                    }}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    autoComplete="off"
                    onChange={(e) => {
                      const inputValue = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        name: inputValue,
                      }));
                      if (
                        /^[A-Za-z\s'-]+$/.test(inputValue) ||
                        inputValue === ""
                      ) {
                        setWrongName(false);
                      } else {
                        setWrongName(true);
                      }
                    }}
                    className={`w-full px-3 py-2 border bg-offWhite border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      wrongName && "border-red-500 focus:ring-0"
                    }`}
                  />
                  {wrongName && (
                    <div className="text-xs mt-1 text-red-600">
                      Name cannot contain special characters or numbers
                    </div>
                  )}
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
                      setDulicateMobile(false);
                    }}
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="98765 43210"
                    value={formData.mobile}
                    autoComplete="off"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        mobile: inputValue,
                      }));
                      if (
                        /^[6-9]\d{9}$/.test(inputValue) ||
                        inputValue === ""
                      ) {
                        setWrongMobile(false);
                      } else {
                        setWrongMobile(true);
                      }
                    }}
                    maxLength={10}
                    pattern="^[6-9]\d{9}$"
                    className={`w-full px-3 py-2 border bg-offWhite border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      (wrongMobile || duplicateMobile) &&
                      "border-red-500 focus:ring-0"
                    }`}
                  />
                  {wrongMobile && (
                    <div className="text-xs mt-1 text-red-600">
                      Please enter a valid number (10 digit, starting with 6, 7,
                      8, 9)
                    </div>
                  )}
                  {duplicateMobile && (
                    <div className="text-xs mt-1 text-red-600">
                      This mobile number is already in use, please try a
                      different one
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
                      setDulicateEmail(false);
                    }}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    autoComplete="off"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        email: inputValue,
                      }));
                      if (
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                          inputValue
                        ) ||
                        inputValue === ""
                      ) {
                        setWrongEmail(false);
                      } else {
                        setWrongEmail(true);
                      }
                    }}
                    className={`w-full px-3 py-2 border bg-offWhite border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      (wrongEmail || duplicateEmail) &&
                      "border-red-500 focus:ring-0"
                    }`}
                  />
                  {wrongEmail && (
                    <div className="text-xs mt-1 text-red-600">
                      Please enter a valid email address (e.g.,
                      name@example.com)
                    </div>
                  )}
                  {duplicateEmail && (
                    <div className="text-xs mt-1 text-red-600">
                      This email is already in use, please try a different one
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
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        address: inputValue,
                      }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-offWhite"
                  />
                </div>

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
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        city: inputValue,
                      }));
                      if (
                        /^[A-Za-z\s'-]+$/.test(inputValue) ||
                        inputValue === ""
                      ) {
                        setWrongCity(false);
                      } else {
                        setWrongCity(true);
                      }
                    }}
                    className={`w-full px-3 py-2 border bg-offWhite border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      wrongCity && "border-red-500 focus:ring-0"
                    }`}
                  />
                  {wrongCity && (
                    <div className="text-xs mt-1 text-red-600">
                      City name cannot contain special characters or numbers
                    </div>
                  )}
                </div>

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
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        state: inputValue,
                      }));
                    }}
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
                    id="pinCode"
                    name="pinCode"
                    type="tel"
                    placeholder="123456"
                    value={formData.pinCode}
                    autoComplete="off"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        pinCode: inputValue,
                      }));
                      if (
                        /^[1-9][0-9]{5}$/.test(inputValue) ||
                        inputValue === ""
                      ) {
                        setWrongPinCode(false);
                      } else {
                        setWrongPinCode(true);
                      }
                    }}
                    maxLength={6}
                    className={`w-full px-3 py-2 border bg-offWhite border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      wrongPinCode && "border-red-500 focus:ring-0"
                    }`}
                  />
                  {wrongPinCode && (
                    <div className="text-xs mt-1 text-red-600">
                      Please enter a valid pincode (6 digit, not starting with
                      0)
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className={`w-full text-offWhite hover:text-white py-2 px-4 rounded-md hover:bg-orange-600  transition duration-300 ease-in-out ${
                    isSubmitting
                      ? "bg-black/80 pointer-events-none"
                      : "bg-black"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
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

export default FormNew;
