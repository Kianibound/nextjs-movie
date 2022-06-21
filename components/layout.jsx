import React, {useContext, useEffect} from "react";
import Logo from "./page/index/logo";
import {ModalContext} from "../context/modalContextProvider";
import SearchModal from "./searchModal";
import {useRouter} from "next/router";

const Layout = ({children}) => {
    const {setElement} = useContext(ModalContext)
    const router = useRouter()
    const searchModalHandler = () => {
        setElement(<SearchModal/>)
    }
    useEffect(()=>{
        return ()=>setElement()
    },[router.query])
    return (
        <div>
            <header className={`bg-gray-800  w-full z-50 px-16 flex items-center justify-between`}>
                <div className={`relative w-32 h-20`}><Logo/></div>
                <div className={`text-white w-3/12 p-4 text-gray-500 bg-gray-900/70  rounded-lg`} onClick={searchModalHandler}>
                    search Movie Name ...
                </div>
            </header>
            {children}
        </div>
    )
}

export default Layout