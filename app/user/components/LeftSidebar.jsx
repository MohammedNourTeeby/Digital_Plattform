"use client";
import { useState } from 'react';
import { FiPackage, FiTrendingUp, FiUserPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const LeftSidebar = ({ isCollapsed, toggleCollapse }) => {
  const [activeItem, setActiveItem] = useState('الصفقات');

  const menuItems = [
    { name: 'الصفقات', icon: <FiPackage /> },
    { name: 'الرائج', icon: <FiTrendingUp /> },
    { name: 'الاجتماعية', icon: <FiUserPlus /> }
  ];

  return (
    <div 
      className={`h-screen bg-gray-900/80 backdrop-blur-sm text-white transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-20' : 'w-64'} 
        fixed top-0 left-0 z-50 shadow-xl`}
    >
      <div className="p-4 flex flex-col h-full">
        <button 
          onClick={toggleCollapse}
          className="mb-8 p-2 hover:bg-gray-800 rounded-full self-end transition-colors"
        >
          {isCollapsed ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
        </button>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-all
                ${activeItem === item.name ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'}
                ${isCollapsed ? 'justify-center' : 'justify-start'}`}
            >
              <span className={`text-xl ${!isCollapsed && 'mr-3'}`}>{item.icon}</span>
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </a>
          ))}
        </nav>

        <div className={`border-t border-gray-700 pt-4 ${isCollapsed ? 'px-2' : 'px-4'}`}>
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white">ユ</span>
            </div>
            {!isCollapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium">المستخدم</p>
                <p className="text-xs text-gray-400">المستوى: مبتدئ</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;