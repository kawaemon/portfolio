import { AppProps } from "next/app";
import Head from "next/head";

import "./index.css";

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>かわえもんのポートフォリオ</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
            />
        </Head>

        <Component {...pageProps} />
    </>
);

export default App;
