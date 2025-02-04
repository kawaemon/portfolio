import React, { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    href: string;
    label: string;
}

export const ExternalLink: FC<Props> = (props) => (
    <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
        aria-label={props.label}
    >
        {props.children}
    </a>
);
