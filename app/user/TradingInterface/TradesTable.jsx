// TradesTable.jsx - Enhanced Version
const TradesTable = ({ trades, onCloseTrade }) => {
  // Calculate floating P/L
  const calculatePnL = (trade) => {
    if (!trade || !trade.entryPrice) return { value: 0, percentage: 0 };
    
    const currentPrice = trade.asset?.price || trade.entryPrice;
    const directionMultiplier = trade.direction === 'call' ? 1 : -1;
    const priceDifference = (currentPrice - trade.entryPrice) * directionMultiplier;
    
    const value = priceDifference * trade.amount;
    const percentage = (priceDifference / trade.entryPrice) * 100;
    
    return {
      value: value.toFixed(2),
      percentage: percentage.toFixed(2)
    };
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="grid grid-cols-7 gap-4 p-3 bg-gray-850 text-gray-400 text-xs font-semibold uppercase">
        <span>Asset</span>
        <span>Type</span>
        <span>Amount</span>
        <span>Entry Price</span>
        <span>Current Price</span>
        <span>Profit/Loss</span>
        <span className="text-right">Actions</span>
      </div>
      <div className="divide-y divide-gray-750 max-h-96 overflow-y-auto">
        {trades.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No open trades</div>
        ) : (
          trades.map(trade => {
            const pnl = calculatePnL(trade);
            return (
              <div 
                key={trade.id} 
                className="grid grid-cols-7 gap-4 p-3 text-sm hover:bg-gray-750"
              >
                <div className="flex items-center">
                  <span className="font-medium">{trade.asset.symbol}</span>
                </div>
                <div className={`flex items-center ${
                  trade.direction === 'call' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {trade.direction.toUpperCase()}
                </div>
                <div className="flex items-center">
                  ${trade.amount}
                </div>
                <div className="flex items-center">
                  ${trade.entryPrice.toFixed(2)}
                </div>
                <div className="flex items-center">
                  ${trade.asset.price?.toFixed(2) || '--'}
                </div>
                <div className={`flex items-center ${
                  pnl.value >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {pnl.value >= 0 ? '+' : ''}${pnl.value} ({pnl.percentage}%)
                </div>
                <div className="flex items-center justify-end">
                  <button 
                    onClick={() => onCloseTrade(trade)}
                    className="bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TradesTable;