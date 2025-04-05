'use client';
import { Bar } from 'react-chartjs-2';
import { financialData, profitLoss } from '@/data/financialReports';
import ReportCard from '@/components/ReportCard';
import ProfitLossChart from '@/components/ProfitLossChart';
import IncomeBreakdown from '@/components/IncomeBreakdown';

export default function FinancialReports() {
  const chartData = {
    labels: financialData.monthlyTrend.map(m => m.month),
    datasets: [
      {
        label: 'الدخل',
        data: financialData.monthlyTrend.map(m => m.income),
        backgroundColor: '#3B82F6'
      },
      {
        label: 'المصروفات',
        data: financialData.monthlyTrend.map(m => m.expenses),
        backgroundColor: '#10B981'
      }
    ]
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ReportCard 
          title="إجمالي الدخل" 
          value={financialData.income.total} 
          currency
        />
        <ReportCard 
          title="إجمالي المصروفات" 
          value={financialData.expenses.total} 
          currency
        />
        <ReportCard 
          title="صافي الربح" 
          value={financialData.income.total - financialData.expenses.total} 
          currency
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-6">الاتجاه الشهري</h2>
        <Bar 
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' }
            }
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfitLossChart data={profitLoss} />
        <IncomeBreakdown data={financialData.income} />
      </div>
    </div>
  );
}