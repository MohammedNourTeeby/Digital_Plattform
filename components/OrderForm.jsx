'use client'; // أضف هذا السطر في الأعلى

import { useState } from 'react'; // أضف هذا الاستيراد

export default function OrderForm({ type }) {
  const [order, setOrder] = useState({
    amount: '',
    price: '',
    total: ''
  });

  const calculateTotal = () => {
    if (order.amount && order.price) {
      return (parseFloat(order.amount) * parseFloat(order.price)).toFixed(2);
    }
    return '';
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block mb-1 text-sm">السعر (USDT)</label>
        <input
          type="number"
          value={order.price}
          onChange={(e) => setOrder({...order, price: e.target.value})}
          className="w-full p-2 border rounded"
          placeholder="0.00"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">الكمية (BTC)</label>
        <input
          type="number"
          value={order.amount}
          onChange={(e) => setOrder({...order, amount: e.target.value})}
          className="w-full p-2 border rounded"
          placeholder="0.00"
        />
      </div>

      <div className="p-3 bg-gray-50 rounded">
        <div className="flex justify-between mb-1">
          <span className="text-sm">الإجمالي:</span>
          <span className="font-medium">{calculateTotal()} USDT</span>
        </div>
      </div>

      <button
        type="submit"
        className={`w-full py-3 rounded text-white ${
          type === 'buy' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
        }`}
      >
        {type === 'buy' ? 'شراء BTC' : 'بيع BTC'}
      </button>
    </form>
  );
}