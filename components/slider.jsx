import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Navigation } from "swiper";

const Slider = ({data,render}) =>{
    return(
        <div className={`text-white my-6`}>
            <Swiper spaceBetween={7}
                    slidesPerView={5.3}
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