// RecentMatches.jsx
import React from 'react';

const RecentMatches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8 font-cairo rtl" dir="rtl">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 mb-4">
          الصفقات الأخيرة
        </h1>

        {/* البطاقة الرئيسية */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
          
          {/* العنوان الفرعي */}
          <h2 className="text-2xl font-semibold text-white mb-6">
            القائمة فارغة
          </h2>

          {/* قسم الدول */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all">
                <span className="text-white/80 text-lg">الدول</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecentMatches;