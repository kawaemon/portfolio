import { AppProps } from "next/app";
import Head from "next/head";

import "./index.css";

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
                rel="stylesheet"
            />
        </Head>

        <Component {...pageProps} />
    </>
);

export default App;
