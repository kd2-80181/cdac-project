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

const Email = () => {
  const [emailRequest, setEmailRequest] = useState({
    email: "",
  });

  let navigate = useNavigate();

  const handleUserInput = (e) => {
    setEmailRequest({ ...emailRequest, [e.target.name]: e.target.value });
  };

  const emailAction = (e) => {
    // Assuming emailRequest.email is the email you want to include in the URL
    const email = encodeURIComponent(emailRequest.email);

    axios
      .get(`http://localhost:8080/users/reset/${email}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;
        console.log(res);

        console.log(res.id);

        if (true) {
          // You may need to replace this condition with your actual logic
          console.log("Got the success response");

          if (res.id != null) {
            sessionStorage.setItem("userid", res.id);
          }

          if (res.id !== 0) {
            toast.success("Email Verified", {
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
              navigate("/users/reset");
            }, 1000);
          } else {
            toast.error("Invalid Email", {
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
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label
            className="mr-1 text-5xl font-bold text-blue-500"
            style={{
              background: "linear-gradient(to right, #3498db, #6ab7ff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Enter Your Email
          </label>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        <form>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            name="email"
            placeholder="Email"
            value={emailRequest.email}
            onChange={handleUserInput}
            required
          />
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              onClick={emailAction}
            >
              Next
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
      </div>
    </section>
  );
};
export default Email;
