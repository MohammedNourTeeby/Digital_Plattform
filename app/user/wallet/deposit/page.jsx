'use client'; // تأكد من وجود هذه السطر في بداية الملف

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DepositPage() {
  const router = useRouter();
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // معالجة الإيداع هنا
    router.push('/user/wallet');
  };

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">إيداع الأموال</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">المبلغ</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="أدخل المبلغ"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          تأكيد الإيداع
        </button>
      </form>
    </div>
  );
}