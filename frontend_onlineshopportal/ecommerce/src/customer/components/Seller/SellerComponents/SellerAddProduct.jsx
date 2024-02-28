import React, { useState } from "react";
import ProductService from "../SellerService/ProductService";

const SellerAddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    quantity: "",
    productCategory: "",
    productType: "",
    productSize: "",
    brand: "",
    discount: "",
    //status: "",
  });

  

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const [msg, setMsg] = useState("");

  const productRegister = (e) => {
    e.preventDefault();

    const seller_id = sessionStorage.getItem("userid");

    if (!seller_id) {
      console.error("Seller ID not found in sessionStorage");
      return;
    }

    const productData = {
      ...product,
      seller_id: seller_id,
    };

    ProductService.saveProduct(productData)
      .then((res) => {
        console.log("Product added successfully!!!");
        setMsg("Product added successfully!!!");
        setProduct({
          //productName: "",
          description: "",
          price: "",
          quantity: "",
          productCategory: "",
          productType: "",
          productSize: "",
          brand: "",
          discount: "",
          //status: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>

              <div className="card-body">
                <form onSubmit={(e) => productRegister(e)}>
                  <div className="mb-3">
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.description}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.quantity}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Product Category</label>
                    <select
                      name="productCategory"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productCategory}
                    >
                      <option value="">Select Product Category</option>
                      <option value="CATEGORY_MEN">Men</option>
                      <option value="CATEGORY_WOMEN">Women</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>Enter Product Type</label>
                    <select
                      name="productType"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productType}
                    >
                      <option value="">Select Product Type</option>
                      <option value="TYPE_SHIRTS">Shirts</option>
                      <option value="TYPE_PANTS">Pants</option>
                      <option value="TYPE_TSHIRTS">T-Shirts</option>
                      <option value="TYPE_KURTA">Kurta</option>
                      <option value="TYPE_SADI">Sadi</option>
                      <option value="TYPE_LEGGINGS">Leggings</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>Enter Product Size</label>
                    <select
                      name="productSize"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productSize}
                    >
                      <option value="">Select Product Size</option>
                      <option value="SIZE_XS">XS</option>
                      <option value="SIZE_S">S</option>
                      <option value="SIZE_M">M</option>
                      <option value="SIZE_L">L</option>
                      <option value="SIZE_XL">XL</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>Enter Brand</label>
                    <input
                      type="text"
                      name="brand"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.brand}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Discount</label>
                    <input
                      type="text"
                      name="discount"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.discount}
                    />
                  </div>

                  {/* <div className="mb-3">
                    <label
                      htmlFor="discount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Discount:
                    </label>
                    <input
                      type="text"
                      id="discount"
                      name="discount"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                      onChange={(e) => handleChange(e)}
                      value={product.discount}
                    />
                  </div> */}

                  {/* <div className="mb-3">
                    <label>Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.status}
                    />
                  </div> */}

                  {/* <div>
                    <label
                      htmlFor="imageUpload"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Upload Image:
                    </label>
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="mt-1"
                    />
                    <button
                      onClick={handleImageUpload}
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Upload
                    </button>
                  </div> */}

                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SellerAddProduct;
