import { FC } from "react";
import { Noto_Sans_JP } from "next/font/google";

import "./index.css";

const font = Noto_Sans_JP({
    weight: "400",
    display: "swap",
    // 日本語フォントではサブセットを指定できないらしく、
    // サブセットを指定しない限りプリロードは使えない
    preload: false,
});

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
    <html lang="ja" className={font.className}>
        <head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>かわえもんのポートフォリオ</title>

            <link rel="icon" href="/favicon.png" />

            <meta name="name" content="かわえもんのポートフォリオ" />
            <meta
                name="description"
                content="かわえもんのポートフォリオページです。"
            />

            <meta name="twitter:card" content="summary" />
            <meta property="og:title" content="かわえもんのポートフォリオ" />
            <meta property="og:locale" content="ja_JP" />
            <meta
                property="og:image"
                content="https://kawaemon.dev/ogp-image.webp"
            />
            <meta property="og:image:alt" content="icon" />
            <meta property="og:type" content="icon" />
        </head>
        <body>{children}</body>
    </html>
);

export default RootLayout;
