import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from "next/head";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ToastContainer position="top-center" />
            <Nav />
            <Head>
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp