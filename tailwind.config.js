// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/lightweight-charts/dist/theme.css",
  ],
  theme: {
    extend: {
      zIndex: {
        sticky: 1020,
      },
      fontFamily: {
        Tajawal: ["Tajawal", "sans-serif"],
      },
      colors: {
        "red-400": "#f87171",
        "blue-400": "#60a5fa",
        "gray-800": "#1f2937",
        "gray-700": "#374151",
        "gray-600": "#4b5563",
        "blue-400": "#60a5fa",
        "green-400": "#34d399",
        "user-primary": "#1E40AF",
        security: "#3B82F6",
        alert: "#EF4444",
        "report-primary": "#1E3A8A",
        "report-secondary": "#3B82F6",
        primary: "#3B82F6",
        success: "#10B981",
        secondary: "#6366F1",
        indigo: {
          600: "#4F46E5",
        },
      },
      backdropBlur: {
        sm: "4px",
      },
    },
  },
  // ...rest of config
};
