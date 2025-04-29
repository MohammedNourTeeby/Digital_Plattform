"use client";
import React from 'react';

const SocialTrading = () => {
  const stats = [
    { value: "3920", label: "الصفقات المفتوحة" },
    { value: "2,698,356", label: "حجم الداران المفتوح" },
    { value: "10,586", label: "مفصل" },
    { value: "Smarity", label: "" },
    { value: "863", label: "الصفقات المفتوحة" },
    { value: "273", label: "" },
    { value: "95%", label: "" },
    { value: "75%", label: "" },
    { value: "913,484", label: "حجم" },
    { value: "23:32:00", label: "" },
  ];

  const traders = [
    { 
      rank: "1", 
      name: "Muhammad Smarity", 
      amount: "+$4300", 
      time: "23:32:00",
      deals: "15,225",
      volume: "3,333,195"
    },
    { 
      rank: "2", 
      name: "Ahmed Smarity", 
      amount: "+$4100",
      time: "23:31:00",
      deals: "13,095",
      volume: "3,271,224"
    },
    // ... أضف باقي العناصر بنفس الهيكل
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-xl font-cairo rtl" dir="rtl">
      {/* العنوان الرئيسي */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-200 pb-4">
        التداول الاجتماعي
      </h1>

      {/* قسم الإحصائيات */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* قائمة المتداولين */}
      <div className="space-y-6">
        {traders.map((trader) => (
          <div 
            key={trader.rank}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {trader.rank}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {trader.name}
                </h3>
              </div>
              <span className="text-2xl font-bold text-green-600">
                {trader.amount}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-gray-600">
              <div className="text-center">
                <div className="text-sm">الوقت</div>
                <div className="font-medium">{trader.time}</div>
              </div>
              <div className="text-center">
                <div className="text-sm">الصفقات</div>
                <div className="font-medium">{trader.deals}</div>
              </div>
              <div className="text-center">
                <div className="text-sm">المقدار</div>
                <div className="font-medium">{trader.volume}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialTrading;