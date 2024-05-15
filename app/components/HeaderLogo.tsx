"use client";

import { FC, useEffect, useState } from "react";
import styles from "./Header.module.css";

// set-if-true
function sit(shouldSpecify: boolean, value: string): string {
    if (shouldSpecify) {
        return value;
    }
    return "";
}

type AnimationState = "init" | "animating" | "done";

export const HeaderLogo: FC = () => {
    const [animationState, setAnimationState] =
        useState<AnimationState>("init");

    useEffect(() => {
        if (animationState === "done") {
            setAnimationState("init");
        }
    }, [animationState]);

    const begin = () =>
        setAnimationState((x) => (x === "init" ? "animating" : x));

    return (
        <svg
            className="w-48 h-48 md:w-64 md:h-64"
            viewBox="0 0 100 100"
            onMouseEnter={begin}
            onClick={begin}
        >
            <g className={`${styles.animated} ${styles.logo}`}>
                <polygon
                    className={[
                        styles.animated,
                        sit(
                            animationState === "animating",
                            styles["rotate-on-hover"],
                        ),
                    ].join(" ")}
                    points="50,5 95,50 50,95 5,50"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                    onAnimationEnd={() => setAnimationState("done")}
                />
            </g>
        </svg>
    );
};
