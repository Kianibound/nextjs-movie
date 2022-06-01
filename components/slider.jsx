import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,Navigation } from "swiper";
import MovieItem from "./movieItem";

const Slider = ({data}) =>{
    console.log(data)
    return(
        <div className={`text-white my-6`}>
            <Swiper spaceBetween={7}
                    slidesPerView={5.7}
                    pagination={{clickable:true}}
                    modules={[Navigation]}
                    className="mySwiper">
                {
                    data?.map((item,index)=>{
                        return <SwiperSlide key={index}><MovieItem data={item}/></SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default Slider