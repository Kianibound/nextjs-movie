import React, {useState} from "react";
import Modal from "../components/modal";

export const ModalContext = React.createContext()

const ModalContextProvider = ({children}) => {
    const [element, setElement] = useState()
    return (
        <ModalContext.Provider value={{element, setElement}}>
                {children}
                <Modal closeHandler={setElement}>{element}</Modal>
        </ModalContext.Provider>
    )
}
export default ModalContextProvider

