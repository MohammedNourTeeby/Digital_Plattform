// components/VolumeIndicator.jsx
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function VolumeIndicator({ data }) {
  const chartData = {
    labels: data.map(item => item.time),
    datasets: [
      {
        label: 'حجم التداول',
        data: data.map(item => item.volume),
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        beginAtZero: true,
        display: false
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-4">مؤشر الحجم</h3>
      <div className="h-40">
        <Bar 
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
}