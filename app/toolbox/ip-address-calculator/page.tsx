import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "./Calculator";

export const metadata: Metadata = {
    title: "IP Address Calculator | Toolbox | かわえもん",
};

export default function IpAddressCalculator() {
    return (
        <main className="mx-auto max-w-screen-md px-4 py-12">
            <Link href="/toolbox" className="text-sm hover:underline">
                ← Toolbox
            </Link>
            <h1 className="mt-10 mb-6 text-3xl font-bold text-white sm:text-4xl">
                IP Address Calculator
            </h1>
            <Calculator />
        </main>
    );
}
