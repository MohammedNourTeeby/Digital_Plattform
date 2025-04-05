export const plans = [
  {
    id: 1,
    name: "الخطة الذهبية",
    minAmount: 1000,
    duration: 6,
    profitRate: 25,
    paymentSchedule: [
      { date: "2024-04-01", amount: 250 },
      { date: "2024-05-01", amount: 250 },
      { date: "2024-06-01", amount: 250 },
    ],
    subscribers: 45,
    status: "نشطة",
  },
  {
    id: 2,
    name: "الخطة الاساسية",
    minAmount: 1000,
    duration: 6,
    profitRate: 25,
    paymentSchedule: [
      { date: "2024-04-01", amount: 250 },
      { date: "2024-05-01", amount: 250 },
      { date: "2024-06-01", amount: 250 },
    ],
    subscribers: 45,
    status: "متوقفة",
  },
  // ... المزيد من الخطط
];
