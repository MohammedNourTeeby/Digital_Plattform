"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const CandleChart = ({ candles }) => {
  const data = {
    labels: candles.map(c => new Date(c.time).toLocaleTimeString()),
    datasets: [
      {
        label: 'فتح',
        data: candles.map(c => c.open),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'عالي',
        data: candles.map(c => c.high),
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'منخفض',
        data: candles.map(c => c.low),
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'إغلاق',
        data: candles.map(c => c.close),
        borderColor: 'orange',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="mt-6">
      <Line data={data} options={options} />
    </div>
  );
};

export default CandleChart;
