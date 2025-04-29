// EducationSection.jsx
import React from 'react';

const EducationSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8 font-cairo rtl" dir="rtl">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          التعليم
        </h1>

        {/* Recommendation Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">توصي به</h2>
          <div className="space-y-6">
            {/* Getting Started */}
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="text-xl font-medium text-gray-800 mb-2">كيف تبدأ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                الخطوات الأولى والاستراتيجيات البسيطة
              </p>
            </div>

            {/* Skills Development */}
            <div className="bg-emerald-50 p-4 rounded-xl">
              <h3 className="text-xl font-medium text-gray-800 mb-2">تطوير المهارات</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                التعافي و النمو
              </p>
            </div>

            {/* Advanced Strategies */}
            <div className="bg-purple-50 p-4 rounded-xl mt-6">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                استراتيجيات التداول المتقدمة
              </h3>
              <div className="flex items-center gap-2 text-blue-600 mt-3">
                <span className="text-sm">اكتشف المزيد</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-4 mt-10">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;