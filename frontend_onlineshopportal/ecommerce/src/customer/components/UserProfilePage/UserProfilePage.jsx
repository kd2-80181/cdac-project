import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import UserProfilePageService from "./UserProfilePageService";

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    const userId = sessionStorage.getItem("userid");

    if (userId) {
      UserProfilePageService.getUserById(userId)
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      console.error("User ID not found in sessionStorage");
    }
  };

  const handleDelete = () => {
    const userId = sessionStorage.getItem("userid");

    if (userId) {
      UserProfilePageService.deleteUser(userId)
        .then((res) => {
          // You can redirect or perform additional actions after deletion
          Navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error("User ID not found in sessionStorage");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          {user && (
            <div>
              <div className="mb-4">
                <strong>First Name:</strong> {user.firstName}
              </div>
              <div className="mb-4">
                <strong>Last Name:</strong> {user.lastName}
              </div>
              <div className="mb-4">
                <strong>Phone Number:</strong> {user.phoneNo}
              </div>
              <div className="mb-4">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="mb-4">
                <strong>Password:</strong> {user.password}
              </div>
            </div>
          )}
        </div>
        <div className="bg-gray-100 p-4 flex justify-end">
          <Link
            to="/users/editaccountpage"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
