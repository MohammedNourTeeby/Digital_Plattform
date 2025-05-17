import { useState, useEffect } from 'react';

const SocialTradingInterface = () => {
  // بيانات وهمية
  const [trades, setTrades] = useState([
    { id: 1, username: 'TraderX', origin: 'US', type: 'buy', amount: 2500, asset: 'BTC/USD' },
    { id: 2, username: 'CryptoMaster', origin: 'UK', type: 'sell', amount: 1500, asset: 'ETH/USD' },
    // ... المزيد من الصفقات
  ]);

  const [traders, setTraders] = useState([
    { id: 1, name: 'ProTrader', profit: 45.2, copiers: 1287, risk: 'Medium', avatar: 'PT' },
    { id: 2, name: 'BitcoinKing', profit: -12.4, copiers: 645, risk: 'High', avatar: 'BK' },
    // ... المزيد من المتداولين
  ]);

  const [copiedTraders, setCopiedTraders] = useState([]);
  const [selectedTrader, setSelectedTrader] = useState(null);
  const [activeTab, setActiveTab] = useState('feed');

  // محاكاة التحديثات في الوقت الفعلي
  useEffect(() => {
    const interval = setInterval(() => {
      // تحديث البيانات الوهمية هنا
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // معالجة نسخ المتداول
  const handleCopyTrader = (trader) => {
    if (!copiedTraders.some(t => t.id === trader.id)) {
      setCopiedTraders([...copiedTraders, trader]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* التنقل بين الأقسام */}
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('feed')}
          className={`px-4 py-2 rounded ${activeTab === 'feed' ? 'bg-blue-600' : 'bg-gray-800'}`}
        >
          موجز الصفقات
        </button>
        <button 
          onClick={() => setActiveTab('top')}
          className={`px-4 py-2 rounded ${activeTab === 'top' ? 'bg-blue-600' : 'bg-gray-800'}`}
        >
          كبار المتداولين
        </button>
        <button 
          onClick={() => setActiveTab('copied')}
          className={`px-4 py-2 rounded ${activeTab === 'copied' ? 'bg-blue-600' : 'bg-gray-800'}`}
        >
          المتداولون المنسوخون
        </button>
      </div>

      {activeTab === 'feed' && (
        <div className="grid gap-4 mb-8">
          <h2 className="text-2xl font-bold">موجز الصفقات الاجتماعية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trades.map(trade => (
              <div key={trade.id} className="bg-gray-800 p-4 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{trade.username}</h3>
                    <p className="text-gray-400 text-sm">{trade.origin}</p>
                  </div>
                  <span className={`px-2 py-1 rounded ${trade.type === 'buy' ? 'bg-green-600' : 'bg-red-600'}`}>
                    {trade.type === 'buy' ? 'شراء' : 'بيع'}
                  </span>
                </div>
                <p className="text-lg">${trade.amount.toLocaleString()}</p>
                <p className="text-gray-400 text-sm">{trade.asset}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'top' && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">كبار المتداولين</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="p-3 text-left">الترتيب</th>
                  <th className="p-3 text-left">المتداول</th>
                  <th className="p-3 text-left">الأداء</th>
                  <th className="p-3 text-left">المتابعون</th>
                  <th className="p-3 text-left">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {traders.map((trader, index) => (
                  <tr key={trader.id} className="border-b border-gray-700">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                          {trader.avatar}
                        </div>
                        {trader.name}
                      </div>
                    </td>
                    <td className={`p-3 ${trader.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {trader.profit}%
                    </td>
                    <td className="p-3">{trader.copiers.toLocaleString()}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleCopyTrader(trader)}
                        className="bg-blue-600 px-3 py-1 rounded"
                      >
                        نسخ
                      </button>
                      <button 
                        onClick={() => setSelectedTrader(trader)}
                        className="ml-2 bg-gray-700 px-3 py-1 rounded"
                      >
                        الملف الشخصي
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedTrader && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">الملف الشخصي لـ {selectedTrader.name}</h2>
            
            {/* إحصائيات الأداء */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400">إجمالي الربح</p>
                <p className={`text-xl ${selectedTrader.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {selectedTrader.profit}%
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400">عدد المتابعين</p>
                <p className="text-xl">{selectedTrader.copiers.toLocaleString()}</p>
              </div>
            </div>

            {/* الرسم البياني (مثال) */}
            <div className="bg-gray-700 h-48 rounded mb-6 flex items-center justify-center">
              [رسم بياني للأداء]
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleCopyTrader(selectedTrader)}
                className="bg-blue-600 px-4 py-2 rounded"
              >
                نسخ المتداول
              </button>
              <button
                onClick={() => setSelectedTrader(null)}
                className="bg-gray-700 px-4 py-2 rounded"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'copied' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">إدارة النسخ</h2>
          {copiedTraders.length === 0 ? (
            <p className="text-gray-400">لا يوجد متداولون منسوخون</p>
          ) : (
            <div className="grid gap-4">
              {copiedTraders.map(trader => (
                <div key={trader.id} className="bg-gray-800 p-4 rounded flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                      {trader.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold">{trader.name}</h3>
                      <p className={`text-sm ${trader.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {trader.profit}%
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setCopiedTraders(copiedTraders.filter(t => t.id !== trader.id))}
                    className="bg-red-600 px-3 py-1 rounded"
                  >
                    إيقاف النسخ
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SocialTradingInterface;