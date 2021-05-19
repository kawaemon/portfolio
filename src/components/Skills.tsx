import React, { FC } from "react";

type SkillLevel = "fine" | "good";

const skillLevelToColor = (l: SkillLevel) => {
    switch (l) {
        case "fine":
            return "text-green-400";
        case "good":
            return "text-white opacity-40";
    }
};

const ColoredCircle: FC<{ color?: string }> = ({ color }) => (
    <svg className={`inline w-4 mr-2 ${color ?? ""}`} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="currentColor" />
    </svg>
);

const SkillEntry: FC<{ level: SkillLevel }> = ({ children, level }) => {
    return (
        <li className="inline-flex flex-row items-center border-white border-2 border-opacity-40 border-dotted rounded-full px-4 py-0.5 mr-2 mt-2">
            <ColoredCircle color={skillLevelToColor(level)} />
            {children}
        </li>
    );
};

const dottedBorder =
    "border-white border-2 border-opacity-40 border-dotted rounded-xl";

const BorderedList: FC = ({ children }) => (
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
    inner: SkillsListInner
): inner is ArrayType<SkillsList> =>
    (inner as Record<string, unknown>)["level"] == null;

const skillsList: SkillsList = [
    {
        sectionName: "Webフロントエンド",
        list: [
            { level: "fine", text: "HTML5" },
            { level: "good", text: "Sass" },
            { level: "fine", text: "TypeScript" },
            { level: "fine", text: "React" },
            { level: "fine", text: "Next.js" },
            { level: "fine", text: "gRPC-web" },
            { level: "fine", text: "GraphQL" },
            { level: "fine", text: "Rust (WASM Yew)" },
        ],
    },
    {
        sectionName: "Webバックエンド",
        list: [
            {
                sectionName: "Rust",
                list: [
                    { level: "fine", text: "Tokio" },
                    { level: "fine", text: "Warp" },
                    { level: "fine", text: "MongoDB Official Driver" },
                ],
            },
            {
                sectionName: "TypeScript(Node.js)",
                list: [
                    { level: "fine", text: "Express" },
                    { level: "good", text: "Fastify" },
                    { level: "fine", text: "Prisma" },
                ],
            },
            { level: "fine", text: "Go" },
            { level: "fine", text: "Google Cloud Platform" },
            { level: "fine", text: "MongoDB" },
            { level: "good", text: "PostgreSQL" },
        ],
    },
    {
        sectionName: "組み込み",
        list: [
            { level: "fine", text: "C (AVR)" },
            { level: "fine", text: "Arduino" },
            { level: "good", text: "Python3 (Raspberry Pi GPIO)" },
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
        <section className="max-w-screen-md mx-auto mt-8">
            <span className="prose">
                <h3>できること</h3>
            </span>

            <ul>
                {skillsList.map((x) => (
                    <BorderedList key={x.sectionName}>
                        {x.sectionName}
                        <SkillListImpl entry={x} />
                    </BorderedList>
                ))}
            </ul>
        </section>
    );
};
