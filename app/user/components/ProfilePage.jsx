// ProfilePage.js
import { useState } from 'react';

const ProfilePage = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold">الملف الشخصي</h2>
        <button className="p-2 hover:bg-gray-800 rounded-full">
          {/* أضف أيقونة السهم */}
        </button>
      </div>

      <div className="flex items-center mb-8">
        <img 
          src="https://via.placeholder.com/60x60" 
          alt="Avatar" 
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="text-sm mb-2">مرحبا،</p>
          <h3 className="text-lg font-bold">Mohammed nour Teeby</h3>
          <span className="bg-orange-500 text-xs px-2 py-1 rounded">DEMO</span>
        </div>
        <button className="p-2 hover:bg-gray-800 rounded-full ml-auto">
          {/* أضف أيقونة القلم */}
        </button>
      </div>

      <div className="mb-8">
        <h4 className="text-sm mb-2">معلومات الحساب</h4>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <p className="text-sm mb-2"><strong>الرقم الشخصي:</strong> 987-023-287</p>
          <p className="text-sm mb-2"><strong>بريد إلكتروني:</strong> mohammednourteeby@gmail.com</p>
          <p className="text-sm"><strong>البلد:</strong> SY</p>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-sm mb-2">إعدادات البريد الإلكتروني الترويجي</h4>
        <div className="bg-gray-800 p-4 rounded-lg flex items-center">
          <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
          <p className="text-sm">تلقي رسائل البريد الإلكتروني الترويجية</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;