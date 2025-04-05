import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function MarketDepthChart({ realtime }) {
  const data = {
    labels: ['العرض', 'الطلب'],
    datasets: [
      {
        label: 'السيولة',
        data: [realtime.bid, realtime.ask],
        backgroundColor: ['#3B82F6', '#10B981'],
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-4">عمق السوق</h3>
      <Bar 
        data={data}
        options={{
          responsive: true,
          indexAxis: 'y',
          plugins: {
            legend: { display: false }
          }
        }}
      />
      <div className="mt-4 text-sm text-gray-600">
        Spread: {realtime.spread} نقطة
      </div>
    </div>
  );
}