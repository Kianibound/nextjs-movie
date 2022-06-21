import React, {useEffect, useState} from "react";
import {useAxios} from "../hooks/useAxios";
import {StaticRoutes} from "../data/staticRoutes";
import MovieItem from "./movieItem";
import Empty from "./empty";


const SearchModal = () => {
    const [searchRes, , fetchSearch] = useAxios()
    const [search, setSearch] = useState()

    const changeHandler = (query) => {
        query.length>2 ?
            fetchSearch({
                url: StaticRoutes.baseUrl + "search/movie",
                method: "get",
                params: {
                    api_key: StaticRoutes.token, query
                }
            }).then(res => setSearch(res.results))
            : setSearch()
    }



    return (
        <div className={"w-[60vw] h-[60vh] flex flex-col items-center justify-start"}>
            <div className={`w-8/12`}>
                <input type="text" onChange={e => changeHandler(e.target.value)}
                       className={`w-full p-4 bg-gray-900 text-white rounded-lg`}
                       placeholder={"search the movie name ..."}/>
            </div>
            <div className={` mt-6 w-full`}>
                {search ?
                    search?.length === 0 ?
                        <Empty text={"Cant Find any Movie With That Name"}/> :
                        <div className={`grid grid-cols-6 p-4 rounded-lg`}>
                            {search.slice(0, 12).map((item, index) => <MovieItem data={item} key={index}/>)}
                        </div>
                    :
                    <span className={`text-center text-white block p-6 rounded-lg`}>type at least 2 characters ...</span>
                }
            </div>
    </div>)
}

export default SearchModal