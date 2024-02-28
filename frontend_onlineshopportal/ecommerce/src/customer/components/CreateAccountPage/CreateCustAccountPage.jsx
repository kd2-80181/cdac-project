// CreateUser.js
import React, { useState } from "react";
import axios from "axios";
//import {useHistory} from 'react-router-dom';
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpCust = () => {
  const [signupRequest, setSignupRequest] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER",
  });

  let navigate = useNavigate();

  const handleUserInput = (e) => {
    setSignupRequest({ ...signupRequest, [e.target.name]: e.target.value });
  };

  const signupAction = (e) => {
    if (
      !signupRequest.firstName ||
      !signupRequest.lastName ||
      !signupRequest.phoneNo ||
      !signupRequest.email ||
      !signupRequest.password
    ) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    fetch("http://localhost:8080/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupRequest),
    })
      .then((result) => {
        result.json().then((res) => {
          console.log(res.mesg);
          console.log(res);
          //sessionStorage.setItem('userid',res.id);
          console.log(res.id);

          if (true) {
            console.log("Got the success response");

            if (res.id != null) {
              sessionStorage.setItem("userid", res.id);
            }

            if (res.id !== undefined) {
              toast.success("Registered", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

              setTimeout(() => {
                navigate("/");
              }, 1000);
            } else {
              toast.error("Registration Failed", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Server Is Down", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    e.preventDefault();
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
      <div className="text-center md:text-left">
        <label className="mr-1 text-5xl font-bold text-blue-500" style={{ background: "linear-gradient(to right, #3498db, #6ab7ff)", WebkitBackgroundClip: "text", color: "transparent" }}>
          Sign Up
        </label>
      </div>
      </div>
      <div className="md:w-1/3 max-w-sm">
      
      
        <form>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            name="firstName"
            placeholder="Pradyumn"
            value={signupRequest.firstName}
            onChange={handleUserInput}
            pattern="^[a-zA-Z]+$"
            title="Only letters are allowed"
            required
          />

          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            name="lastName"
            placeholder="Pawar"
            value={signupRequest.lastName}
            onChange={handleUserInput}
            pattern="^[a-zA-Z]+$"
            title="Only letters are allowed"
            required
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            name="phoneNo"
            placeholder="9672291571"
            value={signupRequest.phoneNo}
            onChange={handleUserInput}
            pattern="^\d{10}$"
            title="Phone number should be 10 digits"
            required
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            name="email"
            placeholder="Email"
            value={signupRequest.email}
            onChange={handleUserInput}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Enter a valid email address"
            required
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            name="password"
            placeholder="Password"
            value={signupRequest.password}
            onChange={handleUserInput}
            pattern=".{6,}"
            title="Password should be at least 6 characters long"
            required
          />

          
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              onClick={signupAction}
            >
              Sign Up
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="/users/login"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
};
export default SignUpCust;
