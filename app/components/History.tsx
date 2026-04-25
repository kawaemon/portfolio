import React, { FC } from "react";
import { ExternalLink } from "./base/ExternalLink";
import { Table } from "./base/Table";

export const History: FC = () => (
    <section className="max-w-full">
        <h3>略歴</h3>
        <Table>
            {[
                [
                    "2026年04月",
                    <>
                        RubyKaigi2026 に NOC ヘルパーとして参加
                        <ExternalLink
                            href="https://rubykaigi.org/2026/about/"
                            label="RubyKaigi 2026 の about ページ"
                        >
                            [スタッフ一覧]
                        </ExternalLink>
                    </>,
                ],
                [
                    "2026年03月",
                    <>
                        WebSpeedHackathon 2026 でスコア 20 / 132 位{" "}
                        <ExternalLink
                            href="https://web-speed-hackathon-scoring-board-2026.fly.dev/"
                            label="WebSpeedHackathon 2026 のリーダーボード"
                        >
                            [順位表]
                        </ExternalLink>
                    </>,
                ],
                [
                    "2026年03月",
                    <>
                        ICT トラブルシューティングコンテスト 2025 にチーム出場
                        <ExternalLink
                            href="https://icttoracon.net/archives/10166"
                            label="ICTSC 一次予選結果"
                        >
                            [一次予選-7位]
                        </ExternalLink>{" "}
                        <ExternalLink
                            href="https://icttoracon.net/archives/10329"
                            label="ICTSC 二次予選結果"
                        >
                            [二次予選-満点1/32位]
                        </ExternalLink>{" "}
                        [本戦-4/15位]
                    </>,
                ],
                [
                    "2026年02月",
                    <>
                        ChuNOG7 NOC に L2/L3 チームリーダーとして参加{" "}
                        <ExternalLink
                            href="https://chunog.connpass.com/event/368386"
                            label="ChuNOG7 のイベントページ"
                        >
                            [connpass]
                        </ExternalLink>
                    </>,
                ],
                [
                    "2025年11月",
                    <>
                        InternetWeek 2025 NOC に L2/L3 チームとして参加{" "}
                        <ExternalLink
                            href="https://blog.nic.ad.jp/2025/11394/"
                            label="IWNOC 2025 の JPNIC BLOG"
                        >
                            [記事]
                        </ExternalLink>
                    </>,
                ],
                [
                    "2025年03月",
                    <>
                        WebSpeedHackathon 2025 でスコア 8 / 123 位{" "}
                        <ExternalLink
                            href="https://web-speed-hackathon-scoring-board-2025.fly.dev/"
                            label="WebSpeedHackathon 2025 のリーダーボード"
                        >
                            [順位表]
                        </ExternalLink>
                    </>,
                ],
                [
                    "2025年01月",
                    <>
                        ISUCON14 感想戦で 2 位{" "}
                        {/* やっぱりなんとかして母数書きたいよね */}
                        <ExternalLink
                            href="https://zenn.dev/kawaemon/articles/529fd6a12ac43b"
                            label="ISUCON14 感想戦参加記へのリンク"
                        >
                            [記事]
                        </ExternalLink>
                    </>,
                ],
                [
                    "2024年12月",
                    <>
                        ISUCON14 でチームスコア 8 / 834 位{" "}
                        <ExternalLink
                            href="https://zenn.dev/kawaemon/articles/f40529e0c447f5"
                            label="ISUCON14 本戦参加記へのリンク"
                        >
                            [記事]
                        </ExternalLink>
                    </>,
                ],
                ["2024年04月", "慶應義塾大学 総合政策学部に進学"],
                [
                    "2024年03月",
                    "新居浜高専 電気情報工学科を卒業: 準学士（工学）",
                ],
                ["2022年09月", "株式会社オプティムで短期インターン"],
                ["2022年03月", "株式会社ゆめみで活動開始"],
                [
                    "2021年03月",
                    "ProvinDevsチームとしてOpen Hack U 2020 Vol.5に出場",
                ],
                [
                    "2021年01月",
                    "サポーターズ ウインターハッカソン Vol.6でチーム優勝",
                ],
                ["2020年10月", "C-Style株式会社で活動開始"],
                [
                    "2020年08月",
                    "ProvinDevsチームとしてOpen Hack U 2020 Vol.1に出場",
                ],
                ["2019年09月", "学生LT 第28回 運営&登壇"],
                ["2019年04月", "新居浜高専 電気情報工学科に入学"],
            ]}
        </Table>
    </section>
);
