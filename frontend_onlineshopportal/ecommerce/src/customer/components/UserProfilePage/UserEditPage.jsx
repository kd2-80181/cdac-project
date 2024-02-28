import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserProfilePageService from "./UserProfilePageService";

const UserEditProfile = () => {
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    const userId = sessionStorage.getItem("userid");

    if (userId) {
      UserProfilePageService.getUserById(userId)
        .then((res) => {
          const userData = res.data;
          setUser({
            id: userData.id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phoneNo: userData.phoneNo,
            email: userData.email,
            password: userData.password,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      console.error("User ID not found in sessionStorage");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const updateUser = (e) => {
    e.preventDefault();
    UserProfilePageService.editUser(user)
      .then((res) => {
        navigate("/users/accountpage"); // Redirect to the account page after editing
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  
    return (
      <div className="container mt-8 mx-auto">
        <div className="w-full overflow-hidden bg-white shadow-md rounded-lg">
          <div className="flex items-center justify-center">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={(e) => updateUser(e)}
            >
              {/* Input fields for user data */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-input rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => handleChange(e)}
                  value={user.firstName}
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-input rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => handleChange(e)}
                  value={user.lastName}
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNo"
                  className="form-input rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => handleChange(e)}
                  value={user.phoneNo}
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => handleChange(e)}
                  value={user.email}
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-input rounded-md shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => handleChange(e)}
                  value={user.password}
                />
              </div>
  
              {/* Submit button */}
              <div className="flex items-center justify-center mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
export default UserEditProfile;
