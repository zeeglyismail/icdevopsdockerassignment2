import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import banner2 from "../../Image/banner2.webp";
import banner4 from "../../Image/banner4.png";
import banner5 from "../../Image/banner5.png";
import banner6 from "../../Image/banner6.gif";


import slider1 from "../../Image/DineSmartSpecial1.png";
import slider2 from "../../Image/DineSmartSpecial2.png";
import slider3 from "../../Image/DineSmartSpecial3.png";
import slider4 from "../../Image/DineSmartSpecial4.png";

import { useRef } from "react";

import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Banner = () => {


     let sliderRef1 = useRef(null);
  const next = () => {
    sliderRef1.slickNext();
  };
  const previous = () => {
    sliderRef1.slickPrev();
  };


     let sliderRef2 = useRef(null);
  const next2 = () => {
    sliderRef2.slickNext();
  };
  const previous2 = () => {
    sliderRef2.slickPrev();
  };

 var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    arrows : false

  };


var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
           infinite: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
           infinite: true,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
        <div className=" md:w-[700px] lg:w-[1100px] mx-auto mt-[50px]">

           <div className="flex items-center justify-between px-[10px]">
             <FaCircleArrowLeft onClick={previous} className="size-[40px] org relative top-[170px] z-10"></FaCircleArrowLeft>
            <FaCircleArrowRight onClick={next} className="size-[40px] org relative top-[170px] z-10"></FaCircleArrowRight>
           </div>
            
       <Slider {...settings1} ref={slider => {
          sliderRef1 = slider;
        }}>
      <div>
        <img className="h-[300px] w-full  " src={banner2} alt="" />
      </div>

      <div>
       <img className="h-[300px] w-full " src={banner4} alt="" />
      </div>

      <div>
       <img className="h-[300px] w-full " src={banner5} alt="" />
      </div>

      <div>
       <img className="h-[300px] w-full " src={banner6} alt="" />
      </div>
    </Slider>

     

   <div className=" md:w-[700px] lg:w-[1100px] mx-auto slider-container ">


     <div className="flex-none">
       <Slider {...settings2} ref={slider => {
          sliderRef2 = slider;
        }}>

     <div className="!w-[180px] md:!w-[220px] lg:!w-[210px]">
      <div  className="border-2 border-[#FF6440] flex items-center gap-[10px]  px-[10px]">
        <img className="h-[40px] w-[40px]"  src={slider1} alt="" />
        <h1>DineSmart Special</h1>
     </div>
     </div>

      <div className="!w-[170px] md:!w-[220px] lg:!w-[210px]">
      <div  className="border-2 border-[#FF6440] flex items-center gap-[10px]  px-[10px]">
        <img className="h-[40px] w-[40px]"  src={slider2} alt="" />
        <h1>DineSmart Special</h1>
     </div>
     </div>

     <div className="!w-[170px] md:!w-[220px] lg:!w-[210px]">
      <div  className="border-2 border-[#FF6440] flex items-center gap-[10px]  px-[10px]">
        <img className="h-[40px] w-[40px]"  src={slider3} alt="" />
        <h1>DineSmart Special</h1>
     </div>
     </div>

     <div className="!w-[170px] md:!w-[220px] lg:!w-[210px]">
      <div  className="border-2 border-[#FF6440] flex items-center gap-[10px]  px-[10px]">
        <img className="h-[40px] w-[40px]"  src={slider4} alt="" />
        <h1>DineSmart Special</h1>
     </div>
     </div>

     <div className="!w-[170px] md:!w-[220px] lg:!w-[210px]">
      <div  className="border-2 border-[#FF6440] flex items-center gap-[10px]  px-[10px]">
        <img className="h-[40px] w-[40px]"  src={slider1} alt="" />
        <h1>DineSmart Special</h1>
     </div>
     </div>

 <div className="!w-[170px] md:!w-[220px] lg:!w-[210px]">
      <div  className="border-2 border-[#FF6440] flex items-center gap-[10px]  px-[10px]">
        <img className="h-[40px] w-[40px]"  src={slider1} alt="" />
        <h1>DineSmart Special</h1>
     </div>
     </div>
     
    </Slider>
     </div>

       <div className=" flex justify-end mt-[-47px] relative left-[7px] md:left-[12px] lg:left-[15px]">
    <IoIosArrowDroprightCircle onClick={next2} className="size-[40px] org z-10 "></IoIosArrowDroprightCircle>
   </div>

   </div>
    

        </div>
    );
};

export default Banner;