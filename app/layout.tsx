import { FC } from "react";

import "./index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "かわえもん",
    icons: "/favicon.png",
    applicationName: "かわえもん",
    description: "かわえもんのポートフォリオ",
    twitter: {
        card: "summary",
    },
    openGraph: {
        title: "かわえもん",
        locale: "ja_JP",
        type: "website",
        images: {
            url: "https://kawaemon.dev/ogp-image.webp",
            alt: "icon",
        },
    },
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
    <html lang="ja">
        <head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </head>
        <body>{children}</body>
    </html>
);

export default RootLayout;
