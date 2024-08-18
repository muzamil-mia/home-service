import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate()
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const timerRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState("")

  
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleShowMessage = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("")
    }, 5000);
  };

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleLoginSuccess = () => {
   const timer = setTimeout(() => {
    navigate("/")
    }, 3000)

    return () => clearTimeout()
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email)
    console.log(password)

    try {
      const response = await axios.post('http://localhost:8080/vendors/login', {
        email: email,
        password: password,
      });

      const { data, status, message } = response.data;
      console.log(response)

      if (status === 200) {
        setSuccessMessage('Login successful redirecting to home...');
        handleShowMessage()
        handleLoginSuccess();
        //setError(false);
        // Handle successful login here (e.g., redirect to dashboard, save token, etc.)
      } else if(status === 401) {
        setErrorMessage(message);
        handleShowMessage()
        //setError(true);
      }
    } catch (error) {
      console.log(error)
      setErrorMessage('Either email or password is incorrect.');
      handleShowMessage()
      //setError(true);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center flex items-center justify-center bg-opacity-50">
        {/* Sign-in form */}
        <div className="relative z-10 flex shadow-lg flex-col justify-center items-center p-8 rounded-lg w-[90%] max-w-md bg-white mt-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Sign In</h2>
          <p className="text-gray-500 mb-6 text-center text-sm">
            Enter your email and password to access your account.
          </p>

          <form onSubmit={handleLogin} className="w-full space-y-4">
            <input
              type="email"
              required
              ref={emailRef}
              placeholder="Email"
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 placeholder:text-sm"
            />

            <input
              type="password"
              required
              ref={passwordRef}
              placeholder="Password"
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 placeholder:text-sm"
            />

            <p className="text-red-500 text-xs text-center">
              {errorMessage ? errorMessage : ""}
            </p>
            <p className="text-green-500 text-xs text-center">{successMessage ? successMessage : ""}</p>

            <button
              type="submit"
              className="w-full p-3 bg-gray-500 hover:bg-gray-400 hover:text-black text-white text-sm rounded-lg font-semibold transition"
            >
              Sign In
            </button>

            <p className="text-center mt-4 text-gray-500 text-xs">
              New to HomeServo?{" "}
              <span className="text-black hover:underline">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
