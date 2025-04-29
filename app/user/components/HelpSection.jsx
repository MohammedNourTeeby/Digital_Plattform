// HelpSection.jsx
import React from 'react';

const HelpSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-cairo rtl" dir="rtl">
      {/* Main Container */}
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          مساعدة <span className="text-blue-600">SULORT</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">24/7 نحن هنا لمساعدتك</p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            الفتح الدرشة
          </button>
          <a 
            href="mailto:help@eo.support" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors shadow-md"
          >
            بريد إلكتروني
          </a>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 my-8 w-20 mx-auto"></div>

        {/* Contact Info */}
        <div className="space-y-3 text-gray-700 mb-8">
          <p className="font-medium">مرحلة</p>
          <p className="text-lg">Mohammed nour Teeby</p>
          <p className="text-2xl font-bold tracking-wide">987-023-287</p>
          <p className="text-blue-600 font-medium">DEMO</p>
        </div>

        {/* Email Link */}
        <div className="mt-12">
          <a 
            href="mailto:help@eo.support" 
            className="text-blue-600 hover:text-blue-800 transition-colors text-lg underline underline-offset-4"
          >
            help@eo.support
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;