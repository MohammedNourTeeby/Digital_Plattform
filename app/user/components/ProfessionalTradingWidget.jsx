// ProfessionalTradingWidget.js
'use client'
import { useState, useEffect, useRef ,useCallback } from 'react'
import { createChart } from 'lightweight-charts'
import { FiPlus, FiMinus, FiSettings, FiBarChart, FiArrowUp, FiArrowDown } from 'react-icons/fi'
import { FaExpand } from 'react-icons/fa'
import { motion } from 'framer-motion'

const darkTheme = {
  background: '#0a0e17',
  gridColor: '#1c2029',
  textColor: '#c0c5ce',
  lineColor: '#38bdf8',
  fillColor: 'rgba(56, 189, 248, 0.1)',
  borderColor: '#1c2029',
}

const generateFakeData = (basePrice = 207.9765) => {
  const volatility = 0.002
  return Array.from({ length: 100 }).map((_, i) => ({
    time: Date.now() / 1000 - (100 - i) * 60,
    value: parseFloat(
      (
        basePrice + 
        (Math.random() - 0.5) * volatility * 2 +
        Math.sin(i / 20) * volatility * 1.5
      ).toFixed(4)
    )
  }))
}

const ProfessionalTradingWidget = () => {
  const chartContainerRef = useRef(null)
  const chartInstance = useRef(null)
  const areaSeriesRef = useRef(null)
  const [chartData, setChartData] = useState(generateFakeData())
  const [isLoading, setIsLoading] = useState(true)
  const updateInterval = useRef(null)
  const momentum = useRef(0)

  const initializeChart = useCallback(() => {
    if (!chartContainerRef.current) return
    chartInstance.current = createChart(chartContainerRef.current, {
      layout: {
        background: { color: darkTheme.background },
        textColor: darkTheme.textColor,
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      },
      grid: {
        vertLines: { color: darkTheme.gridColor },
        horzLines: { color: darkTheme.gridColor },
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      timeScale: {
        borderColor: darkTheme.borderColor,
        timeVisible: true,
        secondsVisible: false,
        shiftVisibleRangeOnNewBar: true,
        barSpacing: 8,
      },
      rightPriceScale: {
        borderVisible: false,
        autoScale: true,
        entireTextOnly: true,
      },
      handleScroll: { mouseWheel: true, pressedMouseMove: true },
      handleScale: { axisPressedMouseMove: true, mouseWheel: true, pinch: true },
      localization: { priceFormatter: (price) => price.toFixed(4) },
    })
    areaSeriesRef.current = chartInstance.current.addAreaSeries({
      topColor: darkTheme.fillColor,
      bottomColor: 'rgba(15, 23, 42, 0)',
      lineColor: darkTheme.lineColor,
      lineWidth: 2,
      priceLineVisible: false,
    })
    areaSeriesRef.current.setData(chartData)
    chartInstance.current.timeScale().fitContent()
  }, [chartData])

  const updateChart = useCallback(() => {
    if (!chartInstance.current || !areaSeriesRef.current) return
    const lastCandle = chartData[chartData.length - 1]
    const baseValue = lastCandle.value
    const volatility = 0.0015 + Math.random() * 0.001
    const trend = Math.sin(Date.now() / 10000) * 0.0005
    momentum.current = momentum.current * 0.7 + (Math.random() - 0.5) * 0.002
    const newValue = parseFloat((
      baseValue + 
      trend + 
      momentum.current + 
      (Math.random() - 0.5) * volatility
    ).toFixed(4))
    const newCandle = {
      time: Date.now() / 1000,
      value: newValue,
    }
    areaSeriesRef.current.update(newCandle)
    setChartData(prev => [...prev.slice(1), newCandle])
  }, [chartData])

  useEffect(() => {
    initializeChart()
    setIsLoading(false)
    updateInterval.current = setInterval(updateChart, 10000)
    return () => {
      clearInterval(updateInterval.current)
      chartInstance.current?.remove()
    }
  }, [initializeChart, updateChart])

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        chartInstance.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight
        })
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="w-full h-screen relative bg-[#0a0e17]">
      {/* Full-screen Chart Container */}
      <div 
        ref={chartContainerRef}
        className="w-full h-full absolute inset-0"
      >
        {isLoading && (
          <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center">
            <div className="animate-pulse text-sky-500">تحميل البيانات...</div>
          </div>
        )}
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10">
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </button>
          <div className="bg-blue-500 px-6 py-2 rounded-lg text-white font-semibold">
            الموارد المالية
          </div>
          <div className="bg-gray-700 px-6 py-2 rounded-lg text-white font-semibold">
            الرصيد الحقيقي
          </div>
        </div>
        <div className="text-white">$0.00</div>
      </div>

      {/* Bottom Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-gray-700 z-10"
      >
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2 text-gray-400">
              <FiSettings className="hover:text-blue-400 cursor-pointer text-xl" />
              <FiBarChart className="hover:text-green-400 cursor-pointer text-xl" />
              <FaExpand className="hover:text-purple-400 cursor-pointer text-xl" />
            </div>
            <h3 className="text-base font-semibold text-gray-200">لوحة التداول</h3>
            <div className="flex gap-3">
              <button className="bg-gray-700 hover:bg-gray-600 rounded-full p-1.5">
                <FiPlus className="text-green-400 text-lg" />
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 rounded-full p-1.5">
                <FiMinus className="text-red-400 text-lg" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-xl p-3 flex flex-col items-center hover:bg-gray-700/80 transition">
              <div className="mb-1">
                <span className="text-sm text-gray-400">00:05</span>
              </div>
              <span className="text-xs text-gray-400">مدة الصفقة</span>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 flex flex-col">
              <div className="relative w-full h-10">
                <div className="absolute inset-0 bg-green-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '82%' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-end pr-3">
                  <FiArrowUp className="text-green-500 text-xl z-10" />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">شراء</span>
                <span className="text-sm text-green-500">82%</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 flex flex-col">
              <div className="relative w-full h-10">
                <div className="absolute inset-0 bg-red-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: '82%' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-end pr-3">
                  <FiArrowDown className="text-red-500 text-xl z-10" />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">بيع</span>
                <span className="text-sm text-red-500">82%</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 flex flex-col items-center hover:bg-gray-700/80 transition">
              <div className="mb-1">
                <span className="text-sm text-gray-400">$50</span>
              </div>
              <span className="text-xs text-gray-400">الاستثمار</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Trading Form */}
      <div className="absolute bottom-20 right-20 w-80 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700 shadow-xl z-10">
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => console.log('Buy')}
            className="flex-1 p-2 rounded-lg transition-colors bg-green-600 hover:bg-green-700 text-white"
          >
            شراء
          </button>
          <button
            type="button"
            onClick={() => console.log('Sell')}
            className="flex-1 p-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700 text-white"
          >
            بيع
          </button>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">نوع الطلب</label>
              <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200">
                <option>سوق</option>
                <option>حد</option>
                <option>وقف</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">الرافعة</label>
              <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200">
                <option>1x</option>
                <option>5x</option>
                <option>10x</option>
                <option>20x</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">المبلغ</label>
            <input
              type="number"
              step="0.01"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200"
              placeholder="0.00"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">السعر</label>
            <input
              type="number"
              step="0.0001"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200"
              placeholder="0.0000"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md font-semibold text-white shadow-sm transition-colors bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
          >
            تأكيد الطلب
          </button>
        </form>
      </div>

      {/* Chart Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          Smarty
        </div>
        <div className="absolute bottom-10 left-10 text-white">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 rounded-full w-3 h-3"></div>
            <span>$91.00</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-500 rounded-full w-3 h-3"></div>
            <span>$91.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalTradingWidget