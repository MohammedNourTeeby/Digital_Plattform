'use client';
import { useState } from 'react';

export default function WithdrawPage() {
  const [formData, setFormData] = useState({
    amount: '',
    address: '',
    currency: 'BTC'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // معالجة السحب هنا
  };

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">سحب الأموال</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-6">
        <div>
          <label className="block mb-2">العملة</label>
          <select
            value={formData.currency}
            onChange={(e) => setFormData({...formData, currency: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">المبلغ</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            className="w-full p-2 border rounded"
            placeholder="0.00"
          />
          <p className="text-sm text-gray-500 mt-1">الحد الأدنى للسحب: 0.001 BTC</p>
        </div>

        <div>
          <label className="block mb-2">العنوان المستهدف</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            className="w-full p-2 border rounded"
            placeholder="أدخل عنوان المحفظة"
          />
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">تفاصيل السحب</h3>
          <div className="flex justify-between">
            <span>رسوم الشبكة:</span>
            <span>0.0001 BTC</span>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
        >
          تأكيد السحب
        </button>
      </form>
    </div>
  );
}