// PartnerAccount.jsx
import React from 'react';
import { FiShare2, FiCopy } from 'react-icons/fi';

const PartnerAccount = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 font-cairo rtl" dir="rtl">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* العنوان الرئيسي */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          حساب الشريك
        </h1>

        {/* قسم الأرباح */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg text-gray-600">ارباح 4% من إيرادات الشركة</span>
              <span className="text-2xl font-bold text-green-600">+10$</span>
            </div>
            <p className="text-gray-500 text-sm">لكل إحالة 10$</p>
          </div>
        </div>

        {/* رابط الإحالة */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">مشاركة رابط الإحالة</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg flex-1">
              eo-shortlify.com/987023287
            </span>
            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
              <FiCopy className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600">أو كود المرجع (٢): <span className="font-bold">987023287</span></p>
        </div>

        {/* تعليمات الدعوة */}
        <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">قم بدعوة أصدقائك</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                يجب على الأصدقاء التسجيل باستخدام الكود
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                يحصلون على مكافأة 120% بعد الإيداع الأول
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                يبدأون التداول لتحقيق الربح
              </p>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <FiShare2 className="w-5 h-5" />
            مشاركة الرابط الآن
          </button>
        </div>

        {/* قسم التذييل */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['الفصلية', 'أرباح', 'خطة', 'المساعدة'].map((item) => (
            <div key={item} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerAccount;