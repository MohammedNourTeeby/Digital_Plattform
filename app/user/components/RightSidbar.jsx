"use client"
import { useState } from 'react';
import { FiHome, FiDollarSign, FiFileText, FiUsers, FiSettings, FiChevronRight, FiChevronLeft ,  FiBarChart,    // للتداول
    FiAward,       // للانجازات
    FiGrid,        // للتطبيقات
    FiBook,        // للتعليم
    FiHelpCircle,  // للمساعدة
    FiDatabase } from 'react-icons/fi';
    import { FaHandshake } from 'react-icons/fa';
const RightSidbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('الرئيسية');

  const menuItems = [
    { name: 'الرئيسية', icon: <FiHome /> },
    { name: 'التداول', icon: <FiBarChart /> },
    { name: 'المهارة المالية', icon: <FiDollarSign /> },
    { name: 'الملف التخصصي', icon: <FiFileText /> },
    { name: 'الانجازات', icon: <FiAward /> },
    { name: 'التطبيقات', icon: <FiGrid /> },
    { name: 'التعليم', icon: <FiBook /> },
    { name: 'مساعدة', icon: <FiHelpCircle /> },
    { name: 'كن شريكا', icon: <FaHandshake /> },
    { name: 'المعارف', icon: <FiDatabase /> },

    { name: 'المستخدمين', icon: <FiUsers /> },
    { name: 'الإعدادات', icon: <FiSettings /> },
  ];

  return (
    <div 
      className={`h-screen bg-gray-900/80 backdrop-blur-sm text-white transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-20' : 'w-64'} 
        fixed top-0 right-0 z-50 shadow-xl`}
      dir="rtl"
    >
      <div className="p-4 flex flex-col h-full">
        {/* زر التجميع */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mb-8 p-2 hover:bg-gray-800 rounded-full self-start transition-colors"
        >
          {isCollapsed ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>

        {/* عناصر القائمة */}
        <nav className="flex-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-all
                ${activeItem === item.name ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'}
                ${isCollapsed ? 'justify-center' : 'justify-start'}`}
            >
              <span className={`text-xl ${!isCollapsed && 'ml-3'}`}>{item.icon}</span>
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </a>
          ))}
        </nav>

        {/* قسم المستخدم */}
        <div className={`border-t border-gray-700 pt-4 ${isCollapsed ? 'px-2' : 'px-4'}`}>
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white">ユ</span>
            </div>
            {!isCollapsed && (
              <div className="mr-3">
                <p className="text-sm font-medium">صاحبة الحساب</p>
                <p className="text-xs text-gray-400">المستوى: مبتدئ</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidbar;