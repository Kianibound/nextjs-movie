import React from "react";
import {useAxios} from "../../hooks/useAxios";
import {useRouter} from "next/router";
import {useEffect} from "react";
import DetailHeader from "../../components/page/detail/detailHeader";
import Credits from "../../components/page/detail/credits";

const baseUrl = "https://api.themoviedb.org/3/"
const token = "301b07456b1452abbdda1e23bf72876d"

const MovieDetailPage = () => {
    const router = useRouter()
    const {query} = router
    const [detailData, fetchDetail] = useAxios()

    useEffect(() => {
        query.id &&
        fetchDetail(baseUrl + query.type + "/" + query.id + "?api_key=" + token)
    }, [router.isReady]);

    return (
        <div className={`bg-gray-800`}>
            <DetailHeader data={detailData.data} />
            <Credits />
        </div>
    )


}

export default MovieDetailPage