// components/RightSidebar.jsx
"use client"
import React, { useEffect } from "react";
import { 
  FaSignInAlt,
  FaBalanceScale,
  FaUser,
  FaBell,
  FaTasks,
  FaTachometerAlt,
  FaWallet,
  FaHeart,
  FaHandshake,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

const RightSidebar = ({ isOpen, setIsOpen }) => {
  const [activeItem, setActiveItem] = React.useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile, setIsOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const colors = {
    primary: "bg-slate-800",
    hover: "bg-slate-700/50",
    active: "bg-blue-600",
    text: "text-slate-100",
    icon: "text-slate-400",
    border: "border-slate-600"
  };

  const menuItems = [
    { label: "تسجيل", icon: <FaSignInAlt />, ariaLabel: "تسجيل الدخول" },
    { label: "الموازنة", icon: <FaBalanceScale />, ariaLabel: "الموازنة" },
    { label: "الملف الشخصي", icon: <FaUser />, ariaLabel: "الملف الشخصي" },
    { label: "الإشعارات", icon: <FaBell />, ariaLabel: "الإشعارات", badge: 3 },
    { label: "العمليات", icon: <FaTasks />, ariaLabel: "العمليات" },
    { label: "لوحة التحكم", icon: <FaTachometerAlt />, ariaLabel: "لوحة التحكم" },
    { label: "المحفظة", icon: <FaWallet />, ariaLabel: "المحفظة" },
    { label: "عن الشركة", icon: <FaHeart />, ariaLabel: "عن الشركة" },
    { label: "شراكات", icon: <FaHandshake />, ariaLabel: "شراكات" },
  ];

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 right-4 z-50 p-3 rounded-lg bg-slate-800/90 backdrop-blur-sm 
          text-white shadow-xl hover:bg-slate-700 transition-all"
          aria-label="فتح/إغلاق القائمة اليمنى"
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: isMobile ? 300 : 0 }}
            animate={{ x: 0 }}
            exit={{ x: isMobile ? 300 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={clsx(
              "fixed top-0 right-0 h-screen",
              "transform transition-transform duration-300",
              "w-52 md:w-60 bg-slate-800 border-l border-slate-600",
              "text-white shadow-xl z-30 p-3"
            )}
          >
            {/* محتوى الشريط الجانبي الأيمن */}
            <header className="mb-6 px-2 py-4 border-b border-slate-600">
              <h1 className="text-xl font-bold text-center font-[Tajawal]">
                الإعدادات
              </h1>
            </header>

            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => setActiveItem(index)}
                      className={clsx(
                        "w-full flex items-center gap-2 px-3 py-2.5 rounded-lg",
                        "transition-all duration-200",
                        activeItem === index ? colors.active : "hover:bg-slate-700/50",
                        colors.text
                      )}
                      aria-label={item.ariaLabel}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-[Tajawal]">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default RightSidebar;