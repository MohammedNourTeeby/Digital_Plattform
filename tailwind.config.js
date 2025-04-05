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
        "user-primary": "#1E40AF",
        "user-secondary": "#3B82F6",
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
    },
  },
  // ...rest of config
};
