'use client';
import { useState, useEffect } from 'react';
import { getUsers, updateUser, addUser } from '@/data/users'; // استيراد الدوال من ملف البيانات

export default function UserForm({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'active',
    role: 'user'
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (user?.id) {
        // تحديث مستخدم موجود
        await updateUser(formData);
      } else {
        // إضافة مستخدم جديد
        await addUser(formData);
      }
      onSave(formData);
      onClose();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {user ? 'تعديل المستخدم' : 'إضافة مستخدم جديد'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          {/* حقول النموذج... */}
          <div className="mt-6 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}