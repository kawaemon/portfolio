import React, { FC } from "react";

export const H3: FC<{ className?: string; children: string }> = (props) => (
    <h3 className={`text-xl mb-2 font-bold ${props.className ?? ""}`}>
        {props.children}
    </h3>
);
