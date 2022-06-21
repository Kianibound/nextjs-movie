import React, {useEffect} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {useRouter} from "next/router";
import SliderContainer from "../../sliderContainer";
import CreditItem from "../../creditItem";
import CrewItem from "../../crewItem";

const baseUrl = "https://api.themoviedb.org/3/"
const token = "301b07456b1452abbdda1e23bf72876d"

const Credits = () =>{
    const router = useRouter()
    const {query}=router
    const [creditsRes,fetchCredits]=useAxios()
    const credits = [
        {
            title:"cast",
            value:creditsRes?.data?.cast,
            item:(item)=><CreditItem data={item}/>
        },
        {
            title:"crew",
            value:creditsRes?.data?.crew,
            item:(item)=><CrewItem data={item}/>
        },
    ]

    useEffect(()=>{
        query.id &&
        fetchCredits(baseUrl + query.type + "/" + query.id + "/credits" + "?api_key=" + token)
    },[router.isReady,router.query])

    return(
        <div>
            <SliderContainer data={credits} title={"Credits"} />
        </div>
    )
}

export default Credits