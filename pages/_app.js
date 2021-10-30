import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Head>
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp