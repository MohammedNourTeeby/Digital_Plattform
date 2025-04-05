'use client';
import { useState } from 'react';

export default function TwoFactorAuth() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">المصادقة الثنائية (2FA)</h3>
          <p className="text-sm text-gray-500">طبقة حماية إضافية لحسابك</p>
        </div>
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            isEnabled ? 'bg-blue-600' : 'bg-gray-200'
          }`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isEnabled ? 'translate-x-6' : 'translate-x-1'
          }`} />
        </button>
      </div>
    </div>
  );
}