// components/TransactionTable.jsx
export default function TransactionTable({ data }) {
  // قيمة افتراضية إذا كانت البيانات غير معرّفة
  const transactions = data || [];
  
  return (
    <div className="overflow-x-auto">
      {transactions.length === 0 ? (
        <div className="text-center py-4 text-gray-500">
          لا توجد معاملات لعرضها
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المعرف</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">النوع</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المبلغ</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">التاريخ</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}