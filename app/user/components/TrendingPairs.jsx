"use client";
import React from 'react';

const TrendingPairs = () => {
  const pairs = [
    { name: "EUR / USD", time: "5 دقائق" },
    { name: "AUD / CAD", time: "دقائق 2" },
    { name: "AUD / JPY", time: "5 دقائق" },
    { name: "AUD / USD", time: "دقائق 2" },
    { name: "EUR / GBP", time: "5 دقائق" },
    { name: "GBP / USD", time: "دقائق 2" },
    { name: "NZD / USD", time: "5 دقائق" },
    { name: "USD / CAD", time: "دقائق 2" },
    { name: "USD / CHF", time: "5 دقائق" },
    { name: "USD / JPY", time: "دقائق 2" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 font-cairo rtl" dir="rtl">
      {/* العنوان الرئيسي */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-100 pb-4">
        الرائج
      </h2>

      {/* قائمة أزواج العملات */}
      <div className="grid gap-4">
        {pairs.map((pair, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-gray-100"
          >
            {/* اسم الزوج */}
            <span className="text-lg font-medium text-gray-700">
              {pair.name}
            </span>

            {/* الوقت */}
            <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
              <span className="text-blue-600 text-sm font-medium">
                {pair.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPairs;