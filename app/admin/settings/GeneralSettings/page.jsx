// app/admin/settings/GeneralSettings.jsx
'use client';

export default function GeneralSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">الإعدادات العامة</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            اسم المنصة
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            defaultValue="منصة التداول"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            العملة الأساسية
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
            <option>USDT</option>
            <option>BTC</option>
            <option>ETH</option>
          </select>
        </div>
      </div>
    </div>
  );
}