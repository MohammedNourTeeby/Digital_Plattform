export default function TradeHistory({ data }) {
    return (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">التاريخ</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">زوج التداول</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">النوع</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">السعر</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الكمية</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الحالة</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((trade) => (
            <tr key={trade.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{trade.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{trade.pair}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                trade.type === 'buy' ? 'text-green-600' : 'text-red-600'
              }`}>
                {trade.type === 'buy' ? 'شراء' : 'بيع'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{trade.price} USDT</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{trade.amount} BTC</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  trade.status === 'completed' ? 'bg-green-100 text-green-800' :
                  trade.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {trade.status === 'completed' ? 'مكتمل' : 
                   trade.status === 'pending' ? 'قيد الانتظار' : 'ملغى'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }