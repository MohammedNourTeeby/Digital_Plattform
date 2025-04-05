import { useState } from 'react';

export default function TradingControls() {
  const [settings, setSettings] = useState({
    autoMatching: true,
    priceDeviation: 2,
    maxSpread: 100
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">ضوابط التداول</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.autoMatching}
            onChange={(e) => setSettings({...settings, autoMatching: e.target.checked})}
          />
          <label>المطابقة التلقائية للصفقات</label>
        </div>

        <div>
          <label className="block text-sm mb-1">الانحراف السعري المسموح (%)</label>
          <input
            type="number"
            value={settings.priceDeviation}
            onChange={(e) => setSettings({...settings, priceDeviation: e.target.value})}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">الحد الأقصى للسبريد (نقطة)</label>
          <input
            type="number"
            value={settings.maxSpread}
            onChange={(e) => setSettings({...settings, maxSpread: e.target.value})}
            className="border rounded p-2 w-full"
          />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          حفظ الإعدادات
        </button>
      </div>
    </div>
  );
}