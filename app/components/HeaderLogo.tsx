"use client";

import { FC, useState } from "react";
import styles from "./Header.module.css";

// set-if-true
function sit(shouldSpecify: boolean, value: string): string {
    if (shouldSpecify) {
        return value;
    }
    return "";
}

export const HeaderLogo: FC = () => {
    const [isHoverAnimating, setHoverAnimating] = useState(false);

    return (
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
    );
};
