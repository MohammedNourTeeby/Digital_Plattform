'use client';
import { createContext, useContext, useState, Children, cloneElement } from 'react'; // أضفنا الاستيرادات المطلوبة

const TabContext = createContext();

export const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">{children}</div>
    </TabContext.Provider>
  );
};

export const TabsList = ({ children }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  
  return (
    <div className="flex gap-2 mb-4">
      {Children.map(children, (child) => 
        cloneElement(child, { 
          isActive: activeTab === child.props.value,
          onClick: () => setActiveTab(child.props.value)
        })
      )}
    </div>
  );
};
export const TabsTrigger = ({ children, value, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-t-lg transition-colors ${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, value }) => {
  const { activeTab } = useContext(TabContext);
  return activeTab === value ? <div className="pt-4">{children}</div> : null;
};