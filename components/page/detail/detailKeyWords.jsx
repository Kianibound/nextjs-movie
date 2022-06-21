import React, {useEffect} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {useRouter} from "next/router";
import {StaticRoutes} from "../../../data/staticRoutes";
import Loading from "../../loading";

const DetailKeyWords = () => {
    const [keywordsRes, fetchKeyWords] = useAxios()
    const router = useRouter()
    const {query} = router

    useEffect(() => {
        query.id &&
        fetchKeyWords(StaticRoutes.baseUrl + query.type + "/" + query.id + "/keywords" + "?api_key=" + StaticRoutes.token)
    }, [router.isReady,router.query])

    return (
        <>
            <div className={`text-white text-lg font-bold`}>
                Keywords
            </div>
            <div className={`mt-4 flex flex-wrap gap-1.5`}>
                {
                    keywordsRes.loading ? <Loading/> :
                        keywordsRes.data?.keywords?.map(item =>
                            <span className={`border bg-gray-700 border-gray-800 rounded-lg py-2 px-4 text-white`} key={item.id}>{item.name}</span>
                        )
                }
            </div>
        </>

    )
}

export default DetailKeyWords