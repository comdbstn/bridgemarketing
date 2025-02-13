/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Pretendard", "system-ui", "-apple-system", "sans-serif"],
                aggro: ['"SB Aggro"', "sans-serif"],
                tway: ['"Tway Fly"', "sans-serif"],
            },
            colors: {
                background: "#000000",
                foreground: "#ffffff",
                primary: "#3b82f6",
                secondary: "#64748b",
                destructive: "#ef4444",
                muted: "#f1f5f9",
                accent: "#f1f5f9",
            },
            borderRadius: {
                lg: "0.5rem",
                md: "0.375rem",
                sm: "0.25rem",
            },
        },
    },
    plugins: [],
};
