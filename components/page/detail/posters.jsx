import React, {useEffect} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {useRouter} from "next/router";
import {StaticRoutes} from "../../../data/staticRoutes";
import Loading from "../../loading";
import Slider from "../../slider";
import Image from "next/image";

const sliderDefault = {
    spaceBetween: 7,
    slidesPerView: 2
}
const Posters = () => {
    const [postersRes, fetchPosters] = useAxios()
    const router = useRouter()
    const {query} = router

    useEffect(() => {
        query.id &&
        fetchPosters(StaticRoutes.baseUrl + query.type + "/" + query.id + "/images" + "?api_key=" + StaticRoutes.token)
    }, [router.isReady,router.query])

    return (
        <div className={`mt-4 mb-8`}>
            <div className={`mb-12 text-white text-lg font-bold`}>
                Posters
            </div>
            {
                postersRes.loading ? <Loading/> :
                    <Slider data={postersRes?.data?.posters} option={sliderDefault}
                            render={(data) => <PosterItem data={data}/>}/>
            }
        </div>
    )
}


export default Posters


export const PosterItem = ({data}) => {
    const src = StaticRoutes.imagePath + data?.file_path ?? "/"
    return (
        <div className={``}>
            <Image loader={() => src}
                   className={`bg-gray-900 rounded-lg`}
                   src={src}
                   layout={"responsive"}
                   width={data?.width}
                   height={data?.height}
            />
        </div>

    )
}
