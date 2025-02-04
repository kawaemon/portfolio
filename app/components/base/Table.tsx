import React, { FC, ReactNode } from "react";
import { sit } from "../util";

type Props = { children: Record<string, ReactNode>; className?: string };

export const Table: FC<Props> = ({ children, className }) => (
    <table className={`w-full ${className ?? ""}`}>
        <tbody>
            {Object.entries(children).map(([k, v], i) => (
                <tr
                    className={[
                        "pt-3",
                        sit(i > 0, "border-t-1 border-gray-700"),
                    ].join(" ")}
                    key={k}
                >
                    <td className="py-2 w-1/3">{k}</td>
                    <td className="py-2 w-2/3">{v}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
