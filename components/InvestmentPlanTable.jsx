import Link from 'next/link';

export default function InvestmentPlanTable({ plans }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">اسم الخطة</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الحد الأدنى</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المدة (أشهر)</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">نسبة الربح</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المشتركين</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الحالة</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الإجراءات</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/admin/plans/${plan.id}`} className="text-blue-600 hover:underline">
                  {plan.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">${plan.minAmount.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{plan.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap">{plan.profitRate}%</td>
              <td className="px-6 py-4 whitespace-nowrap">{plan.subscribers}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-full text-xs ${plan.status === 'نشطة' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {plan.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-600 hover:text-blue-900 mr-2">تعديل</button>
                <button className="text-red-600 hover:text-red-900">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}