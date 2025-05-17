// TradingChart.jsx - Fixed Version
"use client"
import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

const TradingChart = ({ asset, openTrades = [], onPriceUpdate }) => {
  const chartContainerRef = useRef(null);
  const chart = useRef(null);
  const candleSeries = useRef(null);
  const priceLineSeries = useRef(null); // Reference for price line series
  const priceData = useRef([]);
  
  // Generate mock price data (improved with proper time format)
  const generateMockData = () => {
    const now = Math.floor(Date.now() / 1000);
    const basePrice = asset?.price || 42000;
    
    return Array.from({length: 30}, (_, i) => {
      const time = now - (30 - i) * 60; // 1-minute intervals
      const volatility = (Math.random() - 0.5) * 200;
      const open = basePrice + volatility;
      const close = open + (Math.random() - 0.5) * 200;
      
      return {
        time: Math.floor(time / 60) * 60, // Unix timestamp in minutes
        open,
        high: Math.max(open, close) + Math.random() * 100,
        low: Math.min(open, close) - Math.random() * 100,
        close,
      };
    });
  };

  // Update chart with new data
  const updateChartData = () => {
    if (!asset) return;
    
    // Simulate real-time price updates
    const lastData = priceData.current[priceData.current.length - 1];
    const newPrice = lastData.close + (Math.random() - 0.5) * 20;
    
    const newData = {
      time: Math.floor(Date.now() / 60000) * 60, // Unix timestamp in minutes
      open: lastData.close,
      high: Math.max(lastData.close, newPrice) + Math.random() * 10,
      low: Math.min(lastData.close, newPrice) - Math.random() * 10,
      close: newPrice,
    };
    
    priceData.current.push(newData);
    
    // Keep only last 60 entries
    if (priceData.current.length > 60) {
      priceData.current.shift();
    }
    
    candleSeries.current.setData(priceData.current);
    
    // Update price line series
    if (priceLineSeries.current) {
      priceLineSeries.current.setData([
        { time: newData.time, value: newData.close },
        { time: newData.time + 60, value: newData.close } // Draw line to next minute
      ]);
    }
    
    // Trigger price update for other components
    if (onPriceUpdate) {
      onPriceUpdate(newData.close);
    }
  };

  // Add trade marker to chart
  const addTradeMarker = (trade) => {
    if (!trade || !chart.current) return;
    
    const lastPrice = priceData.current[priceData.current.length - 1];
    
    candleSeries.current.setMarkers([
      {
        time: lastPrice.time,
        position: trade.direction === 'call' ? 'belowBar' : 'aboveBar',
        color: trade.direction === 'call' ? '#22C55E' : '#EF4444',
        shape: trade.direction === 'call' ? 'arrowUp' : 'arrowDown',
        text: `${trade.amount} ${asset.symbol}`,
        size: 3,
      }
    ]);
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;
    
    // Initialize chart
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,
      layout: {
        background: { color: '#1F2937' },
        textColor: '#E5E7EB',
      },
      grid: {
        vertLines: { color: '#374151' },
        horzLines: { color: '#374151' },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });
    
    candleSeries.current = chart.current.addCandlestickSeries({
      upColor: '#22C55E',
      downColor: '#EF4444',
      borderVisible: false,
      wickUpColor: '#22C55E',
      wickDownColor: '#EF4444',
    });
    
    // Create price line series
    priceLineSeries.current = chart.current.addLineSeries({
      color: '#FF9800',
      lineWidth: 2,
      lastValueVisible: false,
      crosshairMarkerVisible: false,
    });
    
    // Initialize with mock data
    priceData.current = generateMockData();
    candleSeries.current.setData(priceData.current);
    
    // Set initial price line
    const initialPrice = priceData.current[priceData.current.length - 1].close;
    priceLineSeries.current.setData([
      { time: priceData.current[priceData.current.length - 1].time, value: initialPrice },
      { time: priceData.current[priceData.current.length - 1].time + 60, value: initialPrice }
    ]);
    
    // Update chart every 5 seconds
    const interval = setInterval(updateChartData, 5000);
    
    return () => {
      clearInterval(interval);
      if (chart.current) {
        chart.current.remove();
      }
    };
  }, [asset]);

  // Watch for new trades and add markers
  useEffect(() => {
    if (openTrades.length > 0) {
      addTradeMarker(openTrades[openTrades.length - 1]);
    }
  }, [openTrades]);

  return (
    <div ref={chartContainerRef} className="w-full h-full" />
  );
};

export default TradingChart;