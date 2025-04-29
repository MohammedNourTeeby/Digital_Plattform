'use client';
import { useState, useEffect, useRef } from 'react';
import { FiHome, FiDollarSign, FiFileText, FiUsers, FiSettings, FiChevronRight, FiChevronLeft, FiBarChart, FiAward, FiGrid, FiBook, FiHelpCircle, FiDatabase, FiUser } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const FinanceResources = dynamic(() => import('./FinanceResources'));
const Profile = dynamic(() => import('../account/profile/page'));
const Kuc = dynamic(() => import('../account/kyc/page'));
const App = dynamic(() => import('./App'));
const EducationSection = dynamic(() => import('./EducationSection'));
const HelpSection = dynamic(() => import('./HelpSection'));
const PartnerAccount = dynamic(() => import('./PartnerAccount'));
const BattlesComponent = dynamic(() => import('./BattlesComponent'));

const RightSidebar = ({ isCollapsed, toggleCollapse }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [activePanel, setActivePanel] = useState(null);
  const [panelWidth, setPanelWidth] = useState('0px');
  const sidebarRef = useRef(null);

  const menuItems = [
    { name: 'الرئيسية', icon: <FiHome />, action: () => window.location.href = '/' },
    { name: 'التداول', icon: <FiBarChart />, action: () => {} },
    { name: 'المهارة المالية', icon: <FiDollarSign />, panel: 'finance' },
    { name: 'الملف الشخصي', icon: <FiUser />, panel: 'profile' },
    { name: 'الانجازات', icon: <FiAward />, panel: 'achievements' },
    { name: 'التطبيقات', icon: <FiGrid />, panel: 'app' },
    { name: 'التعليم', icon: <FiBook />, panel: 'Education'  },
    { name: 'مساعدة', icon: <FiHelpCircle />, panel: 'help' },
    { name: 'كن شريكا', icon: <FaHandshake />, panel: 'Partner' },
    { name: 'المعارك', icon: <FiDatabase />, panel: 'Battles'},
    { name: 'المستخدمين', icon: <FiUsers />, action: () => {} },
    { name: 'الإعدادات', icon: <FiSettings />, action: () => {} },
  ];

  const togglePanel = (panelType) => {
    if (activePanel === panelType) {
      setActivePanel(null);
      setPanelWidth('0px');
    } else {
      setActivePanel(panelType);
      setPanelWidth('min(600px, 90vw)'); // عرض متجاوب مع حد أقصى 600px
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActivePanel(null);
        setPanelWidth('0px');
      }
    };

    if (activePanel) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePanel]);

  const getPanelContent = () => {
    switch (activePanel) {
      case 'finance':
        return <FinanceResources className="w-full" />;
      case 'profile':
        return <Profile className="w-full" />;
      case 'achievements':
        return <Kuc className="w-full" />;
        case 'app':
        return <App className="w-full" />;
        case 'Education':
        return <EducationSection className="w-full" />;
        case 'help':
        return <HelpSection className="w-full" />;
        case 'Partner':
        return <PartnerAccount className="w-full" />;
        case 'Battles':
          return <BattlesComponent className="w-full" />;
      default:
        return null;
    }
  };

  return (
    <div 
      ref={sidebarRef}
      className={`h-screen bg-gray-900/90 backdrop-blur-sm text-white transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'} 
        fixed top-0 right-0 z-50 shadow-xl flex`}
      dir="rtl"
    >
      {/* القائمة الرئيسية */}
      <div className="p-2 flex flex-col h-full w-16 border-l border-gray-700">
        <button 
          onClick={toggleCollapse}
          className="mb-4 p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          {isCollapsed ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <div 
              key={item.name}
              className="relative group"
              onClick={() => item.panel && togglePanel(item.panel)}
            >
              <button
                className={`w-full p-3 rounded-lg flex items-center justify-center
                  ${activePanel === item.panel ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              >
                {item.icon}
              </button>
              
              <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-800 px-3 py-2 rounded-lg text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.name}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-gray-700 pt-4 pb-2">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mx-auto">
            <span className="text-white">ユ</span>
          </div>
        </div>
      </div>

      {/* اللوحة الجانبية القابلة للتوسيع */}
      <div 
        className="bg-gray-800/90 backdrop-blur-sm border-l border-gray-700 overflow-y-auto transition-all duration-300"
        style={{ 
          width: panelWidth,
          minWidth: panelWidth,
          maxHeight: '100vh',
        }}
      >
        <div className="p-6 w-full h-full">
          {getPanelContent()}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;