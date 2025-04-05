export default function PaymentSchedule({ schedule }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">تاريخ الدفعة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المبلغ</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الحالة</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((payment, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">${payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">
                    {new Date(payment.date) > new Date() ? 'مستقبلية' : 'مكتملة'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }