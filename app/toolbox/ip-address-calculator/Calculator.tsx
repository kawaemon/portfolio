"use client";

import { Fragment, useState } from "react";
import { calculateSubnet } from "./subnet";

function Prefix({ value }: { value: string }) {
    if (value.includes(":"))
        return (
            <span className="min-w-0 break-all font-mono text-sm">{value}</span>
        );
    const split = value.lastIndexOf(".") + 1;
    return (
        <span className="font-mono">
            <span className="text-xs sm:text-sm">{value.slice(0, split)}</span>
            <wbr />
            <strong className="inline-block">{value.slice(split)}</strong>
        </span>
    );
}

export function Calculator() {
    const [input, setInput] = useState("192.168.13.48/29");
    const result = calculateSubnet(input);

    function neighbor(prefix: string | null, previous: boolean) {
        const direction = previous ? "前" : "次";
        return (
            <button
                type="button"
                disabled={!prefix}
                onClick={() => prefix && setInput(prefix)}
                aria-label={
                    prefix
                        ? direction + "のサブネット " + prefix
                        : direction + "のサブネットなし"
                }
                className="rounded-md px-1 py-3 text-center text-gray-300 enabled:cursor-pointer enabled:hover:bg-gray-800 enabled:hover:text-white focus-visible:outline-sky-300 disabled:opacity-40"
            >
                <span aria-hidden="true" className="mb-1 block">
                    {previous ? "←" : "→"}
                </span>
                {prefix ? <Prefix value={prefix} /> : "—"}
            </button>
        );
    }

    return (
        <div className="space-y-7">
            <div>
                <label
                    htmlFor="cidr"
                    className="mb-2 block text-sm font-semibold"
                >
                    IPv4・IPv6 / CIDR
                </label>
                <input
                    id="cidr"
                    className="w-full rounded-lg border border-gray-600 bg-gray-950 px-4 py-3 font-mono text-xl text-white focus:outline-2 focus:outline-sky-300"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    autoCapitalize="none"
                    spellCheck={false}
                    placeholder="192.168.13.48/29"
                    aria-invalid={!result && !!input}
                />
            </div>
            {result && (
                <section
                    aria-label="サブネット"
                    className="rounded-lg border border-gray-700"
                >
                    <div className="grid grid-cols-3 items-stretch gap-1 p-1">
                        {neighbor(result.previous, true)}
                        <h2
                            aria-label={"現在のサブネット " + result.prefix}
                            className="flex items-center justify-center rounded-t-md border-b-2 border-sky-300 bg-sky-300/10 px-1 py-3 text-center text-lg text-sky-200"
                        >
                            <Prefix value={result.prefix} />
                        </h2>
                        {neighbor(result.next, false)}
                    </div>
                    <div className="break-all px-4 py-5 sm:px-7">
                        <div className="mb-4 flex flex-wrap justify-between gap-2 text-sm text-gray-400">
                            <span>
                                Mask{" "}
                                <span className="font-mono text-gray-200">
                                    {result.mask}
                                </span>
                            </span>
                            <span>
                                {result.size.toLocaleString("ja-JP")} IPs
                            </span>
                        </div>
                        <ol
                            aria-label="アドレス範囲"
                            className="border-l border-gray-600 font-mono"
                        >
                            {result.rows.map((row, index) => {
                                const skipped =
                                    row.offset -
                                    (result.rows[index - 1]?.offset ?? -1n) -
                                    1n;
                                const edge =
                                    row.offset === 0n ||
                                    row.offset === result.size - 1n;
                                return (
                                    <Fragment key={row.offset}>
                                        {skipped > 0 && (
                                            <li
                                                aria-label={
                                                    skipped + " アドレス省略"
                                                }
                                                className="pl-4 text-gray-400"
                                            >
                                                ⋮
                                            </li>
                                        )}
                                        <li
                                            title={row.label}
                                            className={`relative flex flex-wrap items-baseline justify-between gap-x-2 px-4 py-1.5 ${row.selected ? "bg-sky-300/10 text-sky-200" : ""}`}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={`absolute top-1/2 left-0 h-px -translate-x-1/2 bg-gray-400 ${edge ? "w-3" : "w-1.5"}`}
                                            />
                                            <span
                                                className={
                                                    edge || row.selected
                                                        ? "font-bold"
                                                        : ""
                                                }
                                            >
                                                <span className="sr-only">
                                                    {row.label}{" "}
                                                </span>
                                                {row.address}
                                                {row.selected && (
                                                    <span
                                                        aria-label="入力アドレス"
                                                        className="ml-2 text-sky-300"
                                                    >
                                                        ◂
                                                    </span>
                                                )}
                                            </span>
                                            <span className="text-sm text-gray-400">
                                                +{row.offset}
                                            </span>
                                        </li>
                                    </Fragment>
                                );
                            })}
                        </ol>
                    </div>
                </section>
            )}
        </div>
    );
}
