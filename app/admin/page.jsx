'use client';

import dynamic from 'next/dynamic';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const DynamicPieChart = dynamic(
    () => import('recharts').then((mod) => mod.PieChart),
    { ssr: false }
  );
  
  const DynamicBarChart = dynamic(
    () => import('recharts').then((mod) => mod.BarChart),
    { ssr: false }
  );
// بيانات افتراضية
const data = {
  financial: {
    totalDeposits: 1542300,
    totalWithdrawals: 845600,
    activeInvestments: 892400,
    paidProfits: 234500,
    pendingProfits: 156700
  },
  users: {
    activeUsers: 2458,
    newSubscriptions: 148,
    growthRate: 4.7
  },
  charts: {
    operations: [
      { name: 'ودائع', value: 400 },
      { name: 'سحوبات', value: 300 },
      { name: 'استثمارات', value: 200 }
    ],
    monthlyTrend: [
      { month: 'يناير', deposits: 4000, withdrawals: 2400 },
      { month: 'فبراير', deposits: 3000, withdrawals: 1398 },
      { month: 'مارس', deposits: 2000, withdrawals: 9800 },
    ]
  },
  kpis: {
    liquidity: 2452300,
    tradeVolume: 1542300,
    profitMargin: 28.4
  }
};

// مكون بطاقة KPI
const KpiCard = ({ title, value, unit, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
    <div className="flex items-end gap-2">
      <span className="text-2xl font-bold">{value.toLocaleString()}</span>
      <span className="text-gray-500">{unit}</span>
    </div>
    {trend && (
      <div className={`mt-2 text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
      </div>
    )}
  </div>
);

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">نظرة عامة على الأداء</h1>
      
      {/* صف بطاقات KPI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard 
          title="إجمالي السيولة" 
          value={data.kpis.liquidity} 
          unit="$"
          trend={2.4}
        />
        <KpiCard 
          title="حجم التداول" 
          value={data.kpis.tradeVolume} 
          unit="$"
          trend={-1.2}
        />
        <KpiCard 
          title="نسبة الربح" 
          value={data.kpis.profitMargin} 
          unit="%"
        />
      </div>

      {/* ملخص الأداء المالي */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">الأداء المالي</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>الودائع الإجمالية:</span>
              <span className="font-medium">${data.financial.totalDeposits.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>السحوبات الإجمالية:</span>
              <span className="font-medium">${data.financial.totalWithdrawals.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>الاستثمارات النشطة:</span>
              <span className="font-medium">${data.financial.activeInvestments.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>الأرباح المدفوعة:</span>
              <span className="font-medium">${data.financial.paidProfits.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>الأرباح المستحقة:</span>
              <span className="font-medium">${data.financial.pendingProfits.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* مخطط توزيع العمليات */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">توزيع العمليات</h3>
          <DynamicPieChart width={400} height={300}>
          <Pie
              data={data.charts.operations}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.charts.operations.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={['#3B82F6', '#10B981', '#6366F1'][index]} 
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </DynamicPieChart>
        </div>
      </div>

      {/* إحصائيات المستخدمين والرسم البياني */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">إحصائيات المستخدمين</h3>
          <div className="space-y-4">
            <KpiCard 
              title="المستخدمين النشطين" 
              value={data.users.activeUsers} 
              trend={data.users.growthRate}
            />
            <KpiCard 
              title="اشتراكات جديدة (30 يوم)" 
              value={data.users.newSubscriptions} 
            />
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-blue-800">معدل النمو الشهري</h4>
              <div className="text-2xl font-bold text-blue-600">
                {data.users.growthRate}%
              </div>
            </div>
          </div>
        </div>

        {/* الرسم البياني الخطي */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">الاتجاه الشهري</h3>
          <DynamicBarChart
  width={500}
  height={300}
  data={data.charts.monthlyTrend}
  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="deposits" fill="#3B82F6" name="الودائع" />
            <Bar dataKey="withdrawals" fill="#10B981" name="السحوبات" />
          </DynamicBarChart>
        </div>
      </div>
    </div>
  );
}