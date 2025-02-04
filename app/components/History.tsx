import React, { FC } from "react";
import { ExternalLink } from "./base/ExternalLink";
import { List } from "./base/List";
import { H3 } from "./base/H";
import { Table } from "./base/Table";

export const History: FC = () => (
    <section className="mt-8 max-w-full">
        <H3>略歴</H3>
        <Table>
            {{
                "2019年04月": "新居浜高専 電気情報工学科に入学",
                "2019年09月": "学生LT 第28回 運営&登壇",
                "2020年08月":
                    "ProvinDevsチームとしてOpen Hack U 2020 Vol.1に出場",
                "2020年10月": "C-Style株式会社で活動開始",
                "2021年01月":
                    "サポーターズ ウインターハッカソン Vol.6でチーム優勝",
                "2021年03月":
                    "ProvinDevsチームとしてOpen Hack U 2020 Vol.5に出場",
                "2022年03月": "株式会社ゆめみで活動開始",
                "2024年03月": "新居浜高専 電気情報工学科を卒業: 準学士（工学）",
                "2024年04月": "慶應義塾大学 総合政策学部に進学",
                "2024年12月": (
                    <>
                        ISUCON14 でチームスコア順位 8/834 位{" "}
                        <ExternalLink
                            className="underline"
                            href="https://zenn.dev/kawaemon/articles/f40529e0c447f5"
                            label="ISUCON14 本戦参加記へのリンク"
                        >
                            [記事]
                        </ExternalLink>
                    </>
                ),
                "2025年01月": (
                    <>
                        ISUCON14 感想戦で 2 位{" "}
                        <ExternalLink
                            className="underline"
                            href="https://zenn.dev/kawaemon/articles/529fd6a12ac43b"
                            label="ISUCON14 感想戦参加記へのリンク"
                        >
                            [記事]
                        </ExternalLink>
                    </>
                ),
            }}
        </Table>
    </section>
);
