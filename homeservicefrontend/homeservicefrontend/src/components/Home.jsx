import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  validateEmail,
  validatePassword,
  checkPasswordStrength,
} from "../utils/validate";
import { jobs, testmonials } from "../utils/constants";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email_id: "",
    user_password: "",
    uin: "",
    confirm_user_password: "",
    account_type: "",
    owner_type: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const uinRef = useRef(null);
  const accountRef = useRef(null);
  const ownerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEmailError(null);
      setPasswordError(null);
      setErrorMessage(null);
    }, 5000); // 5 seconds

    return () => clearTimeout(timeout);
  }, [emailError, passwordError, errorMessage]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const uin = uinRef?.current?.value;
    const accountType = accountRef?.current?.value;
    const ownerType = ownerRef?.current?.value;

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setEmailError(emailError);
    setPasswordError(passwordError);
    setPasswordStrength(checkPasswordStrength(password));

    if (emailError || passwordError) return;

    setUserData((prevdata) => ({
      ...prevdata,
      email_id: email,
      user_password: password,
      uin: uin,
      account_type: accountType,
      owner_type: ownerType,
    }));
    console.log("sending data");

    try {
      const response = await axios.post(
        "http://localhost:8080/account/create/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.status === 201) {
        console.log("signup success");
        navigate("/SignUpSuccess", {
          state: { message: response?.data?.message_txt },
        });
      } else {
        console.log("signup failed");
      }
    } catch (error) {
      const status = error?.response?.status;
      if (status === 409) {
        setErrorMessage(error?.response?.data?.message_txt);
      } else if (status >= 400) {
        setErrorMessage(error?.response?.data?.message_txt);
      }
    }
  };

  return (
    <div className="">
      <div className="w-[100%] min-h-screen bg-white pl-6 flex flex-col">
        <div className="flex flex-col rounded-3xl w-[98%] justify-center items-start space-y-4 bg-gray-50 mb-4 mt-8">
          <h1 className="text-sm ml-0 font-extrabold tracking-tight text-slate-900 sm:text-5xl font-serif pl-2 pt-2">
            We Are HomeServO Revolutionizing
          </h1>
          <h1 className="text-xl ml-0 font-extrabold tracking-tight text-slate-900 sm:text-5xl font-serif pl-2">
            Home Services
          </h1>

          <p className="mr-auto text-s text-slate-500 rounded-xl font-serif pl-2">
            At HomeServO, we make home service management easy and efficient.
            Our goal is to simplify the process for both customers and service
            providers, <br /> so you can focus on what matters most. From
            streamlining service requests to offering smart solutions, <br />{" "}
            we're here to improve every part of the home service experience.
          </p>
        </div>
        <div className="my-4 bg-gray-50 rounded-md w-[98%]">
        <h2 className="text-md font-serif ml-6 my-2 uppercase font-bold">Featured Jobs</h2>
          <div className=" mx-auto flex justify-around my-3">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="w-[30%] p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <p className="text-md font-serif font-bold tracking-wider">
                  {job.name}
                </p>
                <p className="font-serif">{job.location}</p>
                <Link to="/signin" className="block w-[140px] mt-2 pb-2 pt-1 text-center hover:bg-gray-400 hover:text-black transition-all rounded-md bg-gray-500 text-white font-serif">
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-gray-50 rounded-md w-[98%]">
        <h2 className="text-md font-serif ml-6 my-2 uppercase font-bold text-center">Testimonials / Our Happy Customers</h2>
          <div className=" mx-auto flex justify-around my-3">
            {testmonials.map((item, index) => (
              <div
                key={index}
                className="w-[30%] p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <p className="font-serif text-center">{item.description}</p>
                <p className="text-sm font-serif font-italic tracking-wider text-center italicmy-4 text-gray-500 my-4">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
