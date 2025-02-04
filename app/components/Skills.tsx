import React, { FC, ReactNode } from "react";
import { SkillsTooltip } from "./SkillsTooltip";
import { H3 } from "./base/H";

type SkillLevel = "fine" | "learning";

const skillLevelToColor = (l: SkillLevel) => {
    switch (l) {
        case "fine":
            return "text-green-400";
        case "learning":
            return "text-orange-400";
    }
};

const ColoredCircle: FC<{ color?: string }> = ({ color }) => (
    <svg className={`inline w-4 mr-2 ${color ?? ""}`} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="currentColor" />
    </svg>
);

const SkillEntry: FC<{ level: SkillLevel; children: ReactNode }> = (p) => {
    const { children, level } = p;
    return (
        <li className="inline-flex flex-row items-center border-white border-2 border-opacity-40 border-dotted rounded-full px-4 py-0.5 mr-2 mt-2">
            <span className={`marker-${level} flex`}>
                <ColoredCircle color={skillLevelToColor(level)} />
            </span>
            {children}
        </li>
    );
};

const dottedBorder =
    "border-white border-2 border-opacity-40 border-dotted rounded-xl";

const BorderedList: FC<{ children: ReactNode }> = ({ children }) => (
    <li className={`${dottedBorder} px-4 py-2 mt-3`}>{children}</li>
);

// prettier-ignore
type ArrayType<T extends ReadonlyArray<unknown>> =
    T extends ReadonlyArray<infer U> ? U : never;

type SkillsList = ReadonlyArray<{
    sectionName: string;
    list: ReadonlyArray<SkillsListInner>;
}>;

type SkillsListInner =
    | { level: SkillLevel; text: string }
    | ArrayType<SkillsList>;

const isInnerSkillsList = (
    inner: SkillsListInner,
): inner is ArrayType<SkillsList> =>
    (inner as Record<string, unknown>)["level"] == null;

const skillsList: SkillsList = [
    {
        sectionName: "Web フロントエンド",
        list: [
            { level: "fine", text: "HTML5" },
            { level: "fine", text: "CSS" },
            { level: "fine", text: "TypeScript" },
            { level: "learning", text: "Svelte" },
            { level: "learning", text: "Solid.js" },
            { level: "fine", text: "React" },
            { level: "fine", text: "Next.js" },
            { level: "fine", text: "GraphQL" },
            { level: "fine", text: "Rust (WASM Yew)" },
        ],
    },
    {
        sectionName: "Web バックエンド",
        list: [
            {
                sectionName: "Rust",
                list: [
                    { level: "fine", text: "Tokio" },
                    { level: "fine", text: "Warp" },
                    { level: "fine", text: "Axum" },
                    { level: "fine", text: "SeaORM" },
                    { level: "fine", text: "Sqlx" },
                ],
            },
            {
                sectionName: "TypeScript(Node.js)",
                list: [
                    { level: "fine", text: "Fastify" },
                    { level: "fine", text: "Nest.js" },
                    { level: "fine", text: "Prisma" },
                    { level: "fine", text: "TypeORM" },
                ],
            },
            { level: "fine", text: "Go" },
            { level: "fine", text: "MongoDB" },
            { level: "fine", text: "SQL" },
        ],
    },
    {
        sectionName: "インフラ",
        list: [
            { level: "fine", text: "Terraform (CDKTF)" },
            { level: "fine", text: "AWS CDK" },
        ],
    },
    {
        sectionName: "組み込み",
        list: [
            { level: "fine", text: "C (AVR, PIC)" },
            { level: "fine", text: "ASM (PIC)" },
            { level: "fine", text: "Arduino" },
            { level: "fine", text: "Python3 (Raspberry Pi GPIO)" },
        ],
    },
    {
        sectionName: "その他",
        list: [
            { level: "fine", text: "Git" },
            { level: "fine", text: "GitHub" },
            { level: "fine", text: "Docker" },
            { level: "fine", text: "Vagrant" },
        ],
    },
];

const SkillListImpl: FC<{ entry: ArrayType<SkillsList> }> = ({ entry }) => (
    <ul>
        {entry.list.map((x) => {
            if (!isInnerSkillsList(x)) {
                return (
                    <SkillEntry key={x.text} level={x.level}>
                        {x.text}
                    </SkillEntry>
                );
            }

            return (
                <BorderedList key={x.sectionName}>
                    {x.sectionName}
                    <SkillListImpl entry={x} />
                </BorderedList>
            );
        })}
    </ul>
);

export const Skills: FC = () => {
    return (
        <section className="mt-8 max-w-full">
            <H3>できること</H3>

            <ul>
                {skillsList.map((x) => (
                    <BorderedList key={x.sectionName}>
                        {x.sectionName}
                        <SkillListImpl entry={x} />
                    </BorderedList>
                ))}
            </ul>

            <SkillsTooltip />
        </section>
    );
};
