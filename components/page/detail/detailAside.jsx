import React from "react";
import DetailKeyWords from "./detailKeyWords";
import DetailWatchingProviders from "./detailWatchingProviders";
import Posters from "./posters";

const DetailAside = () =>{
    return(
        <div className={`w-3/12 p-12 sticky top-5 h-fit`}>
            <Posters />
            <DetailKeyWords />
            <DetailWatchingProviders/>
        </div>
    )
}

export default DetailAside