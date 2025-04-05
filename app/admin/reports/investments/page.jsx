'use client'; // لأننا نستخدم المخططات البيانية

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { investmentPlans } from '@/data/investmentData';
import ReportCard from '@/components/ReportCard';

// تسجيل المكونات المطلوبة
ChartJS.register(ArcElement, Tooltip, Legend);

export default function InvestmentAnalysis() {
  const planDistribution = {
    labels: investmentPlans.map(p => p.name),
    datasets: [{
      data: investmentPlans.map(p => p.subscribers),
      backgroundColor: [
        '#3B82F6', // أزرق
        '#10B981', // أخضر
        '#6366F1'  // بنفسجي
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-6">توزيع الخطط الاستثمارية</h2>
          <div className="h-64">
            <Pie 
              data={planDistribution}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: 'right' }
                }
              }}
            />
          </div>
        </div>

        <div className="space-y-6">
          {investmentPlans.map(plan => (
            <ReportCard
              key={plan.id}
              title={plan.name}
              value={`${plan.performance}% عائد`}
              description={`${plan.subscribers} مشترك | الحد الأدنى: $${plan.minAmount.toLocaleString()}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}