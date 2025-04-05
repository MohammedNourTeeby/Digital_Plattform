// app/admin/settings/SecuritySettings.jsx
'use client';

export default function SecuritySettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">إعدادات الأمان</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
          <div>
            <h3 className="font-medium">المصادقة الثنائية (2FA)</h3>
            <p className="text-sm text-gray-500">تفعيل الحماية الإضافية</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            تفعيل
          </button>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
          <div>
            <h3 className="font-medium">تاريخ تسجيلات الدخول</h3>
            <p className="text-sm text-gray-500">عرض جميع محاولات الدخول</p>
          </div>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            عرض
          </button>
        </div>
      </div>
    </div>
  );
}