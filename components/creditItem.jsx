import React from "react";
import Link from "next/link";
import Image from "next/image";

const imagePath = "https://image.tmdb.org/t/p/w500"

const CreditItem = ({data}) =>{
    const src = imagePath+data?.profile_path
    return(
        <div className={`bg-gray-900/60 p-4 rounded-xl `}>
            <Link href={``}>
                <a>
                    <div className={`w-full rounded-t-xl overflow-hidden`}><Image loader={()=>src} src={src} width={"100%"} height={"100%"} layout={"responsive"}/></div>
                    <div className={`mt-4  `}>
                        <div className={`whitespace-nowrap text-ellipsis overflow-hidden text-lg text-white`}>{data?.original_name}</div>
                        <div className={`flex items-center justify-between`}>
                            <div className={`text-sm text-white/30 py-2 overflow-hidden`}>CHARACTER: <span className={`w-full block whitespace-nowrap  text-ellipsis text-yellow-500 font-bold py-2`}>{data?.character}</span></div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default CreditItem