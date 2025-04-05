'use client';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart, 
  LinearScale,
  TimeScale,
  LineController,
  PointElement,
  LineElement,
  Tooltip,
  Legend 
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { arSA } from 'date-fns/locale';

// تسجيل مكونات Chart.js المطلوبة
Chart.register(
  LinearScale,
  TimeScale,
  LineController,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// تكوين المحول الزمني للغة العربية
Chart.defaults.scales.time.adapters = {
  date: {
    locale: arSA
  }
};

export default function TechnicalAnalysis({ data }) {
  const [processedData, setProcessedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // معالجة البيانات وتجنب القيم الفارغة
  useEffect(() => {
    try {
      const validData = data
        .filter(item => 
          item?.time && 
          !isNaN(new Date(item.time)) &&
          item.rsi !== null &&
          item.rsi !== undefined
        )
        .map(item => ({
          time: new Date(item.time),
          rsi: Number(item.rsi) || 0,
          macd: Number(item.macd) || 0
        }));

      setProcessedData(validData);
      setLoading(false);
    } catch (err) {
      setError('خطأ في تحميل البيانات');
      setLoading(false);
    }
  }, [data]);

  // بيانات المخطط
  const chartData = {
    datasets: [
      {
        label: 'مؤشر القوة النسبية (RSI)',
        data: processedData.map(d => ({ x: d.time, y: d.rsi })),
        borderColor: '#8e44ad',
        borderWidth: 2,
        tension: 0.1,
        yAxisID: 'y',
      },
      {
        label: 'مؤشر MACD',
        data: processedData.map(d => ({ x: d.time, y: d.macd })),
        borderColor: '#2ecc71',
        borderWidth: 2,
        tension: 0.1,
        yAxisID: 'y1',
      }
    ]
  };

  // إعدادات المخطط
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    spanGaps: true,
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
            family: 'Tajawal'
          }
        }
      },
      tooltip: {
        rtl: true,
        bodyFont: {
          family: 'Tajawal'
        },
        titleFont: {
          family: 'Tajawal'
        },
        callbacks: {
          title: (context) => {
            const date = new Date(context[0].parsed.x);
            return date.toLocaleDateString('ar-SA', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            });
          },
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) label += ': ';
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(2);
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'dd MMM'
          }
        },
        adapters: {
          date: {
            locale: arSA
          }
        },
        ticks: {
          autoSkip: true,
          maxRotation: 0,
          font: {
            family: 'Tajawal'
          }
        }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 100,
        ticks: {
          color: '#8e44ad',
          font: {
            family: 'Tajawal'
          }
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          color: '#2ecc71',
          font: {
            family: 'Tajawal'
          }
        },
        grid: {
          drawOnChartArea: false
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-50 p-6 rounded-xl text-center text-gray-600">
        جاري تحميل البيانات...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-xl text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="mb-4 text-right">
        <h3 className="text-xl font-semibold text-gray-800">
          التحليل الفني المتقدم
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
        </p>
      </div>
      
      <div className="relative h-96">
        <Line 
          data={chartData} 
          options={options}
          redraw={true}
        />
      </div>

      <div className="mt-4 text-sm text-gray-600 text-right">
        <p>• مؤشر RSI يظهر بين 0-100</p>
        <p>• مؤشر MACD يعرض الفرق بين المتوسطات المتحركة</p>
      </div>
    </div>
  );
}