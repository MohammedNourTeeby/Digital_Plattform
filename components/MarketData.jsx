export default function MarketData() {
    const marketData = {
      price: 42356.78,
      change: 2.34,
      high: 42890.12,
      low: 41876.54,
      volume: 2345.67
    };
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div>
          <p className="text-sm text-gray-500">السعر الحالي</p>
          <p className="text-lg font-bold">{marketData.price.toLocaleString()} USDT</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">التغيير (24h)</p>
          <p className={`text-lg ${marketData.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {marketData.change >= 0 ? '+' : ''}{marketData.change}%
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">أعلى سعر (24h)</p>
          <p className="text-lg">{marketData.high.toLocaleString()} USDT</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">أدنى سعر (24h)</p>
          <p className="text-lg">{marketData.low.toLocaleString()} USDT</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">حجم التداول (24h)</p>
          <p className="text-lg">{marketData.volume.toLocaleString()} BTC</p>
        </div>
      </div>
    );
  }