import React, {useEffect} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {useRouter} from "next/router";
import {StaticRoutes} from "../../../data/staticRoutes";
import Loading from "../../loading";
import Slider from "../../slider";
import MovieItem from "../../movieItem";


const sliderDefault = {
    spaceBetween:7,
    slidesPerView:4
}
const Recommendations = () =>{
    const [recommendsRes, fetchRecommendations] = useAxios()
    const router = useRouter()
    const {query} = router

    useEffect(() => {
        query.id &&
        fetchRecommendations(StaticRoutes.baseUrl + "movie/" + query.id + "/similar?api_key=" + StaticRoutes.token)
    }, [router.isReady,router.query])

    return (
        recommendsRes.loading ? <Loading/> :
            <div className={`p-12 `}>
                <div className={`text-white text-xl font-bold`}>Similar Movies</div>
                <Slider option={sliderDefault}  data={recommendsRes?.data?.results} render={(data) => <MovieItem data={data} />} />
            </div>
    )
}

export default Recommendations