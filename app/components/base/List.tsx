import React, { FC, ReactNode } from "react";

export const List: FC<{ children: ReactNode }> = (props) => (
    <ul className="list-disc space-y-3 ps-8 marker:text-gray-600">
        {props.children}
    </ul>
);
