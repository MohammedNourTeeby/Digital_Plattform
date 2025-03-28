// components/LeftSidebar.jsx
"use client"
import React, { useState, useEffect } from "react";
import { 
  FaChevronDown,
  FaSignInAlt,
  FaBolt,
  FaBell,
  FaCamera,
  FaMicrophone,
  FaCog,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import Image from "next/image";

// نظام الألوان
const colors = {
  primary: "bg-slate-800",
  hover: "bg-slate-700/50",
  active: "bg-blue-600",
  text: "text-slate-100",
  icon: "text-slate-400",
  border: "border-slate-600"
};

const middleMenuItems = [
  { 
    label: "تسجيل", 
    icon: <FaSignInAlt aria-hidden="true" />,
    ariaLabel: "تسجيل الدخول"
  },
  { 
    label: "دفع", 
    icon: <FaBolt aria-hidden="true" />,
    ariaLabel: "نظام الدفع"
  },
  { 
    label: "الإشعارات", 
    icon: <FaBell aria-hidden="true" />,
    ariaLabel: "الإشعارات",
    badge: 2
  },
];

const bottomIcons = [
  { 
    icon: <FaCamera aria-hidden="true" />, 
    label: "الكاميرا",
    ariaLabel: "إعدادات الكاميرا"
  },
  { 
    icon: <FaMicrophone aria-hidden="true" />, 
    label: "الميكروفون",
    ariaLabel: "إعدادات الميكروفون"
  },
  { 
    icon: <FaCog aria-hidden="true" />, 
    label: "الإعدادات",
    ariaLabel: "الإعدادات العامة"
  },
];

const LeftSidebar = ({ isOpen, setIsOpen }) => {
  const [activeItem, setActiveItem] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile, setIsOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-3 rounded-lg bg-slate-800/90 backdrop-blur-sm 
          text-white shadow-xl hover:bg-slate-700 transition-all"
          aria-label="فتح/إغلاق القائمة الجانبية"
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: isMobile ? -300 : 0 }}
            animate={{ x: 0 }}
            exit={{ x: isMobile ? -300 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={clsx(
              "fixed md:relative flex flex-col h-screen",
              "text-white shadow-2xl z-40 md:w-60 w-52 p-3",
              isMobile && "inset-y-0 left-0",
              colors.primary,
              "border-r",
              colors.border
            )}
          >
            <motion.div 
              className="flex flex-col items-center justify-center mb-6 py-4 border-b"
              style={{ borderColor: 'inherit' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="relative w-16 h-16 mb-3">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-2 border-white/20"
                  priority
                />
              </div>
              <button 
                className="text-sm hover:text-white transition-colors"
                aria-label="عرض المزيد"
              >
                <FaChevronDown className={clsx(colors.icon, "hover:text-white")} />
              </button>
            </motion.div>

            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-1">
                {middleMenuItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => setActiveItem(idx)}
                      className={clsx(
                        "w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg",
                        "transition-all duration-200 hover:bg-white/5",
                        activeItem === idx ? colors.active : "",
                        colors.text,
                        "group"
                      )}
                      aria-label={item.ariaLabel}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-lg transition-colors ${activeItem === idx ? 'text-white' : colors.icon} group-hover:text-white`}>
                          {item.icon}
                        </span>
                        <span className="text-sm font-medium font-[Tajawal]">
                          {item.label}
                        </span>
                      </div>
                      {item.badge && (
                        <span className="bg-red-500/90 text-[0.65rem] px-1.5 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div 
              className="mt-6 space-y-1 border-t pt-3"
              style={{ borderColor: 'inherit' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {bottomIcons.map((item, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  className={clsx(
                    "w-full flex items-center gap-2 px-3 py-2 rounded-lg",
                    "transition-all duration-200 hover:bg-white/5",
                    colors.text
                  )}
                  aria-label={item.ariaLabel}
                >
                  <span className={`text-lg ${colors.icon} group-hover:text-white`}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium font-[Tajawal]">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeftSidebar;