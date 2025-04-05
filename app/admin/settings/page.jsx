// app/admin/settings/page.jsx
'use client';
import { useState } from 'react';
import GeneralSettings from './GeneralSettings/page';
import SecuritySettings from './SecuritySettings/page';
import AuditLogs from './AuditLogs/page';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* شريط التبويبات */}
        <div className="bg-white shadow rounded-t-lg">
        <nav className="flex border-b border-gray-200 sticky top-0 bg-white z-sticky">
        <button
              onClick={() => setActiveTab('general')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'general'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              الإعدادات العامة
            </button>
            
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'security'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              الأمان
            </button>
            
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'logs'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              السجلات
            </button>
          </nav>
        </div>

        {/* محتوى التبويبات */}
        <div className="bg-white shadow rounded-b-lg p-6">
          {activeTab === 'general' && <GeneralSettings />}
          {activeTab === 'security' && <SecuritySettings />}
          {activeTab === 'logs' && <AuditLogs />}
        </div>
      </div>
    </div>
  );
}