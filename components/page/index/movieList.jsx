import React, {useEffect, useState} from "react";
import Filter from "./filter";
import {useAxios} from "../../../hooks/useAxios";
import MovieItem from "../../movieItem";
import {list} from "postcss";

const baseUrl = "https://api.themoviedb.org/3/"
const token = "301b07456b1452abbdda1e23bf72876d"
const tabTitles = [
    "popular",
    "upcoming",
    "top_rated"
]
const MovieList = () =>{
    const [activeTab,setActiveTab]=useState(tabTitles[0])
    const [listRes,fetchList] = useAxios()

    useEffect(()=>{
        fetchList(baseUrl + "movie/"+ activeTab + "?api_key=" + token)
    },[activeTab])


    return(
        <div className={`px-12 relative`}>
            <Filter tabTitles={tabTitles} activeTab={activeTab} setActiveTab={setActiveTab}/>
            {
                listRes.loading ? <h1 className={`text-xl font-bold text-white text-center p-24`}>Loading...</h1>:
                    <div className={` grid grid-cols-5 gap-3 mt-4`}>
                        {listRes?.data?.results?.map((item,index)=> <MovieItem key={index} data={item}/>)}
                    </div>
            }
        </div>
    )
}

export default MovieList