import React, {useEffect, useState} from "react";
import Filter from "./filter";
import {useAxios} from "../../../hooks/useAxios";
import MovieItem from "../../movieItem";
import Loading from "../../loading";
import Empty from "../../empty";

const baseUrl = "https://api.themoviedb.org/3/"
const token = "301b07456b1452abbdda1e23bf72876d"
const tabTitles = ["popular", "upcoming", "top_rated"]

const MovieList = () => {
    const [activeTab, setActiveTab] = useState(tabTitles[0])
    const [listRes, fetchList] = useAxios()
    const [searchRes, setSearchRes] = useState()
    const [query,setQuery]=useState()
    const list = searchRes ?? listRes?.data?.results


    useEffect(() => {
        fetchList(baseUrl + "movie/" + activeTab + "?api_key=" + token)
        setQuery("")
        setSearchRes()
    }, [activeTab])

    const searchHandler = (queryValue) => {
        setQuery(queryValue)
        if (queryValue){
            const res = listRes?.data?.results.filter(list=>list.title.toLowerCase().includes(queryValue.toLowerCase()))
            setSearchRes(res)
        }else {setSearchRes()}
    }


    return (
        <div className={`px-12 relative transform -translate-y-28`}>
            <Filter tabTitles={tabTitles} activeTab={activeTab} setActiveTab={setActiveTab}
                    searchHandler={searchHandler} query={query}/>
            {
                listRes.loading ? <Loading/> :
                    list?.length===0?
                           <Empty text={"Sorry There is No Result For You :("}/>
                        :
                    <div className={` grid grid-cols-5 gap-3 mt-4`}>
                        {list?.map((item, index) => <MovieItem key={index} data={item}/>)}
                    </div>
            }
        </div>
    )
}

export default MovieList