import React from "react";
import Credits from "./credits";
import Reviews from "./reviews";
import Recommendations from "./recommendations";

const DetailContent = () =>{
    return(
        <div className={`w-9/12 `}>
            <Credits />
            <Reviews/>
            <Recommendations />
        </div>
    )
}

export default DetailContent