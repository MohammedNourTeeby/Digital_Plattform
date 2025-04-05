import Link from 'next/link';

export default function UserTable({ users, onRoleChange }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الاسم</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">البريد الإلكتروني</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الحالة</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الرصيد</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الدور</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الإجراءات</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/admin/users/${user.id}`} className="text-blue-600 hover:underline">
                  {user.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'نشط' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">${user.balance.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select 
                  value={user.role}
                  onChange={(e) => onRoleChange(user.id, e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="عادي">عادي</option>
                  <option value="VIP">VIP</option>
                  <option value="محظور">محظور</option>
                </select>
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