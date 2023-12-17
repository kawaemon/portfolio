import { FC } from "react";

import "./index.css";

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
    <html lang="ja">
        <head>
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

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
            />
        </head>
        <body>{children}</body>
    </html>
);

export default RootLayout;