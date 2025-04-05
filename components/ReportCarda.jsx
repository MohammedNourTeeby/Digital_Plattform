import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function ReportCarda({ title, data, type }) {
  const chartData = type === 'line-chart' ? data : {
    labels: data.labels,
    datasets: [{
      label: 'تحقيق الأهداف (%)',
      data: data.values,
      backgroundColor: '#3B82F6'
    }]
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow h-80">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {type === 'line-chart' ? (
        <Line 
          data={chartData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      ) : (
        <Bar 
          data={chartData}
          options={{ 
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 100 } }
          }}
        />
      )}
    </div>
  );
}