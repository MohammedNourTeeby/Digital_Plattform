'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { createChart } from 'lightweight-charts'
import { FiPlus, FiMinus, FiSettings, FiBarChart, FiArrowUp, FiArrowDown } from 'react-icons/fi'
import { FaExpand } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline'

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
  const [orderType, setOrderType] = useState('market')
  const [formData, setFormData] = useState({
    side: 'buy',
    amount: '',
    price: '',
    leverage: '1'
  })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order submitted:', formData)
  }

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
            <div className="animate-pulse text-sky-500">Loading Market Data...</div>
          </div>
        )}
      </div>

      {/* Overlay UI Elements */}
      <div className="absolute top-0 right-4 text-sm text-sky-500 bg-gray-900/80 px-3 py-1 rounded-lg z-10">
        {`Current Price: ${chartData[chartData.length - 1]?.value.toFixed(4) || '--'}`}
      </div>

      {/* Floating Trading Form */}
      <div className="absolute top-0 right-200 w-80 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700 shadow-xl z-10">
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, side: 'buy' })}
            className={`flex-1 p-2 rounded-lg transition-colors ${
              formData.side === 'buy' 
                ? 'bg-green-100/20 text-green-400 ring-2 ring-green-500/50' 
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
            }`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, side: 'sell' })}
            className={`flex-1 p-2 rounded-lg transition-colors ${
              formData.side === 'sell' 
                ? 'bg-red-100/20 text-red-400 ring-2 ring-red-500/50' 
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
            }`}
          >
            Sell
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Order Type</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200"
              >
                <option value="market">Market</option>
                <option value="limit">Limit</option>
                <option value="stop">Stop</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Leverage</label>
              <div className="relative">
                <select
                  value={formData.leverage}
                  onChange={(e) => setFormData({ ...formData, leverage: e.target.value })}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 pr-8"
                >
                  <option value="1">1x</option>
                  <option value="5">5x</option>
                  <option value="10">10x</option>
                  <option value="20">20x</option>
                </select>
                <ArrowsUpDownIcon className="h-4 w-4 absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Amount</label>
            <input
              type="number"
              step="0.01"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200"
              placeholder="0.00"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              required
            />
          </div>

          {orderType !== 'market' && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">Price</label>
              <input
                type="number"
                step="0.0001"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200"
                placeholder="0.0000"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-md font-semibold text-white shadow-sm transition-colors ${
              formData.side === 'buy' 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {formData.side === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
          </button>
        </form>
      </div>

      {/* Bottom Trade Panel */}
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
            
            <h3 className="text-base font-semibold text-gray-200">Trading Panel</h3>
            
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
            <button className="bg-gray-800 rounded-xl p-3 flex flex-col items-center hover:bg-gray-700/80 transition">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-400">00:05</span>
                <div className="flex gap-1">
                  <FiArrowUp className="text-green-400 text-sm" />
                  <FiArrowDown className="text-red-400 text-sm" />
                </div>
              </div>
              <span className="text-xs text-gray-400">Trade Duration</span>
            </button>

            <div className="bg-gray-800 rounded-xl p-3 flex flex-col">
              <div className="relative w-full h-10">
                <div className="absolute inset-0 bg-green-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '81%' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-end pr-3">
                  <FiArrowUp className="text-green-500 text-xl z-10" />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">Buy</span>
                <span className="text-sm text-green-500">81%</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-3 flex flex-col">
              <div className="relative w-full h-10">
                <div className="absolute inset-0 bg-red-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: '81%' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-end pr-3">
                  <FiArrowDown className="text-red-500 text-xl z-10" />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">Sell</span>
                <span className="text-sm text-red-500">81%</span>
              </div>
            </div>

            <button className="bg-gray-800 rounded-xl p-3 flex flex-col items-center hover:bg-gray-700/80 transition">
              <div className="mb-1">
                <span className="text-sm text-gray-400">$50</span>
              </div>
              <span className="text-xs text-gray-400">Investment</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfessionalTradingWidget