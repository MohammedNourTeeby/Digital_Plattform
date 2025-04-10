"use client";
import React, { useState } from 'react';
import AdminCandleEditor from '@/components/AdminCandleEditor';
import CandlemyChart from '@/components/CandlemyChart';
import { initialCandles } from '../../../data/candles';

export default function CandleManagement() {
  const [candles, setCandles] = useState(initialCandles);
  const [selectedCandle, setSelectedCandle] = useState(null);

  const updateCandle = (updatedCandle) => {
    setCandles(candles.map(c =>
      c.id === updatedCandle.id ? updatedCandle : c
    ));
    // تحديث الشمعة المحددة إذا كانت هي المحدثة
    if (selectedCandle && selectedCandle.id === updatedCandle.id) {
      setSelectedCandle(updatedCandle);
    }
  };

  // دالة لتعديل قيم الشمعة المحددة بزيادة أو نقصان delta
  const adjustSelectedCandle = (delta) => {
    if (selectedCandle) {
      const updated = {
        ...selectedCandle,
        open: selectedCandle.open + delta,
        high: selectedCandle.high + delta,
        low: selectedCandle.low + delta,
        close: selectedCandle.close + delta,
      };
      setSelectedCandle(updated);
      updateCandle(updated);
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* القسم الأول: جدول الشموع والمخطط */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">قائمة الشموع</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-right p-3">الوقت</th>
                <th className="text-right p-3">فتح</th>
                <th className="text-right p-3">عالي</th>
                <th className="text-right p-3">منخفض</th>
                <th className="text-right p-3">إغلاق</th>
              </tr>
            </thead>
            <tbody>
              {candles.map(candle => (
                <tr 
                  key={candle.id}
                  className={`cursor-pointer ${selectedCandle && selectedCandle.id === candle.id ? 'bg-blue-50' : ''}`}
                  onClick={() => setSelectedCandle(candle)}
                >
                  <td className="p-3">{new Date(candle.time).toLocaleTimeString()}</td>
                  <td className="p-3">{candle.open}</td>
                  <td className="p-3">{candle.high}</td>
                  <td className="p-3">{candle.low}</td>
                  <td className="p-3">{candle.close}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* عرض المخطط الذي يعكس قيم الشموع */}
        <CandlemyChart candles={candles} />
      </div>

      {/* القسم الثاني: محرر الشمعة مع أزرار التحكم */}
      <div>
        {selectedCandle && (
          <div className="bg-white rounded-xl shadow p-6">
            <AdminCandleEditor 
              candle={selectedCandle}
              onSave={updateCandle}
            />
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => adjustSelectedCandle(1)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                صعود
              </button>
              <button
                onClick={() => adjustSelectedCandle(-1)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                نزول
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
