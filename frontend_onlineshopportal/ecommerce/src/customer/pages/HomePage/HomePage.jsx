import React, { useEffect, useState } from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCard from "../../components/HomeSectionCard/HomeSectionCard";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import axios from "axios";

const HomePage = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/products/view')
          .then((response) => {
            setProductList(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error fetching product data:', error);
          });
      }, []);
    
      //const syncActiveIndex = ({ item }) => setActiveIndex(item);
    
    //   const items = productList.map((product, index) => (
    //     <HomeSectionCard key={index} product={product} />
    //   ));
    return (
        <div>
            <MainCarosel/>

            
            <div style={{display:"flex"}} >
               {productList.map((items,index)=>(
                <HomeSectionCarosel key={index} product={items}/>
               ))}

            </div>
        </div>
    )
}

export default HomePage;


//className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10"