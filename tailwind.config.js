module.exports = {
    purge: ["./src/**/*.{ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
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
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
