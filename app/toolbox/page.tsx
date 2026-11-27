import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Toolbox | かわえもん" };

export default function Toolbox() {
    return (
        <main className="mx-auto max-w-screen-md px-4 py-12">
            <Link href="/" className="text-sm hover:underline">
                <span aria-hidden="true">← </span> Back
            </Link>
            <h1 className="mt-10 mb-6 text-4xl font-bold text-white">
                Toolbox
            </h1>
            <ul className="grid gap-4 sm:grid-cols-2">
                <li>
                    <Link
                        href="/toolbox/ip-address-calculator"
                        className="group block rounded-lg border border-gray-700 p-5 hover:border-gray-400 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                        <span
                            aria-hidden="true"
                            className="block py-8 text-center font-mono text-2xl text-gray-400"
                        >
                            192.168.8.84
                            <span className="text-sky-300">/24</span>
                        </span>
                        <span className="flex items-center justify-between border-t border-gray-700 pt-4 font-semibold text-white">
                            IP Address Calculator{" "}
                            <span aria-hidden="true">→</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </main>
    );
}
