import React from "react";
import {useAxios} from "../../hooks/useAxios";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {StaticRoutes} from "../../data/staticRoutes";
import DetailHeader from "../../components/page/detail/detailHeader";
import DetailContent from "../../components/page/detail/detailContent";
import DetailAside from "../../components/page/detail/detailAside";



const MovieDetailPage = () => {
    const router = useRouter()
    const {query} = router
    const [detailData, fetchDetail] = useAxios()

    useEffect(() => {
        query.id &&
        fetchDetail(StaticRoutes.baseUrl + query.type + "/" + query.id + "?api_key=" + StaticRoutes.token)
    }, [router.isReady,router.query]);

    return (
        <div className={`bg-gray-800`}>
            <DetailHeader data={detailData.data} />
            <div className={`flex justify-between`}>
                <DetailContent />
                <DetailAside/>
            </div>
        </div>
    )


}

export default MovieDetailPage