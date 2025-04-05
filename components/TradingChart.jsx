'use client'; // أضف هذا السطر في الأعلى

import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import { candlestickData } from '../data/marketDataaa';

export default function TradingChart() {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#333',
      }
    });

    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(candlestickData);

    chart.timeScale().fitContent();

    return () => chart.remove();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">BTC/USDT</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-100 rounded">1D</button>
          <button className="px-3 py-1 bg-gray-100 rounded">1W</button>
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">1M</button>
        </div>
      </div>
      <div ref={chartContainerRef} className="w-full h-[400px]" />
    </div>
  );
}