import React, { FC } from "react";

import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { Skills } from "../components/Skills";

const Index: FC = () => (
    <>
        <Header />

        <main className="bg-gray-900 text-white w-full">
            <article>
                <Profile />
                <Skills />
            </article>
        </main>
    </>
);

export default Index;
