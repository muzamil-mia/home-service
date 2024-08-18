import React, { useState } from "react";
import { roles, statesList } from "../utils/constants";
import axios from "axios";

const VendorRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    costPerDay: "",
    role: "",
    address: {
      street: "",
      landmark: "",
      district: "",
      state: "",
      pinCode: "",
    },
  });

  const handleChange = (e) => {
    const { type, name } = e.target;
    const [outerObj, innerObj] = name.split(".");
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    if (innerObj) {
      setFormData((prevData) => ({
        ...prevData,
        [outerObj]: {
          ...prevData[outerObj],
          [innerObj]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const canSubmit = Object.values(formData).every(
    (value) => value !== null && value !== ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
    console.log(JSON.stringify(formData, null, 2));

    try {
      const response = await axios.post(
        "http://localhost:8080/vendors",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Vendor registered successfully", response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="w-full justify-center p-4 my-8 bg-gray-50 ">
      <div className="flex justify-between bg-gray-100 rounded-md shadow-lg">
        <div className="p-4 mb-4 w-1/2">
          <p className="flex items-center mb-4 w-full">
            <label htmlFor="name" className="text-gray-500 font-light w-1/4">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              placeholder="Full Name"
              onChange={handleChange}
              className="border border-gray-500 w-3/4 rounded-sm py-2 px-3 shadow focus:ring-2 focus:outline-none"
            />
          </p>
          <p className="flex items-center mb-4 w-full">
            <label htmlFor="email" className="text-gray-500 font-light w-1/4">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              placeholder="@gmail.com"
              onChange={handleChange}
              className="border border-gray-500 w-3/4 rounded-sm py-2 px-3 pl-2 shadow focus:ring-2 focus:outline-none"
            />
          </p>
          <p className="flex items-center mb-4 w-full">
            <label
              htmlFor="password"
              className="text-gray-500 font-light w-1/4"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-500 w-3/4 rounded-sm py-2 px-3 shadow focus:ring-2 focus:outline-none"
            />
          </p>
          <p className="flex items-center mb-4 w-full">
            <label htmlFor="phone" className="text-gray-500 font-light w-1/4">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-500 w-3/4 rounded-sm py-2 px-3 shadow focus:ring-2 focus:outline-none"
            />
          </p>
          <p className="flex items-center mb-4 w-full">
            <label
              htmlFor="costPerDay"
              className="text-gray-500 font-light w-1/4"
            >
              Cost Per Day:
            </label>
            <input
              type="text"
              id="costPerDay"
              name="costPerDay"
              placeholder="Phone Number"
              value={formData.costPerDay}
              onChange={handleChange}
              className="border border-gray-500 w-3/4 rounded-sm py-2 px-3 shadow focus:ring-2 focus:outline-none"
            />
          </p>
          <p className="mb-4 flex">
            <label
              for="company_category"
              className="text-gray-500 font-light block w-1/4 pt-2"
            >
              Role:
            </label>
            <select
              name="role"
              id="role"
              onChange={handleChange}
              value={formData.role}
              className="border border-gray-300 w-[76%] rounded-sm py-2 px-3 shadow focus:ring-2 focus:outline-none"
            >
              <option value="">Choose</option>
              {roles.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </p>
        </div>
        <div className="p-4 mb-4 w-1/2">
          <p className="flex items-center mb-4 w-full">
            <label htmlFor="street" className="text-gray-500 font-light w-1/4">
              Street:
            </label>
            <input
              type="text"
              id="street"
              name="address.street"
              value={formData.address.street}
              placeholder="Street"
              onChange={handleChange}
              className="border border-gray-500 w-3/4 rounded-sm py-2 px-3 shadow focus:ring-2 focus:outline-none"
            />
          </p>
          <p className="flex items-center mb-4 w-full">
            <label for="pinCode" className="text-gray-500 font-light w-1/4">
              Pin Code:
            </label>
            <input
              type="text"
              id="pincode"
              name="address.pinCode"
              placeholder="pin"
              value={formData.pinCode}
              onChange={handleChange}
              className="border border-gray-500 w-3/4 rounded-sm py-2 px-3 shadow focus:ring-2 focus:outline-none"
            />
          </p>
          <p className="flex items-center mb-4 w-full">
            <label
              htmlFor="landmark"
              className="text-gray-500 font-light w-1/4"
            >
              Landmark:
            </label>
            <input
              type="text"
              id="landmark"
              name="address.landmark"
              value={formData.address.landmark}
              placeholder="landmark"
              onChange={handleChange}
              className="border border-gray-500 w-3/4 rounded-sm py-2 px-3 pl-2 shadow focus:ring-2 focus:outline-none"
            />
          </p>
          <p className="flex items-center mb-4 w-full">
            <label
              htmlFor="pan_number"
              className="text-gray-500 font-light w-1/4"
            >
              District:
            </label>
            <input
              type="text"
              id="district"
              name="address.district"
              placeholder="district"
              value={formData.address.district}
              onChange={handleChange}
              className="border border-gray-500 w-3/4 rounded-sm py-2 px-3 shadow focus:ring-2 focus:outline-none"
            />
          </p>
          <p className="flex items-center mb-4 w-full">
            <label htmlFor="state" className="text-gray-500 font-light w-1/4">
              State:
            </label>
            <select
              id="state"
              name="address.state"
              onChange={handleChange}
              value={formData.address.state}
              className="border border-gray-300 w-1/2 rounded-sm py-2 px-3 shadow focus:ring-2 focus:outline-none"
            >
              <option value="">Choose</option>
              {statesList.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className={`w-[120px] py-2 rounded-sm shadow block ${
            canSubmit
              ? "bg-gray-300 rounded-sm shadow hover:bg-gray-400 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          onClick={canSubmit ? handleSubmit : null}
          disabled={!canSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default VendorRegister;
