"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function PerformanceChart({ plan }) {
  const performanceData = [
    { month: 'يناير', profit: plan.minAmount * 0.25, investments: 15 },
    { month: 'فبراير', profit: plan.minAmount * 0.35, investments: 22 },
    { month: 'مارس', profit: plan.minAmount * 0.45, investments: 30 },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">تحليل الأداء الشهري</h3>
      <BarChart
        width={600}
        height={300}
        data={performanceData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profit" fill="#3B82F6" name="الأرباح ($)" />
        <Bar dataKey="investments" fill="#10B981" name="الاستثمارات الجديدة" />
      </BarChart>
    </div>
  );
}