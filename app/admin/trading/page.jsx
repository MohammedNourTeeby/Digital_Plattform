'use client';
import { useState, useEffect } from 'react';
import { historicalData, generateMockData } from '../../../data/marketData';
import CandleChart from '@/components/CandleChart';
import TechnicalAnalysis from '@/components/TechnicalAnalysis';
import TradingControls from '@/components/TradingControls';

export default function TradingDashboard() {
  const [marketData, setMarketData] = useState(historicalData);
  const [timeframe, setTimeframe] = useState('1D');
  const [indicators, setIndicators] = useState({
    volume: true,
    rsi: true,
    macd: false
  });

  useEffect(() => {
    // محاكاة تحديث البيانات كل 10 ثواني
    const interval = setInterval(() => {
      setMarketData(prev => {
        const newData = [...prev.slice(1)];
        const lastEntry = prev[prev.length - 1];
        const newEntry = {
          ...lastEntry,
          time: new Date().toISOString().split('T')[0],
          close: lastEntry.close * (1 + (Math.random() * 0.02 - 0.01)),
          volume: Math.floor(Math.random() * 5000) + 1000
        };
        return [...newData, newEntry];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-8">
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setTimeframe('1D')}
          className={`px-4 py-2 rounded ${timeframe === '1D' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          24 ساعة
        </button>
        <button
          onClick={() => setTimeframe('1W')}
          className={`px-4 py-2 rounded ${timeframe === '1W' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          أسبوع
        </button>
        <button
          onClick={() => setTimeframe('1M')}
          className={`px-4 py-2 rounded ${timeframe === '1M' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          شهر
        </button>
      </div>

      <CandleChart 
        data={marketData} 
        indicators={indicators}
      />

      <TechnicalAnalysis data={marketData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TradingControls />
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">مؤشرات التحليل الفني</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={indicators.volume}
                onChange={(e) => setIndicators(prev => ({...prev, volume: e.target.checked}))}
              />
              عرض أحجام التداول
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={indicators.rsi}
                onChange={(e) => setIndicators(prev => ({...prev, rsi: e.target.checked}))}
              />
              مؤشر القوة النسبية (RSI)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}