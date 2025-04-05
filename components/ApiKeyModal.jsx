'use client'; // هذا السطر ضروري في Next.js 13+
import { useState } from 'react'; // هذا الاستيراد ضروري

export default function ApiKeyModal({ onAddKey }) {
  const [isOpen, setIsOpen] = useState(false);
  const [keyName, setKeyName] = useState('');
  const [keyType, setKeyType] = useState('blockchain');

  const handleSubmit = () => {
    const newKey = {
      id: Date.now(),
      name: keyName,
      type: keyType,
      lastUsed: new Date().toLocaleDateString()
    };
    onAddKey(newKey);
    setIsOpen(false);
    setKeyName('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        إضافة مفتاح جديد
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">إنشاء مفتاح API</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="اسم المفتاح"
                value={keyName}
                onChange={(e) => setKeyName(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <select 
                value={keyType}
                onChange={(e) => setKeyType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="blockchain">بلوكتشين</option>
                <option value="database">قاعدة البيانات</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  إلغاء
                </button>
                <button 
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  حفظ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}