'use client';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function IncomeBreakdown({ data }) {
  const chartData = {
    labels: ['الودائع', 'الرسوم', 'أخرى'],
    datasets: [
      {
        data: [data.deposits, data.fees, data.total - data.deposits - data.fees],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#6366F1'
        ],
        borderWidth: 1,
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">تفصيل الدخل</h3>
      <div className="h-64">
        <Doughnut 
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                rtl: true
              }
            }
          }}
        />
      </div>
    </div>
  );
}