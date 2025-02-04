import React, { FC } from "react";
import { List } from "./base/List";
import { H3 } from "./base/H";
import { Table } from "./base/Table";

export const Profile: FC = () => {
    return (
        <section className="max-w-full space-y-4">
            <section>
                <Table>
                    {{
                        ニックネーム: "かわえもん",
                        所属: "慶應義塾大学 総合政策学部",
                        趣味: "ツーリング",
                        生年月日: "2003-07-08",
                    }}
                </Table>
            </section>

            <section>
                <H3 className="my-2">検定</H3>
                <Table>
                    {{
                        "TOEIC L&R": "835点",
                        "TOEFL ITP": "530点",
                        P検: "準2級",
                    }}
                </Table>
            </section>

            <section>
                <H3 className="my-2">資格</H3>
                <List>
                    <li>第一級陸上特殊無線技士</li>
                    <li>普通自動車第一種運転免許</li>
                    <li>普通自動二輪車運転免許</li>
                </List>
            </section>

            {/* prettier-ignore */}
            <p className="text-base/6">
                四国生まれ四国育ち、高専出身の大学生です。
                小学生の頃からコンピュータが好きで、電子工作やプログラミングを楽しんできました。
                簡単な自作 OS、PIC エミュレータから、ゲームや Web アプリなど雑多に様々なものを作っています。
                現在では業務委託契約下で、主に React で Web ページを、TypeScript, Go, Rust で API サーバを書いています。
                小さい頃よく電子工作をしており、アセンブラを使った最適化など、比較的低レイヤ分野にも興味があります。
            </p>
        </section>
    );
};
