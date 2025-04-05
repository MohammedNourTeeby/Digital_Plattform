// app/user/reports/financial/page.jsx
'use client';
import { Bar } from 'react-chartjs-2';
import { financialData } from '../../../../data/financialReports';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function FinancialReports() {
  // تأكد من وجود البيانات
  if (!financialData?.monthlyTrend) {
    return <div>جاري تحميل البيانات...</div>;
  }

  const chartData = {
    labels: financialData.monthlyTrend.map(m => m.month) || [],
    datasets: [
      {
        label: 'الدخل',
        data: financialData.monthlyTrend.map(m => m.income) || [],
        backgroundColor: '#3B82F6'
      },
      {
        label: 'المصروفات',
        data: financialData.monthlyTrend.map(m => m.expenses) || [],
        backgroundColor: '#10B981'
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="h-[400px]">
        <Bar 
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
    </div>
  );
}