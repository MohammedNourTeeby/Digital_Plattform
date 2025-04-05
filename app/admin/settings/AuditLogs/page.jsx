// app/admin/settings/AuditLogs.jsx
'use client';

export default function AuditLogs() {
  const logs = [
    { id: 1, date: '2024-03-20 14:30', action: 'تعديل الإعدادات العامة', user: 'admin' },
    { id: 2, date: '2024-03-19 09:15', action: 'تسجيل دخول', user: 'manager' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">السجلات الأمنية</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">التاريخ</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الإجراء</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المستخدم</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {logs.map(log => (
              <tr key={log.id}>
                <td className="px-6 py-4 whitespace-nowrap">{log.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.action}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}