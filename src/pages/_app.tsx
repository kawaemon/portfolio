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

            <meta name="name" content="kawaemon's portfolio" />
            <meta name="description" content="kawaemon describes himself" />

            <meta property="og:title" content="kawaemon's portfolio" />
            <meta
                property="og:description"
                content="kawaemon describes himself"
            />
            <meta property="og:locale" content="ja_JP" />
        </Head>

        <Component {...pageProps} />
    </>
);

export default App;
