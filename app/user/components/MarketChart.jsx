"use client"
import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

export default function MarketChart({ data }) {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#333',
      }
    });

    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(data);

    chart.timeScale().fitContent();

    return () => chart.remove();
  }, [data]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold mb-4">حركة السوق</h3>
      <div ref={chartContainerRef} className="w-full h-[300px]" />
    </div>
  );
}