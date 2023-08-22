import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// respuesta de la api
import { banner } from "@/pages/api/banner";    

//intefaces 
import { Data } from '@/interfaces/banner';

import axios from "axios";


export default function Slider() {
  const [sliders, setSlider] = useState<any[]>([]);


    useEffect(() => {
      

        banner().then((resultado) => {
            console.log(resultado[0].attributes.imagen.data.attributes.formats.medium.url)
           
            setSlider(resultado)
           
          })
      
    }, []);


  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        { sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
            <div
              className="flex relative flex-col justify-center items-center leading-none h-screen bg-no-repeat bg-center "
              style={{
                backgroundImage: `url('http://147.182.243.95:1337${slider.attributes.imagen.data.attributes.formats.large.url}')`,
                backgroundSize:'100% 100%'
                
              }}
            >
              {/* <div className=" absolute h-screen w-full mySwipersli "></div>
              <h1 className="uppercase z-10 text-[6.5rem] lg:text-[12rem] font-[Anton-Regular]">
                welcome
              </h1>
              <h2 className="uppercase z-10 text-[1.8rem] tracking-[0.5rem] lg:text-[2rem] font-[Anton-Regular]  lg:tracking-[1.6rem]">
                to viva jalisco
              </h2>
              <p className="px-[4rem] z-10 lg:px-0 text-[1rem] mt-4 lg:text-[1.3rem]">
                Our Kitchen is the expression of our Mexican <br /> culture
                through good food.
              </p> */}
            </div>{" "}
          </SwiperSlide>
        ))
        }
       

    
       
      </Swiper>
    </>
  );
}
