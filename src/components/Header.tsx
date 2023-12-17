import React, { FC, useState } from "react";
import { Twitter, GitHub, Key } from "react-feather";
import styles from "./Header.module.css";

// set-if-true
function sit(shouldSpecify: boolean, value: string): string {
    if (shouldSpecify) {
        return value;
    }
    return "";
}

export const Header: FC = () => {
    const [isHoverAnimating, setHoverAnimating] = useState(false);

    return (
        <header className="w-full h-screen space-y-6 flex flex-col items-center justify-center bg-gray-900 text-white">
            <svg className={`w-48 h-48 md:w-64 md:h-64`} viewBox="0 0 100 100">
                <g className={`${styles.animated} ${styles.logo}`}>
                    <polygon
                        className={[
                            styles.animated,
                            sit(isHoverAnimating, styles["rotate-on-hover"]),
                        ].join(" ")}
                        onMouseEnter={() => {
                            console.log("hover");
                            setHoverAnimating(true);
                        }}
                        onAnimationEnd={() => {
                            setHoverAnimating(false);
                        }}
                        points="50,5 95,50 50,95 5,50"
                        stroke="white"
                        strokeWidth="1"
                        fill="none"
                    />
                </g>
            </svg>

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
