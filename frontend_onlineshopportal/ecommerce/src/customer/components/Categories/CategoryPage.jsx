import React, { useEffect, useState } from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCard from "../../components/HomeSectionCard/HomeSectionCard";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import axios from "axios";
import { useParams } from "react-router-dom";
import CategoryService from "./CategoryService";


const CategoryPage = () => {
    const [productList, setProductList] = useState([]);
    const { type } = useParams();

  // Now you can use the categoryType in your component logic
  console.log('Category Type:', type);

    useEffect(() => {
        axios.get('http://localhost:8080/products/browse_categories/'+type)
          .then((response) => {
            setProductList(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error fetching product data:', error);
          });
      }, []);
    
      return (

            
            <div style={{display:"flex"}} >
               {productList.map((items,index)=>(
                <CategoryService key={index} product={items}/>
               ))}
            </div>
    )






}
    export default CategoryPage;