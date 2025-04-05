'use client'; // أضف هذا السطر إذا كنت تستخدم Next.js 13+ مع دليل app/
import { useState } from 'react'; // أضف هذا الاستيراد
import ApiKeyModal from '@/components/ApiKeyModal';

export default function SecuritySettings() {
  const [keys, setKeys] = useState([
    { id: 1, name: 'Infura API Key', type: 'blockchain', lastUsed: '2024-03-20' },
    { id: 2, name: 'Database Key', type: 'database', lastUsed: '2024-03-19' }
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">المفاتيح النشطة</h3>
        <div className="space-y-4">
          {keys.map(key => (
            <div key={key.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <h4 className="font-medium">{key.name}</h4>
                <p className="text-sm text-gray-500">{key.type}</p>
              </div>
              <button 
                onClick={() => setKeys(keys.filter(k => k.id !== key.id))}
                className="text-red-600 hover:text-red-800"
              >
                إلغاء
              </button>
            </div>
          ))}
          
          <ApiKeyModal 
            onAddKey={(newKey) => setKeys([...keys, newKey])} 
          />
        </div>
      </div>
    </div>
  );
}