// components/AdvancedFinancialDashboard.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { motion } from 'framer-motion';
import { FiDownload, FiRefreshCw, FiSettings } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import annotationPlugin from 'chartjs-plugin-annotation';

// تسجيل مكونات Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

const AdvancedFinancialDashboard = () => {
  const chartRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('monthly');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // بيانات افتراضية متطورة
  const [financialData, setFinancialData] = useState({
    balance: 90.00,
    revenue: 90.00,
    performance: '+12.5%',
    chartData: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
      datasets: [
        {
          type: 'line',
          label: 'الأداء التراكمي',
          data: [45, 60, 75, 80, 90, 95],
          borderColor: '#4F46E5',
          backgroundColor: 'rgba(79, 70, 229, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7
        },
        {
          type: 'bar',
          label: 'الإيرادات',
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: 'rgba(99, 102, 241, 0.8)',
          borderColor: 'rgba(99, 102, 241, 1)',
          borderWidth: 1,
          borderRadius: 8,
          barPercentage: 0.6
        }
      ]
    }
  });

  // إعدادات المخطط المتقدمة
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: {
        position: 'top',
        rtl: true,
        labels: {
          font: {
            family: 'Tajawal',
            size: 14
          },
          usePointStyle: true
        }
      },
      title: {
        display: true,
        text: 'تحليل أداء مالي تفاعلي',
        font: {
          family: 'Tajawal',
          size: 20
        }
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 80,
            yMax: 80,
            borderColor: '#EF4444',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              content: 'هدف الأداء',
              enabled: true,
              position: 'end',
              font: {
                family: 'Tajawal',
                size: 12
              }
            }
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: 'Tajawal',
            size: 12
          }
        }
      },
      y: {
        grid: {
          color: '#E5E7EB'
        },
        ticks: {
          font: {
            family: 'Tajawal',
            size: 12
          },
          callback: function(value) {
            return '$' + value;
          }
        }
      }
    }
  };

  // محاكاة تحديث البيانات
  const refreshData = () => {
    setFinancialData(prev => ({
      ...prev,
      balance: Math.random() * 200,
      revenue: Math.random() * 300,
      performance: `${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 20).toFixed(1)}%`,
      chartData: {
        ...prev.chartData,
        datasets: prev.chartData.datasets.map(dataset => ({
          ...dataset,
          data: dataset.data.map(() => Math.floor(Math.random() * 100))
        }))
      }
    }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 ${
        isFullscreen ? 'fixed inset-0 z-50' : 'relative'
      }`}
    >
      {/* شريط التحكم العلوي */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-indigo-600 font-[Tajawal]">Smarby</h1>
        
        <div className="flex items-center gap-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="input-style font-[Tajawal]"
          />
          
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            {['daily', 'monthly', 'yearly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab 
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-gray-200'
                } font-[Tajawal]`}
              >
                {tab === 'daily' ? 'يومي' : tab === 'monthly' ? 'شهري' : 'سنوي'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* بطاقات البيانات التفاعلية */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-indigo-50 p-6 rounded-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-transparent" />
          <h3 className="text-lg font-[Tajawal] text-gray-600">الرصيد الحالي</h3>
          <div className="flex items-baseline gap-2 mt-2">
            <p className="text-3xl font-bold text-indigo-600">
              ${financialData.balance.toFixed(2)}
            </p>
            <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
              {financialData.performance}
            </span>
          </div>
        </motion.div>

        {/* ... بطاقات أخرى بنفس النمط ... */}
      </div>

      {/* المخطط التفاعلي */}
      <div className="relative h-[500px]">
        <Bar
          ref={chartRef}
          data={financialData.chartData}
          options={chartOptions}
          className="rtl:scale-x-[-1]"
        />
        
        {/* أدوات التحكم بالمخطط */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            onClick={refreshData}
            className="p-2 bg-white shadow-md rounded-lg hover:bg-gray-50"
          >
            <FiRefreshCw className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-white shadow-md rounded-lg hover:bg-gray-50"
          >
            {isFullscreen ? '⤡' : '⤢'}
          </button>
        </div>
      </div>

      {/* شريط التحكم السفلي */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <FiSettings className="w-5 h-5" />
          <span className="font-[Tajawal]">الإعدادات المتقدمة</span>
        </div>
        
        <button className="btn-indigo">
          <FiDownload className="ml-2" />
          تصدير تقرير كامل
        </button>
      </div>
    </motion.div>
  );
};

export default AdvancedFinancialDashboard;