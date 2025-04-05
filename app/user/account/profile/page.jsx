'use client';
import { useState } from 'react';
import { userProfile } from '../../../../data/userDataa'; // تم التصحيح هنا

export default function ProfilePage() {
  const [formData, setFormData] = useState(userProfile);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا سيتم إرسال البيانات في التطبيق الحقيقي
  };

  return (
    <div className="max-w-2xl">
              <h2 className="text-xl font-bold mb-6">الملف الشخصي</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center gap-6 mb-6">
          <img 
            src={formData.avatar} 
            className="w-20 h-20 rounded-full object-cover"
            alt="Profile"
          />
          <div>
            <label className="block mb-2 text-sm">تغيير الصورة</label>
            <input 
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">الاسم الكامل</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-2">البريد الإلكتروني</label>
          <input
            type="email"
            value={formData.email}
            className="w-full p-2 border rounded bg-gray-100"
            disabled
          />
        </div>

        <button 
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          حفظ التغييرات
        </button>
      </form>
    </div>
  );
}