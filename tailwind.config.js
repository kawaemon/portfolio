module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.100"),
                        h2: {
                            color: theme("colors.gray.50"),
                        },
                        h3: {
                            color: theme("colors.gray.50"),
                        },
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
