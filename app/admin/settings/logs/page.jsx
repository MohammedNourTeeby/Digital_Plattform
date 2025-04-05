import SettingsCard from '@/components/SettingsCard'
export default function AuditLogs() {
    const logs = [
      { id: 1, date: '2024-03-20 14:30', user: 'admin', action: 'تعديل الإعدادات', status: 'ناجح' },
      { id: 2, date: '2024-03-19 09:15', user: 'manager', action: 'تسجيل دخول', status: 'فشل' }
    ];
  
    return (
      <SettingsCard title="سجل الأحداث">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-right">التاريخ</th>
                <th className="p-3 text-right">المستخدم</th>
                <th className="p-3 text-right">الإجراء</th>
                <th className="p-3 text-right">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id} className="border-t">
                  <td className="p-3">{log.date}</td>
                  <td className="p-3">{log.user}</td>
                  <td className="p-3">{log.action}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded ${log.status === 'ناجح' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SettingsCard>
    );
  }