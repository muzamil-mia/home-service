import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import axios from "axios";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (errorMessage || successMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout();
    }
  }, [errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submiting");

    try {
      const response = await axios.post(
        "http://localhost:8080/register/vendor",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.data.status === 201) {
        setSuccessMessage(response.data.message);
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response?.status === 409) {
        console.log(error?.response?.data?.message);
        setErrorMessage(error.response.data.message);
      }
    }
    console.log(errorMessage);
  };

  return (
    <>
      {successMessage ? (
        <div className="min-h-[550px] flex justify-center items-center border border-red 500">
          <div className="w-[400px] h-[300px] shadow-lg rounded-sm height-[400px] flex justify-center flex-col items-center">
            <div className="mb-2">
              <span className="block">
                <FcApproval className="text-6xl block" />
              </span>
            </div>
            <div className="mb-2">
              <p className="text-xl font-mono font-bold text-green-500">
                {successMessage}
              </p>
            </div>
            <div className="w-full flex justify-center mb-2 mt-8">
            <button
              type="submit"
              className="w-[40%] p-3 bg-green-600 hover:bg-green-500 text-white font-mono font-bold rounded-md transition"
            >
             <Link to="/signin">Signin</Link>
            </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 w-[30%] min-h-[550px] flex flex-col justify-center mx-auto shadow-lg items-center rounded-lg my-4">
          <form onSubmit={handleSubmit} className="w-full space-y-4 my-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Create Your Account
            </h2>

            <input
              type="text"
              placeholder="full name"
              id="fullName"
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-800 bg-gray-100"
            />

            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-800 bg-gray-100"
            />
            <p className="text-sm text-red-500">
              {emailError ? emailError : ""}
            </p>

            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-800 bg-gray-100"
            />
            <p className="text-sm text-red-500">
              {passwordError ? passwordError : ""}
            </p>
            <p className="text-red-500 text-sm">
              {errorMessage ? errorMessage : ""}
            </p>

            <button
              type="submit"
              className="w-full p-3 bg-gray-500 hover:bg-gray-400 hover:text-black text-white rounded-md transition"
            >
              Register
            </button>

            <p className="text-center mt-4 text-gray-500 text-sm">
              Already have an account?{" "}
              <span className="text-black hover:underline">
                <Link to="/Signin">Sign In</Link>
              </span>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUp;
