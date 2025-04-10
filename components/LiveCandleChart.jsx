import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

export default function LiveCandleChart({ data }) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const candleSeriesRef = useRef(null);

  useEffect(() => {
    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,
      timeScale: {
        timeVisible: true,
      }
    });

    candleSeriesRef.current = chartRef.current.addCandlestickSeries();
    candleSeriesRef.current.setData(data);

    return () => chartRef.current.remove();
  }, []);

  // محاكاة التحديثات الحية
  useEffect(() => {
    const interval = setInterval(() => {
      const newCandle = {
        time: Date.now() / 1000,
        open: data[data.length-1].close,
        high: data[data.length-1].close * 1.001,
        low: data[data.length-1].close * 0.999,
        close: data[data.length-1].close * (Math.random() > 0.5 ? 1.0005 : 0.9995)
      };
      candleSeriesRef.current.update(newCandle);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  return <div ref={chartContainerRef} />;
}