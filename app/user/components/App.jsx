// components/ApplicationsSection.jsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

const App= () => {
  return (
    <div className="bg-[#0A192F] min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">التطبيقات</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#1D9BF0"
          className="w-6 h-6 cursor-pointer"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </div>

      {/* Mobile Section */}
      <div className="bg-[#1D2B44] rounded-lg p-8 mb-8">
        <div className="flex justify-center mb-8">
          <Image
            src="/mobile-apps.png"
            alt="Mobile Apps"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-between mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-blue-500">100M+</h3>
            <p className="text-sm text-gray-300">أكثر من 100 مليون عملية تثبيت</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-blue-500">#1</h3>
            <p className="text-sm text-gray-300">أفضل تطبيق مالي في 47 دولة</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600">
            APK
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600">
            Google Play
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600">
            App Store
          </button>
        </div>
      </div>

      {/* Desktop Section */}
      <div className="bg-[#1D2B44] rounded-lg p-8">
        <div className="flex justify-center mb-8">
          <Image
            src="/desktop-apps.png"
            alt="Desktop Apps"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-between mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-blue-500">⚡</h3>
            <p className="text-sm text-gray-300">الوصول الفوري إلى التداول</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-blue-500">⚙️</h3>
            <p className="text-sm text-gray-300">أعلى أدائه</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-blue-500">📈</h3>
            <p className="text-sm text-gray-300">الأفضل لتحليل السوق</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600">
            Download for MacOS
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600">
            Download for Windows
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;