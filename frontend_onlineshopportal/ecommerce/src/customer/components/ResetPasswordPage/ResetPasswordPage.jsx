import React, { useState } from "react";
import axios from "axios";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reset = () => {
  const [resetRequest, setResetRequest] = useState({
    newpassword: "",
    confirmpassword: "",
  });

  let navigate = useNavigate();

  const handleUserInput = (e) => {
    setResetRequest({ ...resetRequest, [e.target.name]: e.target.value });
  };

  const resetAction = (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem("userid");

    if (!userId) {
      toast.error("No User Found", {
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

    if (resetRequest.newpassword !== resetRequest.confirmpassword) {
      toast.error("New password and confirm password do not match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const requestBody = {
        userId: userId,
        newPass: resetRequest.confirmpassword,
      };
      fetch("http://localhost:8080/users/update/password", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((result) => {
          console.log(requestBody);
          console.log(result);
          console.log(resetRequest.confirmpassword);
          console.log(userId);
          result.json().then((res) => {
            console.log(res);

            setTimeout(() => {
              navigate("/users/login");
            }, 1000);

            if (res.mesg === "Successful Authentication!") {
              console.log("Got the success response");
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
    }
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
        <form>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            name="password"
            placeholder="Password"
            value={resetRequest.newpassword}
            onChange={handleUserInput}
            pattern=".{6,}"
            title="Password should be at least 6 characters long"
            required
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            name="password"
            placeholder="Password"
            value={resetRequest.confirmpassword}
            onChange={handleUserInput}
            pattern=".{6,}"
            title="Password should be at least 6 characters long"
            required
          />
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              onClick={resetAction}
            >
              Reset Password
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
export default Reset;
