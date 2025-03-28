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
  Filler,
  BarController,
  LineController
} from 'chart.js';
import { motion } from 'framer-motion';
import { FiDownload, FiRefreshCw, FiSettings } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import annotationPlugin from 'chartjs-plugin-annotation';

// تسجيل مكونات Chart.js بشكل كامل
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
  BarController,
  LineController,
  annotationPlugin
);

const AdvancedFinancialDashboard = () => {
  const chartRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('monthly');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // البيانات الأولية المعدلة
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
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(79, 70, 229, 0.3)');
            gradient.addColorStop(1, 'rgba(79, 70, 229, 0.01)');
            return gradient;
          },
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

  // إعدادات المخطط المحسنة
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
          targetLine: {
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
        beginAtZero: true,
        grid: {
          color: '#E5E7EB'
        },
        ticks: {
          font: {
            family: 'Tajawal',
            size: 12
          },
          callback: function(value) {
            return `$${value}`;
          }
        }
      }
    }
  };

  // محاكاة تحديث البيانات مع تحسينات
  const refreshData = () => {
    setFinancialData(prev => {
      const newData = prev.chartData.datasets.map(dataset => ({
        ...dataset,
        data: dataset.data.map(() => Math.floor(Math.random() * 100))
      }));
      
      return {
        ...prev,
        balance: Math.random() * 200,
        revenue: Math.random() * 300,
        performance: `${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 20).toFixed(1)}%`,
        chartData: {
          ...prev.chartData,
          datasets: newData
        }
      };
    });
  };

  useEffect(() => {
    // تهيئة المخطط عند التحميل
    const chart = chartRef.current;
    if (chart) {
      chart.update();
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 ${
        isFullscreen ? 'fixed inset-0 z-50' : 'relative'
      }`}
    >
      {/* شريط التحكم العلوي المعدل */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <span className="logo-hb">HB+</span>
          <h1 className="text-3xl font-bold text-indigo-600 font-[Tajawal]">Smarby</h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="input-style font-[Tajawal] px-4 py-2 border rounded-lg"
            popperClassName="rtl"
          />
          
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            {['daily', 'monthly', 'yearly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === tab 
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white'
                    : 'hover:bg-gray-200'
                } font-[Tajawal] text-sm`}
              >
                {tab === 'daily' ? 'يومي' : tab === 'monthly' ? 'شهري' : 'سنوي'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* بطاقات البيانات المحسنة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { 
            title: 'الرصيد الحالي',
            value: financialData.balance,
            gradient: 'from-indigo-100/50 to-transparent',
            color: 'text-indigo-600'
          },
          { 
            title: 'الإيرادات الشهرية',
            value: financialData.revenue,
            gradient: 'from-green-100/50 to-transparent',
            color: 'text-green-600'
          },
          { 
            title: 'مؤشر الأداء',
            value: financialData.performance,
            gradient: 'from-blue-100/50 to-transparent',
            color: 'text-blue-600'
          }
        ].map((card, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl relative overflow-hidden bg-gradient-to-r"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient}`} />
            <h3 className="text-lg font-[Tajawal] text-gray-600">{card.title}</h3>
            <div className="flex items-baseline gap-2 mt-2">
              <p className={`text-3xl font-bold ${card.color}`}>
                {typeof card.value === 'string' ? card.value : `$${card.value.toFixed(2)}`}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* المخطط التفاعلي المعدل */}
      <div className="relative h-[500px]">
        <Bar
          ref={chartRef}
          data={financialData.chartData}
          options={chartOptions}
          className="rtl:scale-x-[-1]"
          fallbackContent={<div className="text-center p-4">جارٍ تحميل البيانات...</div>}
        />
        
        {/* أدوات التحكم المحسنة */}
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={refreshData}
            className="p-2 bg-white shadow-md rounded-lg hover:bg-gray-50"
          >
            <FiRefreshCw className="w-5 h-5 text-gray-600" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-white shadow-md rounded-lg hover:bg-gray-50"
          >
            {isFullscreen ? '⤡' : '⤢'}
          </motion.button>
        </div>
      </div>

      {/* شريط التحكم السفلي المعدل */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
          <FiSettings className="w-5 h-5" />
          <span className="font-[Tajawal]">الإعدادات المتقدمة</span>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg flex items-center"
        >
          <FiDownload className="ml-2" />
          <span className="font-[Tajawal]">تصدير تقرير كامل</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AdvancedFinancialDashboard;