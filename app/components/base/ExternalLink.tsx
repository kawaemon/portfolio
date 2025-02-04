import React, { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    href: string;
    label: string;
}

export const ExternalLink: FC<Props> = (props) => (
    <a
        className={props.className}
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
        aria-label={props.label}
    >
        {props.children}
    </a>
);
