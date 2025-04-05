"use client";
import BalanceCard from './components/BalanceCard';
import InvestmentCard from './components/InvestmentCard';
import MarketChart from './components/MarketChart';
import { userData } from '../../data/userData';
import { marketDataa } from '../../data/marketDataa';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// بيانات أداء الاستثمار الافتراضية
const performanceData = {
  labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو'],
  datasets: [
    {
      label: 'أداء الاستثمار',
      data: [5000, 6000, 7500, 8200, 9000],
      borderColor: '#3B82F6',
      tension: 0.4,
      fill: false
    }
  ]
};

export default function UserDashboard() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">لوحة التحكم</h1>
      
      {/* صف البطاقات العلوية */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BalanceCard data={userData.balance} />
        <InvestmentCard data={userData.investments} />
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">الإشعارات</h3>
          <div className="space-y-3">
            {userData.notifications.map(notif => (
              <div key={notif.id} className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm">{notif.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* المخططات */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MarketChart data={marketDataa} />
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">أداء الاستثمار</h3>
          <div className="h-64">
            <Line
              data={performanceData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'bottom' }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    title: { display: true, text: 'القيمة (USDT)' }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}