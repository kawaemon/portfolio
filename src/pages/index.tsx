import React, { FC } from "react";

import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { Skills } from "../components/Skills";
import { History } from "../components/History";
import { Footer } from "../components/Footer";

const Index: FC = () => (
    <article className="bg-gray-900 text-white">
        <Header />

        <main className="w-full px-4 md:max-w-screen-md md:mx-auto">
            <Profile />
            <Skills />
            <History />
        </main>

        <Footer />
    </article>
);

export default Index;
