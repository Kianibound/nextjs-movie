import '../styles/globals.css'
import Layout from "../components/layout";
import ModalContextProvider from "../context/modalContextProvider";

//Detail Page
//layout
//Modal (unmount handler)
//axiosApi
//search

function MyApp({Component, pageProps}) {
    return (
        <ModalContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ModalContextProvider>
    )
}

export default MyApp
