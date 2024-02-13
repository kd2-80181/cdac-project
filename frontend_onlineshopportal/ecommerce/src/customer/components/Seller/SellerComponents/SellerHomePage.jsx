import React, { useEffect, useState } from "react";
import ProductService from "../SellerService/ProductService";
import { Link } from "react-router-dom";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const userid = sessionStorage.getItem("userid");
    if (userid) {
      init(userid);
    } else {
      // Handle the case when userid is not available in sessionStorage
      console.error("userid not found in sessionStorage");
    }
  }, []);

  const init = (userid) => {
    ProductService.getAllProduct()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (userid) => {
    ProductService.deleteProduct(userid)
      .then((res) => {
        setMsg("Deleted successfully!!!");
        init(sessionStorage.getItem("userid"));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-8 mx-auto mb-8">
    <div className="w-full overflow-x-auto bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-center">
        <table className="w-full table-fixed">
          <thead className="bg-indigo-800 text-white">
            <tr>
              <th className="w-1/12 px-4 py-2">Product Name</th>
              <th className="w-1/12 px-4 py-2">Description</th>
              <th className="w-1/12 px-4 py-2">Price</th>
              <th className="w-1/12 px-4 py-2">Quantity</th>
              <th className="w-1/12 px-4 py-2">Product Category</th>
              <th className="w-1/12 px-4 py-2">Product Type</th>
              <th className="w-1/12 px-4 py-2">Product Size</th>
              <th className="w-1/12 px-4 py-2">Brand</th>
              <th className="w-1/12 px-4 py-2">Discount</th>
              <th className="w-1/12 px-4 py-2"></th>
              <th className="w-1/12 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((p, num) => (
              <tr key={num} className="border-t border-gray-200">
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {p.productName}
                </td>
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{p.description}</td>
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{p.price}</td>
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{p.quantity}</td>
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{p.productCategory}</td>
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{p.productType}</td>
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{p.productSize}</td>
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{p.brand}</td>
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{p.discount}</td>
                <td className="w-1/12 px-4 py-2 max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{p.seller_id}</td>
                <td className="w-1/12 px-4 py-2 flex justify-around">
                  <Link
                    to={`/seller/home/editProduct/${p.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                  <button >
                    Edit
                  </button>  
                  </Link>
                  <Link
                    to={`/seller/addimage/${p.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Images
                  </Link>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  );
};

export default Home;

