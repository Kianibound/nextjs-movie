import React from "react";
import Image from "next/image";

const imagePath = "https://image.tmdb.org/t/p/w500"
const DetailHeader = ({data}) => {
    const posterSrc = imagePath + data?.poster_path
    const backdropSrc = imagePath + data?.backdrop_path

    return (
        <div className={`p-16 w-full  relative !bg-bottom !bg-no-repeat !bg-cover`} style={{background: `url(${backdropSrc})`}}>
            <span className={`z-0 bg-gray-900/90 w-full h-full absolute top-0 left-0`}></span>
            <div className={`relative flex justify-around items-center z-10 text-white max-w-[1440px] mx-auto`}>
                <div className={`w-4/12 relative`}>
                    <Image src={posterSrc} className={`rounded-xl`} loader={() => posterSrc} layout={"responsive"} width={"100%"} height={"100%"}
                           objectFit={"cover"}/>
                </div>
                <div className={`px-8 w-7/12`}>
                    <h1 className={`text-3xl font-bold py-3`}>{data?.original_title}</h1>
                    <div className={`flex items-center py-3`}>{data?.genres.map((item, index) => <div key={index} className={`text-base mr-2 my-3 border border-white rounded-xl py-1.5 px-3`}>{item.name}</div>)}</div>
                    <div className={`flex gap-2 py-3`}>
                        <span className={`font-bold text-xl`}>Languages : </span>
                        {data?.production_countries.map((item, index) => <span key={index} className={``}>{item.iso_3166_1} /</span>)}</div>
                    <div>
                        <span className={`block font-bold text-xl`}>Overview : </span>
                        {data?.overview}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailHeader