'use client';

import { useState, useEffect } from 'react';

const FinancialInterface = () => {
  // حالة التبويب النشط
  const [activeTab, setActiveTab] = useState('deposit');
  // حالة طريقة الدفع المحددة
  const [selectedMethod, setSelectedMethod] = useState(null);
  // حالة مبلغ الإيداع
  const [depositAmount, setDepositAmount] = useState('');
  // حالة مبلغ السحب
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  // حالة الرسائل المؤقتة
  const [message, setMessage] = useState('');

  // بيانات وهمية لطرق الدفع
  const paymentMethods = [
    { id: 1, name: 'Visa', type: 'card', logo: '💳' },
    { id: 2, name: 'Mastercard', type: 'card', logo: '💳' },
    { id: 3, name: 'PayPal', type: 'e-wallet', logo: '📲' },
    { id: 4, name: 'Bitcoin', type: 'crypto', logo: '₿' },
    { id: 5, name: 'Ethereum', type: 'crypto', logo: 'Ξ' },
  ];

  // بيانات وهمية لسجل المعاملات
  const [transactions] = useState([
    {
      id: 1,
      type: 'deposit',
      amount: 500,
      date: '2024-03-15',
      status: 'completed',
      method: 'Visa'
    },
    {
      id: 2,
      type: 'withdrawal',
      amount: 200,
      date: '2024-03-14',
      status: 'pending',
      method: 'Bitcoin'
    },
    // يمكن إضافة المزيد من المعاملات هنا
  ]);

  // إدارة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('جاري معالجة طلبك...');
    
    // محاكاة اتصال API
    setTimeout(() => {
      setMessage('تمت العملية بنجاح!');
      setDepositAmount('');
      setWithdrawalAmount('');
      setSelectedMethod(null);
    }, 2000);
  };

  // إخفاء الرسالة بعد 3 ثواني
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-100">
      {/* أزرار التبويب */}
      <div className="flex gap-4 mb-8 border-b border-gray-700">
        <button
          onClick={() => setActiveTab('deposit')}
          className={`pb-2 px-4 ${activeTab === 'deposit' ? 'border-b-2 border-blue-500' : ''}`}
        >
          الإيداع
        </button>
        <button
          onClick={() => setActiveTab('withdrawal')}
          className={`pb-2 px-4 ${activeTab === 'withdrawal' ? 'border-b-2 border-blue-500' : ''}`}
        >
          السحب
        </button>
      </div>

      {/* رسائل النظام */}
      {message && (
        <div className="mb-4 p-3 bg-blue-900 text-blue-300 rounded-lg">
          {message}
        </div>
      )}

      {/* محتوى التبويب النشط */}
      {activeTab === 'deposit' ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">اختر طريقة الدفع:</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors
                    ${selectedMethod === method.id ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700'}`}
                >
                  <div className="text-2xl">{method.logo}</div>
                  <div>{method.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2">المبلغ:</label>
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg"
              placeholder="أدخل المبلغ"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            تأكيد الإيداع
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">اختر طريقة السحب:</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {paymentMethods.filter(m => m.type !== 'card').map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors
                    ${selectedMethod === method.id ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700'}`}
                >
                  <div className="text-2xl">{method.logo}</div>
                  <div>{method.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2">المبلغ:</label>
            <input
              type="number"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg"
              placeholder="أدخل المبلغ"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            تأكيد السحب
          </button>
        </form>
      )}

      {/* سجل المعاملات */}
      <div className="mt-12">
        <h3 className="text-xl mb-4">سجل المعاملات</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 text-right">التاريخ</th>
                <th className="p-3 text-right">النوع</th>
                <th className="p-3 text-right">المبلغ</th>
                <th className="p-3 text-right">الحالة</th>
                <th className="p-3 text-right">الطريقة</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-700">
                  <td className="p-3">{transaction.date}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded ${transaction.type === 'deposit' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {transaction.type === 'deposit' ? 'إيداع' : 'سحب'}
                    </span>
                  </td>
                  <td className="p-3">${transaction.amount}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded ${
                      transaction.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      transaction.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="p-3">{transaction.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinancialInterface;