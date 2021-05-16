import React, { FC } from "react";

export const Profile: FC = () => {
    return (
        <section className="max-w-screen-md mx-auto">
            <h2 className="text-3xl">私について</h2>

            <table className="w-2/3 mt-4">
                <tbody>
                    <tr>
                        <td>名前</td>
                        <td>かわえもん</td>
                    </tr>
                    <tr>
                        <td>所属</td>
                        <td>四国のどこかの高専</td>
                    </tr>
                    <tr>
                        <td>趣味</td>
                        <td>何かを作ること / リズムゲーム</td>
                    </tr>
                    <tr>
                        <td>誕生日</td>
                        <td>2003/07/08</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-xl mt-2">検定など</h3>
            <table className="w-1/4 mt-1">
                <tbody>
                    <tr>
                        <td>TOEIC L&R</td>
                        <td>780点</td>
                    </tr>
                    <tr>
                        <td>P検</td>
                        <td>準2級</td>
                    </tr>
                </tbody>
            </table>

            <p className="mt-2">
                四国生まれ四国育ちの高専生です。小学生の頃から技術関係のことが好きで、電子工作やプログラミングをやってきました。高専に入学してからWeb系のプログラミングをはじめました。現在ではReactをメインで書いていますが、バックエンドのほうが得意です。電子工作をやっていたので低レイヤにも興味があります。
            </p>
        </section>
    );
};
