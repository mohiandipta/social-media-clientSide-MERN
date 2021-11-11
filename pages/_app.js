import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from "next/head";
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css"
import { ToastContainer } from 'react-toastify';
import { UserProvider } from "../context";

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <ToastContainer position="top-center" />
            <Nav />
            <Head>
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
            </Head>
            <Component {...pageProps} />
        </UserProvider>
    )
}

export default MyApp