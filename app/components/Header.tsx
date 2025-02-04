import React, { FC } from "react";
import { Twitter, GitHub, Key } from "react-feather";

import styles from "./Header.module.css";
import { HeaderLogo } from "./HeaderLogo";
import { ExternalLink } from "./base/ExternalLink";

export const Header: FC = () => {
    return (
        <header className="w-full h-screen space-y-6 flex flex-col items-center justify-center bg-gray-900 text-white">
            <HeaderLogo />

            <div
                className={`space-y-6 flex flex-col items-center justify-center ${styles.animated} ${styles.rest}`}
            >
                <h1 className="text-4xl font-bold md:text-6xl">かわえもん</h1>
                <p className="text-xl" style={{ marginTop: "1rem" }}>
                    大学生 デベロッパ
                </p>

                <ul className="flex flex-row gap-x-4">
                    <li>
                        <ExternalLink
                            href="https://twitter.com/kawason0708"
                            label="かわえもんの Twitter アカウントへのリンク"
                        >
                            <Twitter size={30} />
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href="https://github.com/kawaemon"
                            label="かわえもんの GitHub アカウントへのリンク"
                        >
                            <GitHub size={30} />
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href="https://keybase.io/kawaemon"
                            label="かわえもんの Keybase アカウントへのリンク"
                        >
                            <Key size={30} />
                        </ExternalLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};
