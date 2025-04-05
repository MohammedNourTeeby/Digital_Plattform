'use client';
import { Bar } from 'react-chartjs-2';
import { financialData ,profitLoss } from '../../../../data/financialReports';
import ReportCard from '@/components/ReportCard';
import ProfitLossChart from '@/components/ProfitLossChart';
import IncomeBreakdown from '@/components/IncomeBreakdown';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

// تسجيل مكونات Chart.js
Chart.register(...registerables);

export default function FinancialReports() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !financialData) {
    return <div className="p-6 text-gray-500">جاري تحميل البيانات...</div>;
  }

  // التحقق من وجود البيانات المطلوبة
  const chartData = {
    labels: financialData.monthlyTrend?.map(m => m.month) || [],
    datasets: [
      {
        label: 'الدخل',
        data: financialData.monthlyTrend?.map(m => m.income) || [],
        backgroundColor: '#3B82F6'
      },
      {
        label: 'المصروفات',
        data: financialData.monthlyTrend?.map(m => m.expenses) || [],
        backgroundColor: '#10B981'
      }
    ]
  };

  return (
    <div className="space-y-8 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ReportCard 
          title="إجمالي الدخل" 
          value={financialData.income?.total || 0} 
          currency
        />
        <ReportCard 
          title="إجمالي المصروفات" 
          value={financialData.expenses?.total || 0} 
          currency
        />
        <ReportCard 
          title="صافي الربح" 
          value={(financialData.income?.total || 0) - (financialData.expenses?.total || 0)} 
          currency
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-6">الاتجاه الشهري</h2>
        <div className="h-96">
          <Bar 
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { 
                  position: 'top',
                  rtl: true
                }
              }
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {profitLoss && <ProfitLossChart data={profitLoss} />}
        {financialData.income && <IncomeBreakdown data={financialData.income} />}
      </div>
    </div>
  );
}