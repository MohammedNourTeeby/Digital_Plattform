import React from 'react';
import { FaClock, FaCoins, FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const generateMockTrades = () => {
 const mockTrades = [];
  const assets = ['BTC/USD', 'ETH/USD', 'XRP/USD', 'LTC/USD'];
  
  for (let i = 0; i < 10; i++) {
    const openTime = Date.now() - (i * 1000 * 60 * 60); // كل صف يمثل ساعة
    const amount = (Math.random() * 100).toFixed(2);
    const openPrice = (Math.random() * 1000).toFixed(4);
    const closePrice = (Math.random() * 1000).toFixed(4);
    const profit = (closePrice - openPrice) * amount;
    const status = profit >= 0 ? 'won' : 'lost';
    const direction = Math.random() > 0.5 ? 'call' : 'put';

    mockTrades.push({
      id: i,
      openTime,
      assetName: assets[Math.floor(Math.random() * assets.length)],
      direction,
      amount: parseFloat(amount),
      openPrice: parseFloat(openPrice),
      closePrice: parseFloat(closePrice),
      status,
      profit: parseFloat(profit.toFixed(2)),
    });
  }

  return mockTrades;
};

const TradeHistoryTable = ({ trades = generateMockTrades() }) => {
  if (!trades || trades.length === 0) {
    return (
      <div className="p-6 bg-gray-800 rounded-lg text-gray-400 text-center">
        لا يوجد سجل صفقات
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      {/* العنوان الرئيسي */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
        <FaChartLine className="text-yellow-400 text-xl" />
        <h2 className="text-xl font-bold text-white">سجل الصفقات</h2>
      </div>

      {/* عناوين الأعمدة */}
      <div className="hidden md:grid grid-cols-12 gap-4 mb-4 px-4">
        <div className="col-span-2 text-gray-400 text-sm flex items-center gap-1">
          <FaClock /> الوقت
        </div>
        <div className="col-span-2 text-gray-400 text-sm">الأصل</div>
        <div className="col-span-2 text-gray-400 text-sm">الاتجاه</div>
        <div className="col-span-2 text-gray-400 text-sm">المبلغ</div>
        <div className="col-span-2 text-gray-400 text-sm">النتيجة</div>
        <div className="col-span-2 text-gray-400 text-sm">الربح/الخسارة</div>
      </div>

      {/* قائمة الصفقات */}
      <div className="space-y-3">
        {trades.map((trade) => (
          <div
            key={trade.id}
            className={`grid grid-cols-12 gap-4 items-center p-4 rounded-lg border-l-4 ${
              trade.status === 'won' 
                ? 'border-green-500 bg-green-900/20' 
                : 'border-red-500 bg-red-900/20'
            } hover:bg-gray-700 transition-colors`}
          >
            {/* الوقت */}
            <div className="col-span-12 md:col-span-2">
              <div className="text-white text-sm">
                {new Date(trade.openTime).toLocaleTimeString()}
              </div>
              <div className="text-gray-400 text-xs">
                {new Date(trade.openTime).toLocaleDateString()}
              </div>
            </div>

            {/* الأصل */}
            <div className="col-span-6 md:col-span-2 text-white font-medium">
              <FaCoins className="inline mr-2 text-yellow-400" />
              {trade.assetName}
            </div>

            {/* الاتجاه */}
            <div className="col-span-6 md:col-span-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                trade.direction === 'call' 
                  ? 'bg-green-900/30 text-green-400' 
                  : 'bg-red-900/30 text-red-400'
              }`}>
                {trade.direction === 'call' ? <FaArrowUp /> : <FaArrowDown />}
                <span className="text-sm">
                  {trade.direction === 'call' ? 'شراء' : 'بيع'}
                </span>
              </div>
            </div>

            {/* المبلغ */}
            <div className="col-span-6 md:col-span-2 text-white">
              <span className="text-gray-400 text-sm">$</span>
              {trade.amount.toFixed(2)}
            </div>

            {/* النتيجة */}
            <div className="col-span-6 md:col-span-2">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                trade.status === 'won'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {trade.status === 'won' ? 'رابحة' : 'خاسرة'}
              </span>
            </div>

            {/* الربح/الخسارة */}
            <div className="col-span-12 md:col-span-2">
              <div className={`text-lg font-semibold ${
                trade.profit >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                ${trade.profit.toFixed(2)}
              </div>
              <div className="text-gray-400 text-xs">
                ({trade.closePrice.toFixed(4)})
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* التذييل */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm text-center">
          يتم تحديث البيانات كل 5 دقائق - جميع الأوقات بتوقيت المحلي
        </p>
      </div>
    </div>
  );
};

export default TradeHistoryTable;