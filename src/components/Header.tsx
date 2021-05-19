import React, { FC } from "react";

export const Header: FC = () => (
    <header className="w-full h-screen space-y-6 flex flex-col items-center justify-center bg-gray-900 text-white">
        <svg className="w-48 h-48 md:w-72 md:h-72" viewBox="0 0 101 101">
            <polygon
                points="50,0 100,50 50,100 0,50"
                stroke="white"
                strokeWidth="1"
                fill="none"
                transform="translate(0.5,0.5)"
                shapeRendering="crispEdges"
            />
        </svg>

        <h1 className="text-4xl font-bold md:text-6xl">かわえもん</h1>
        <p className="text-xl">高専生 & Webデベロッパ</p>
    </header>
);
