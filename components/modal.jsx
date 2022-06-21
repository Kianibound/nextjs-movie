import React from "react";


const Modal = ({children,closeHandler}) =>{
    return(
        children &&
                <div className="w-screen h-screen fixed z-50 top-0 right-0">
                    {/*Overlay*/}
                    <div className={`fixed bg-black opacity-90 inset-0 z-0 transition-opacity`}
                         aria-hidden="true"
                         onClick={() => closeHandler()}
                    >
                    </div>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                        {children}
                    </div>
                </div>
    )
}

export default Modal