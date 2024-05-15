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
                    <TableData key_="ニックネーム" value="かわえもん" />
                    <TableData key_="所属" value="慶應義塾大学 総合政策学部" />
                    <TableData key_="趣味" value="ツーリング" />
                    <TableData key_="生年月日" value="2003-07-08" />
                </tbody>
            </table>

            <h3 className="text-xl mt-2">検定</h3>
            <table className="mt-1">
                <tbody>
                    <TableData key_="TOEIC L&R" value="835点" />
                    <TableData key_="TOEFL ITP" value="530点" />
                    <TableData key_="P検" value="準2級" />
                </tbody>
            </table>

            <h3 className="text-xl mt-2">資格</h3>
            <ul>
                <li>第一級陸上特殊無線技士</li>
                <li>普通自動車第一種運転免許</li>
                <li>普通自動二輪車運転免許</li>
            </ul>

            {/* prettier-ignore */}
            <p className="mt-2">
                四国生まれ四国育ち、高専出身の大学生です。
                小学生の頃からコンピュータが好きで、電子工作やプログラミングを楽しんできました。
                簡単な自作 OS、PIC エミュレータから、ゲームや Web アプリなど雑多に様々なものを作っています。
                現在では業務委託契約下で、主に React で Web ページを、TypeScript, Go, Rust で API
                サーバを書いています。
                小さい頃よく電子工作をしていたので、低レイヤ分野にも興味があります。
            </p>
        </section>
    );
};
