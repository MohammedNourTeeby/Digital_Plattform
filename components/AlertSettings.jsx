'use client';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function AlertSettings() {
  const [alerts, setAlerts] = useState({
    security: true,
    performance: true,
    errors: true,
    apiCalls: false
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Switch 
            checked={alerts.security}
            onCheckedChange={(val) => setAlerts({...alerts, security: val})}
          />
          <div>
            <Label>تنبيهات الأمان</Label>
            <p className="text-sm text-gray-500">تنبيه عند اكتشاف نشاط مشبوه</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Switch 
            checked={alerts.performance}
            onCheckedChange={(val) => setAlerts({...alerts, performance: val})}
          />
          <div>
            <Label>تنبيهات الأداء</Label>
            <p className="text-sm text-gray-500">تنبيه عند انخفاض أداء النظام</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Switch 
            checked={alerts.errors}
            onCheckedChange={(val) => setAlerts({...alerts, errors: val})}
          />
          <div>
            <Label>تنبيهات الأخطاء</Label>
            <p className="text-sm text-gray-500">تنبيه عند حدوث أخطاء حرجة</p>
          </div>
        </div>
      </div>
    </div>
  );
}