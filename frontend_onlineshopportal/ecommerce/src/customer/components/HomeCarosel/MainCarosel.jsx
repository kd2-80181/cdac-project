import React from "react";
import { mainCaroselData } from "./MainCaroselData";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosel = () => {

    const items = mainCaroselData.map((item)=> <img className="cursor-pointer -z-10" role='presentation' src={item.image} alt=""/>)

    return (
        <AliceCarousel
        //mouseTracking
        items={items}
        //responsive={responsive}
        //controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )

}

export default MainCarosel;
