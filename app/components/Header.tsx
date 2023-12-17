import React, { FC } from "react";
import { Twitter, GitHub, Key } from "react-feather";

import styles from "./Header.module.css";
import { HeaderLogo } from "./HeaderLogo";

export const Header: FC = () => {
    return (
        <header className="w-full h-screen space-y-6 flex flex-col items-center justify-center bg-gray-900 text-white">
            <HeaderLogo />

            <div
                className={`space-y-6 flex flex-col items-center justify-center ${styles.animated} ${styles.rest}`}
            >
                <h1 className="text-4xl font-bold md:text-6xl">かわえもん</h1>
                <p className="text-xl" style={{ marginTop: "1rem" }}>
                    高専生 デベロッパ
                </p>

                <ul className="flex flex-row gap-x-4">
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/kawason0708"
                        >
                            <Twitter size={30} />
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/kawaemon"
                        >
                            <GitHub size={30} />
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://keybase.io/kawaemon"
                        >
                            <Key size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};
