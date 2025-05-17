"use client";
import { useState, useEffect, useRef } from "react";
import {
  FiPackage,
  FiTrendingUp,
  FiUserPlus,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import dynamic from "next/dynamic";

const RecentMatches = dynamic(() => import("./RecentMatches"));
const TrendingPairs = dynamic(() => import("./TrendingPairs"));
const SocialTrading = dynamic(() => import("./SocialTrading"));
const ReferralProgram = dynamic(() => import("./ReferralProgram"));
const InventorySection  = dynamic(() => import("./InventorySection"));
const FinancialInterface  = dynamic(() => import("./FinancialInterface"));

const LeftSidebar = ({ isCollapsed, toggleCollapse }) => {
  const [activePanel, setActivePanel] = useState(null);
  const [panelWidth, setPanelWidth] = useState("0px");
  const sidebarRef = useRef(null);

  const menuItems = [
    {
      name: "الصفقات",
      icon: <FiPackage />,
      panel: "recentMatches",
    },
    { name: "المالية", icon: <FiTrendingUp />, panel: "finicial" },
    { name: "الرائج", icon: <FiTrendingUp />, panel: "tradel" },
    { name: "الاجتماعية", icon: <FiUserPlus />, panel: "social" },
    { name: "الإحالة ", icon: <FiUserPlus />, panel: "Referral" },
    { name: "المخزون ", icon: <FiUserPlus />, panel: "Inventory" },
  ];

  const togglePanel = (panelType) => {
    setActivePanel((prev) => (prev === panelType ? null : panelType));
    setPanelWidth((prev) => (prev === "0px" ? "min(600px, 90vw)" : "0px"));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActivePanel(null);
        setPanelWidth("0px");
      }
    };

    activePanel && document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePanel]);

  const getPanelContent = () => {
    switch (activePanel) {
      case "recentMatches":
        return <RecentMatches className="w-full" />;
      case "tradel":
        return <TrendingPairs className="w-full" />;
      case "social":
        return <SocialTrading className="w-full" />;
     case "Referral":
        return <ReferralProgram  className="w-full" />;
        case "Inventory":
        return <InventorySection   className="w-full" />;
         case "finicial":
        return <FinancialInterface   className="w-full" />;
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={`h-screen bg-gray-900/90 backdrop-blur-sm text-white transition-all duration-300
        fixed top-0 left-0 z-50 shadow-xl flex flex-row-reverse`} // تمت إضافة flex-row-reverse هنا
      dir="rtl"
    >
      {/* القائمة الرئيسية */}
      <div className="p-2 flex flex-col h-full w-16 border-l border-gray-700">
        {" "}
        {/* تغيير border-r إلى border-l */}
        <button
          onClick={toggleCollapse}
          className="mb-4 p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          {isCollapsed ? (
            <FiChevronRight size={24} />
          ) : (
            <FiChevronLeft size={24} />
          )}
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
                  ${
                    activePanel === item.panel
                      ? "bg-blue-600"
                      : "hover:bg-gray-800"
                  }`}
              >
                {item.icon}
              </button>

              {/* التلميح على اليمين */}
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

      {/* اللوحة الجانبية (ظهرت الآن على اليسار) */}
      <div
        className="bg-gray-800/90 backdrop-blur-sm border-r border-gray-700 overflow-y-auto transition-all duration-300"
        style={{
          width: panelWidth,
          minWidth: panelWidth,
          maxHeight: "100vh",
          marginRight: "auto", // إضافة هذه الخاصية
        }}
      >
        <div className="p-6 w-full h-full">{getPanelContent()}</div>
      </div>
    </div>
  );
};

export default LeftSidebar;
