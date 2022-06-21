import React,{useEffect} from "react";
import {useAxios} from "../../../hooks/useAxios";
import {useRouter} from "next/router";
import Image from "next/image";
import {StaticRoutes} from "../../../data/staticRoutes";

const DetailWatchingProviders = () =>{
    const [watchingProviders, fetchWatchingProviders] = useAxios()
    const router = useRouter()
    const {query} = router

    useEffect(() => {
        query.id &&
        fetchWatchingProviders(StaticRoutes.baseUrl + query.type + "/" + query.id + "/watch/providers" + "?api_key=" + StaticRoutes.token)
    }, [router.isReady,router.query])
    return(
        <div className={`my-12`}>
            <div className={`text-white text-lg font-bold`}>
                Watching Providers
            </div>
            <div className={`mt-4 grid grid-cols-3 gap-4`}>
                {
                    watchingProviders?.data?.results["US"]?.buy.map(item=> {
                        const imageSrc = StaticRoutes.imagePath + item.logo_path
                     return(
                         <div className={`text-center rounded-lg text-white text-sm p-2  flex items-center justify-center flex-col`}>
                             <div className={`w-16 h-16 rounded-lg overflow-hidden  mb-2 relative`}><Image src={imageSrc} loader={()=>imageSrc} layout={"fill"}></Image></div>
                             {item.provider_name}
                         </div>
                         )
                    }
                    )
                }
            </div>

        </div>
    )
}

export default DetailWatchingProviders