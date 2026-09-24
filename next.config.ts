import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        turbopackPluginRuntimeStrategy: "workerThreads",
    },
};

export default nextConfig;
