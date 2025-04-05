import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

export default function CandleChart({ data, indicators }) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const candlestickSeriesRef = useRef(null);
  const volumeSeriesRef = useRef(null);
  const rsiSeriesRef = useRef(null);

  useEffect(() => {
    // Initialize chart
    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 600,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#333',
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    // Candlestick series
    candlestickSeriesRef.current = chartRef.current.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });
    candlestickSeriesRef.current.setData(data);

    // Volume series
    if (indicators?.volume) {
      volumeSeriesRef.current = chartRef.current.addHistogramSeries({
        color: 'rgba(59, 130, 246, 0.2)',
        priceFormat: {
          type: 'volume',
        },
        priceScaleId: 'volume',
      });
      volumeSeriesRef.current.setData(data.map(d => ({
        time: d.time,
        value: d.volume,
        color: d.close > d.open ? 'rgba(38, 166, 154, 0.5)' : 'rgba(239, 83, 80, 0.5)'
      })));
      
      chartRef.current.priceScale('volume').applyOptions({
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });
    }

    // RSI series
    if (indicators?.rsi) {
      chartRef.current.addLineSeries({
        color: '#8e44ad',
        lineWidth: 2,
        priceScaleId: 'rsi',
      }).setData(data.map(d => ({ time: d.time, value: d.rsi })));
      
      chartRef.current.priceScale('rsi').applyOptions({
        scaleMargins: {
          top: 0.1,
          bottom: 0.4,
        },
      });
    }

    chartRef.current.timeScale().fitContent();

    return () => chartRef.current?.remove();
  }, [data, indicators]);

  return <div ref={chartContainerRef} className="w-full h-[600px]" />;
}