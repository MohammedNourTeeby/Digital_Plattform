export default function SubscriptionList({ subscriptions }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المستخدم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">تاريخ البدء</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الحالة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">إجمالي الدفعات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscriptions.map((sub) => (
              <tr key={sub.id}>
                <td className="px-6 py-4 whitespace-nowrap">المستخدم #{sub.userId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sub.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${sub.status === 'نشط' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {sub.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${sub.payments.reduce((sum, p) => sum + p.amount, 0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }