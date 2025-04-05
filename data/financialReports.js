export const financialData = {
  portfolio: {
    labels: ["يناير", "فبراير", "مارس", "أبريل"],
    datasets: [
      {
        label: "قيمة المحفظة (USD)",
        data: [5000, 6200, 7800, 8500],
        borderColor: "#3B82F6",
        tension: 0.1,
      },
    ],
  },
  goals: {
    labels: ["الشهري", "الربعي", "السنوي"],
    values: [85, 60, 45],
  },
};
