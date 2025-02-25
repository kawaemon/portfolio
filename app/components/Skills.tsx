import React, { FC, ReactNode } from "react";
import styles from "./Skills.module.css";
import { ExternalLink } from "./base/ExternalLink";

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Card {
    export type Props = {
        children: ReactNode;
    };
}

const Card: FC<Card.Props> = ({ children }) => {
    return (
        <section
            className={`p-4 bg-gray-800 rounded-md w-full ${styles.cardWidth}`}
        >
            {children}
        </section>
    );
};

export const Skills: FC = () => {
    return (
        <section className="mt-8 max-w-full">
            <h3>できること</h3>
            {/* できることはスキルだけの紹介にとどめて、作品紹介は別の場所に分けてタグ付けする形がいい気がするな。このままだと技術と作品が many-to-1 だとこまる。 */}
            <div className="flex flex-wrap gap-2">
                <Card>
                    <h4>Rust</h4>
                    <p className="text-gray-400">
                        一番好んで使っている言語です。業務経験があります。
                        ネイティブアプリをしっかり作りたいなと思ったら基本これを使っています。
                        ツールチェイン全体の開発体験がダントツで良いです。
                    </p>
                    {/* https://github.com/kawaemon/isucon14/tree/revenge-master/app/rust
                        https://github.com/approvers/rusty-ponyo */}
                </Card>
                <Card>
                    <h4>OSS Contribution</h4>
                    <p className="text-gray-400">
                        普段から OSS
                        のお世話になり続けているので、気づいたバグや改善には積極的に取り組むようにしています。
                        成熟した大規模コードベースに取り組むと、いつも新たな発見があり楽しいです。
                    </p>
                    <p className="text-gray-400">
                        <ExternalLink
                            href="https://github.com/rust-lang/cargo/pull/11579"
                            label="Cargo に投げた PR"
                            className="underline"
                        >
                            Cargo
                        </ExternalLink>
                        {", "}
                        <ExternalLink
                            href="https://github.com/FFmpeg/FFmpeg/commit/61aa532e22668ae0ed943e4aee3ea69af648375e"
                            label="ffmpeg に投げた パッチ"
                            className="underline"
                        >
                            ffmpeg
                        </ExternalLink>
                        {", "}
                        <ExternalLink
                            href="https://github.com/hyperium/http/pull/741"
                            label="hyperium/http に投げた PR"
                            className="underline"
                        >
                            hyperium/http
                        </ExternalLink>
                        , ...
                    </p>
                    {/*
                        https://github.com/hyperium/http/pull/741
                        https://github.com/FFmpeg/FFmpeg/commit/61aa532e22668ae0ed943e4aee3ea69af648375e
                        mailing list へのリンク欲しくないか？↑
                        https://github.com/rustwasm/wasm-bindgen/pull/4093
                        https://github.com/swc-project/swc-node/pull/723
                        https://github.com/rust-lang/cargo/pull/11579 */}
                </Card>
                <Card>
                    <h4>React</h4>
                    <p className="text-gray-400">
                        最近最前線は追えていませんが、書けはします。業務経験があります。
                    </p>
                    {/* https://github.com/kawaemon/portfolio */}
                </Card>
                <Card>
                    <h4>Linux</h4>
                    <p className="text-gray-400">
                        普段から Windows, macOS, Linux
                        を用途に応じて使い分けて使っています。 開発は主に Linux
                        で行っているため、実用経験はあります。 git, vim, Docker
                        等使えます。
                    </p>
                    {/* https://github.com/kawaemon/dotfiles/ */}
                </Card>
                <Card>
                    <h4>インフラ</h4>
                    <p className="text-gray-400">
                        フロント, バック, RDBMS, S3
                        等組み合わせたインフラの運用経験があります。 主に GCP,
                        AWS を、CDK を通して使っています。
                    </p>
                    {/* (imei) */}
                </Card>
                <Card>
                    <h4>その他</h4>
                    <p className="text-gray-400">
                        Go, Python, C は割とよく使います。 Java, C#, Lua
                        は触ったことがある程度です。
                    </p>
                </Card>
            </div>
        </section>
    );
};
