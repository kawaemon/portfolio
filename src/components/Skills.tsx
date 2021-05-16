import React, { FC } from "react";

type SkillLevel = "fine" | "good" | "learning";

const skillLevelToColor = (l: SkillLevel) => {
    switch (l) {
        case "fine":
            return "text-green-400";
        case "good":
            return "text-blue-400";
        case "learning":
            return "text-yellow-400";
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

export const Skills: FC = () => {
    return (
        <section className="max-w-screen-md mx-auto mt-8">
            <h2>できること</h2>

            <ul>
                <li className={`${dottedBorder} px-4 py-2 mt-4`}>
                    Webフロントエンド
                    <ul>
                        <SkillEntry level="fine">HTML5</SkillEntry>
                        <SkillEntry level="good">CSS3</SkillEntry>
                        <SkillEntry level="fine">GraphQL</SkillEntry>
                        <SkillEntry level="fine">gRPC-web</SkillEntry>
                        <SkillEntry level="fine">TypeScript(React)</SkillEntry>
                        <SkillEntry level="fine">Rust(WASM Yew)</SkillEntry>
                    </ul>
                </li>

                <li className={`${dottedBorder} px-4 py-2 mt-4`}>
                    Webバックエンド
                    <ul>
                        <li className={`${dottedBorder} px-4 py-2 mt-4`}>
                            Rust
                            <ul>
                                <SkillEntry level="fine">Tokio</SkillEntry>
                                <SkillEntry level="fine">Warp</SkillEntry>
                                <SkillEntry level="fine">
                                    MongoDB Official Driver
                                </SkillEntry>
                            </ul>
                        </li>

                        <li className={`${dottedBorder} px-4 py-2 mt-4 mb-2`}>
                            TypeScript(Node.JS)
                            <ul>
                                <SkillEntry level="fine">Express</SkillEntry>
                                <SkillEntry level="good">Fastify</SkillEntry>
                                <SkillEntry level="fine">Prisma</SkillEntry>
                                <SkillEntry level="good">
                                    Nexus(GraphQL)
                                </SkillEntry>
                            </ul>
                        </li>

                        <SkillEntry level="fine">Go</SkillEntry>
                        <SkillEntry level="fine">
                            Google Cloud Platform
                        </SkillEntry>
                        <SkillEntry level="good">MongoDB</SkillEntry>
                        <SkillEntry level="fine">Postgres</SkillEntry>
                    </ul>
                </li>

                <li className={`${dottedBorder} px-4 py-2 mt-4`}>
                    組み込み
                    <ul>
                        <SkillEntry level="fine">C(AVR)</SkillEntry>
                        <SkillEntry level="fine">Arduino</SkillEntry>
                        <SkillEntry level="good">
                            Python(Raspberry Pi GPIO)
                        </SkillEntry>
                    </ul>
                </li>

                <li className={`${dottedBorder} px-4 py-2 mt-4`}>
                    その他
                    <ul>
                        <SkillEntry level="fine">Git</SkillEntry>
                        <SkillEntry level="fine">GitHub</SkillEntry>
                        <SkillEntry level="fine">Docker</SkillEntry>
                        <SkillEntry level="fine">Vagrant</SkillEntry>
                    </ul>
                </li>
            </ul>
        </section>
    );
};
