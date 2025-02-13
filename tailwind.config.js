/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Pretendard", "system-ui", "-apple-system", "sans-serif"],
                aggro: ['"SB Aggro"', "sans-serif"],
                tway: ['"Tway Fly"', "sans-serif"],
            },
            colors: {
                border: "#e2e8f0",
                input: "#e2e8f0",
                ring: "#93c5fd",
                background: "#ffffff",
                foreground: "#0f172a",
                primary: {
                    DEFAULT: "#3b82f6",
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#64748b",
                    foreground: "#ffffff",
                },
                destructive: {
                    DEFAULT: "#ef4444",
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#f1f5f9",
                    foreground: "#64748b",
                },
                accent: {
                    DEFAULT: "#f1f5f9",
                    foreground: "#0f172a",
                },
                popover: {
                    DEFAULT: "#ffffff",
                    foreground: "#0f172a",
                },
                card: {
                    DEFAULT: "#ffffff",
                    foreground: "#0f172a",
                },
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
