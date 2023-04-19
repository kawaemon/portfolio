import React, { FC } from "react";

const TableData: FC<{ key_: string; value: string }> = ({ key_, value }) => (
    <tr>
        <td className="w-1/3">{key_}</td>
        <td className="w-2/3">{value}</td>
    </tr>
);

export const Profile: FC = () => {
    return (
        <section className="prose max-w-full">
            <h2 className="text-3xl">私について</h2>

            <table className="mt-4">
                <tbody>
                    <TableData key_="名前" value="かわえもん" />
                    <TableData key_="所属" value="四国のどこかの高専" />
                    <TableData
                        key_="趣味"
                        value="何かを作ること / 改造すること"
                    />
                    <TableData key_="誕生日" value="2003/07/08" />
                </tbody>
            </table>

            <h3 className="text-xl mt-2">検定など</h3>
            <table className="mt-1">
                <tbody>
                    <TableData key_="TOEIC L&R" value="835点" />
                    <TableData key_="P検" value="準2級" />
                </tbody>
            </table>

            <p className="mt-2">
                四国生まれ四国育ちの高専生です。小学生の頃から技術関係のことが好きで、電子工作やプログラミングをやってきました。
                高専に入学してからWeb系のプログラミングを始め、現在では業務委託契約下で、主に
                React で Web ページを、TypeScript, Go, Rust で API
                サーバを書いています。電子工作をしていたので、低レイヤ分野にも興味があります。
            </p>
        </section>
    );
};
