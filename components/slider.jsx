import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Navigation } from "swiper";

const defaultOptions = {
    spaceBetween:7,
    slidesPerView:5.3
}
const Slider = ({data,render,option=defaultOptions}) =>{
    return(
        <div className={`text-white my-6`}>
            <Swiper spaceBetween={option.spaceBetween}
                    slidesPerView={option.slidesPerView}
                    pagination={{clickable:true}}
                    modules={[Navigation]}
                    className="mySwiper">
                {
                    data?.map((item,index)=>{
                        return <SwiperSlide key={index}>{render(item)}</SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default Slider