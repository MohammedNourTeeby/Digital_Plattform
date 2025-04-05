'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ProfitLossChart({ data }) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'الأرباح',
        data: Object.values(data).map(item => item.profit),
        backgroundColor: '#10B981',
      },
      {
        label: 'الخسائر',
        data: Object.values(data).map(item => item.loss),
        backgroundColor: '#EF4444',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        rtl: true
      },
      title: {
        display: true,
        text: 'تحليل الأرباح والخسائر',
        font: {
          size: 16
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={chartData} options={options} />;
}