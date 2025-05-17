"use client";
import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const TrendingPairs = () => {
  const pairs = [
    { name: "EUR / USD", time: "5 دقائق", trend: "up" },
    { name: "AUD / CAD", time: "دقائق 2", trend: "down" },
    { name: "AUD / JPY", time: "5 دقائق", trend: "up" },
    { name: "AUD / USD", time: "دقائق 2", trend: "down" },
    { name: "EUR / GBP", time: "5 دقائق", trend: "up" },
    { name: "GBP / USD", time: "دقائق 2", trend: "down" },
    { name: "NZD / USD", time: "5 دقائق", trend: "up" },
    { name: "USD / CAD", time: "دقائق 2", trend: "down" },
    { name: "USD / CHF", time: "5 دقائق", trend: "up" },
    { name: "USD / JPY", time: "دقائق 2", trend: "down" },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 font-cairo rtl" dir="rtl">
      {/* العنوان الرئيسي */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-700">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FaChartLine className="text-yellow-400" />
          الأزواج الرائجة
        </h2>
      </div>

      {/* قائمة أزواج العملات */}
      <div className="grid grid-cols-1 gap-3">
        {pairs.map((pair, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors border-l-4 border-yellow-400"
          >
            {/* اسم الزوج ومؤشر الترند */}
            <div className="flex items-center gap-3">
              <span className={`text-sm ${
                pair.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {pair.trend === 'up' ? '▲' : '▼'}
              </span>
              <span className="text-white font-medium">{pair.name}</span>
            </div>

            {/* الوقت */}
            <div className="flex items-center gap-2 bg-yellow-900/30 px-3 py-1 rounded-full">
              <span className="text-yellow-400 text-xs font-semibold">
                {pair.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* قسم إضافي (اختياري) */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          يتم تحديث البيانات كل 5 دقائق بناءً على نشاط التداول الفعلي
        </p>
      </div>
    </div>
  );
};

export default TrendingPairs;