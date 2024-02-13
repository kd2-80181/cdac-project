import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';

const AddImage = () => {
  const { id } = useParams();
  const [productID, setProductID] = useState(id);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleImageUpload = () => {
    if (image && productID) {
      const formData = new FormData();
      formData.append('productId', productID);
      formData.append('file', image);

      axios.post(`http://localhost:8080/image/upload/${productID}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log('Image uploaded successfully:', response.data);
          Navigate('/seller/home');
          // Handle the response as needed, e.g., update the UI
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
          // Handle the error as needed
        });
    } else {
      console.error('Product ID or image not provided');
      // Handle the case where product ID or image is not provided
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-6 bg-white shadow-md rounded-md">
        <label htmlFor="productID" className="block text-sm font-medium text-gray-700">
          Product ID:
        </label>
        <input
          type="text"
          id="productID"
          value={productID}
          readOnly // Ensure that the input is read-only
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700 mt-4">
          Upload Image:
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          onClick={handleImageUpload}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default AddImage;
