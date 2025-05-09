"use client"
import { useState } from 'react';
import TradingChart from '@/components/TradingChart';
import OrderForm from '@/components/OrderForm';
import MarketData from '@/components/MarketData';
import History from '../trading/history/page';
import LiveCandleChart from '@/components/LiveCandleChart';
import TradingConsole from '@/components/TradingConsole';
import { initialCandles } from '../../../data/candles';

export default function TradingPage() {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* قسم المخطط وبيانات السوق */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <TradingChart />
        </div>
        
        <div className="bg-white rounded-xl shadow p-6">
          <MarketData />
        </div>
      </div>

      {/* نموذج الأوامر */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex border-b mb-4">
          <button 
            className={`px-4 py-2 ${activeTab === 'buy' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('buy')}
          >
            شراء
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'sell' ? 'border-b-2 border-red-500 text-red-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('sell')}
          >
            بيع
          </button>
        </div>
        
        <OrderForm type={activeTab} />
      </div>
      <div className="bg-white rounded-xl shadow p-6">
          <History />
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">مخطط الشموع</h2>
          <LiveCandleChart data={initialCandles} />
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow p-6">
        <TradingConsole />
      </div>
    </div>
    </div>
  );
}