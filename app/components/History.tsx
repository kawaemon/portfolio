import React, { FC } from "react";
import { ExternalLink } from "./base/ExternalLink";
import { List } from "./base/List";
import { H3 } from "./base/H";

export const History: FC = () => (
    <section className="mt-8 max-w-full">
        <H3>略歴</H3>
        <List>
            <li>2019年4月 新居浜高専 電気情報工学科に入学</li>
            <li>2019年9月 学生LT 第28回 運営&登壇</li>
            <li>
                2020年8月 ProvinDevsチームとしてOpen Hack U 2020 Vol.1に出場
            </li>
            <li>2020年10月 C-Style株式会社で活動開始</li>
            <li>
                2021年1月 サポーターズ ウインターハッカソン Vol.6でチーム優勝
            </li>
            <li>
                2021年3月 ProvinDevsチームとしてOpen Hack U 2020 Vol.5に出場
            </li>
            <li>2022年3月 株式会社ゆめみで活動開始</li>
            <li>2024年3月 新居浜高専 電気情報工学科を卒業: 準学士（工学）</li>
            <li>2024年4月 慶應義塾大学 総合政策学部に進学</li>
            <li>
                2024年12月 ISUCON14 でチームスコア順位 8/834 位{" "}
                <ExternalLink
                    className="underline"
                    href="https://zenn.dev/kawaemon/articles/f40529e0c447f5"
                    label="ISUCON14 本戦参加記へのリンク"
                >
                    [記事]
                </ExternalLink>
            </li>
        </List>
    </section>
);
