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

            <link rel="icon" href="/favicon.png" />

            <meta name="name" content="かわえもんのポートフォリオ" />
            <meta name="twitter:card" content="summary" />
            <meta property="og:title" content="かわえもんのポートフォリオ" />
            <meta property="og:locale" content="ja_JP" />
            <meta
                property="og:image"
                content="https://kawaemon.dev/ogp-image.webp"
            />
            <meta property="og:image:alt" content="icon" />
            <meta property="og:type" content="icon" />
        </Head>

        <Component {...pageProps} />
    </>
);

export default App;
