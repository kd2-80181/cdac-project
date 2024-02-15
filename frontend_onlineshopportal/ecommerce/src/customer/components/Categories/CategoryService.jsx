import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import axios from "axios";

const CategoryService = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [productList, setProductList] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const userId = sessionStorage.getItem("userid");

  useEffect(() => {
    // Check if product has productId before making the request
    //if (product && product.productId) {
    console.log(product.id);
    axios
      .get(`http://localhost:8080/image/imagelist/${product.id}`)
      .then((imageResponse) => {
        // Assuming you want to display the first image
        const items = imageResponse.data.map((item) => (
          <img
            src={item}
            //onDragStart={handleDragStart}
            role="presentation"
          />
        ));
        setProductImage(items);
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });

    // }
  }, []);

  const handleAddToCart = () => {
    // Get the userId from sessionStorage

    // Check if userId is available
    // if (!userId) {
    //   console.error('User ID not found in sessionStorage');
    //   return;
    // }
    // Assuming you have an endpoint for adding a product to the cart
    axios
      .get(`http://localhost:8080/cart/add/${product.id}/${userId}`)
      .then((response) => {
        // Handle success (e.g., show a success message, update UI, etc.)
        console.log("Product added to cart:", response.data);
      })
      .catch((error) => {
        // Handle error (e.g., show an error message, log the error, etc.)
        console.error("Error adding product to cart:", error);
      });
  };

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 4 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/products/view')
  //     .then((response) => {
  //       setProductList(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching product data:', error);
  //     });
  // }, []);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = <HomeSectionCard product={product} />;
  return (
    <div className="border">
      <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
        {product && (
          <>
            <div className="h-[13rem] w-[10rem]">
              <AliceCarousel
                mouseTracking
                items={productImage}
                autoPlayInterval={3000}
                animationDuration={1000}
                autoPlay
                disableButtonsControls={true}
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                {product.productName}
              </h3>
              <h4 className="text-lg font-medium text-gray-900">
                {product.description}
              </h4>
              <h5 className="text-lg font-medium text-gray-900">
                {product.brand}
              </h5>
              <p className="mt-2 text-lg font-bold text-green-600">
                Price: Rs.{product.price}
              </p>
              <Button
                variant="contained"
                color="primary"
                className="shadow-md rounded-md"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryService;
