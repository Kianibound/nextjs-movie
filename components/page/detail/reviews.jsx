import React, {useEffect} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {StaticRoutes} from "../../../data/staticRoutes";
import {useRouter} from "next/router";
import Loading from "../../loading";
import Image from "next/image";
import Slider from "../../slider";

const sliderOption = {
    slidesPerView:2,
    spaceBetween:7
}
const Reviews = () => {
    const [reviewsRes, fetchReviews] = useAxios()
    const router = useRouter()
    const {query} = router
    useEffect(() => {
        query.id &&
        fetchReviews(StaticRoutes.baseUrl + "movie/" + query.id + "/reviews?api_key=" + StaticRoutes.token)
    }, [router.isReady,router.query])
    return (
        reviewsRes.loading ? <Loading/> :
            <div className={`px-12`}>
            <div className={`text-white text-xl font-bold`}>Reviews</div>
            <Slider option={sliderOption} data={reviewsRes?.data?.results} render={(data) => <ReviewItem item={data}/>} />
            </div>
    )
}

export default Reviews

export const ReviewItem = ({item}) => {
    return (
        <div className={`bg-gray-900 rounded-lg p-6`}>
            <div className={`flex items-center gap-4`}>
                <div className={`relative w-24 h-24 rounded-xl block bg-gray-800`}><Image
                    src={item.author_details.avatar_path ?? "/"} layout={"fill"}/></div>
                <div className={`w-10/12`}>
                    <div className={`text-xs opacity-50`}>{item.author_details.username &&`@${item.author_details.username}` }</div>
                    <div className={`font-bold`}>{item.author_details.name}</div>
                    <div>Rate : {item.author_details.rating}</div>
                </div>
            </div>
            <div className={`mt-6 text-sm h-[100px] overflow-hidden`}>
                <p>
                    {item.content}
                </p>
            </div>
        </div>
    )
}