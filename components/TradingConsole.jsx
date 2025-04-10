import { useState } from 'react';

export default function TradingConsole() {
  const [order, setOrder] = useState({
    type: 'market',
    side: 'buy',
    amount: '',
    price: ''
  });

  const executeTrade = () => {
    // محاكاة تنفيذ الصفقة
    console.log('Executing trade:', order);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">وحدة التداول</h2>
      
      <div className="flex gap-4">
        <button
          className={`flex-1 py-2 rounded ${order.side === 'buy' ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
          onClick={() => setOrder({...order, side: 'buy'})}
        >
          شراء
        </button>
        <button
          className={`flex-1 py-2 rounded ${order.side === 'sell' ? 'bg-red-500 text-white' : 'bg-gray-100'}`}
          onClick={() => setOrder({...order, side: 'sell'})}
        >
          بيع
        </button>
      </div>

      <div>
        <label>الكمية</label>
        <input
          type="number"
          value={order.amount}
          onChange={e => setOrder({...order, amount: e.target.value})}
          className="w-full p-2 border rounded"
          placeholder="0.00"
        />
      </div>

      {order.type === 'limit' && (
        <div>
          <label>السعر</label>
          <input
            type="number"
            value={order.price}
            onChange={e => setOrder({...order, price: e.target.value})}
            className="w-full p-2 border rounded"
            placeholder="0.00"
          />
        </div>
      )}

      <button
        onClick={executeTrade}
        className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
      >
        تنفيذ {order.side === 'buy' ? 'شراء' : 'بيع'}
      </button>
    </div>
  );
}