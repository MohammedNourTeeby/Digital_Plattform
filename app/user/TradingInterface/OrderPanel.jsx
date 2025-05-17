// OrderPanel.jsx - Enhanced Version
"use client";
import { useState } from "react";

const OrderPanel = ({ asset, onTrade }) => {
  const [amount, setAmount] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');
  const [duration, setDuration] = useState(60);
  const [activeTab, setActiveTab] = useState('call');

  const executeTrade = (direction) => {
    if (!asset || !amount) return;
    
    const currentPrice = asset.price || 42000;
    const sl = stopLoss ? parseFloat(stopLoss) : null;
    const tp = takeProfit ? parseFloat(takeProfit) : null;
    
    const trade = {
      id: Date.now(),
      asset: { ...asset, entryPrice: currentPrice },
      direction,
      amount: parseFloat(amount),
      duration,
      entryPrice: currentPrice,
      stopLoss: sl,
      takeProfit: tp,
      timestamp: new Date(),
      status: 'open'
    };
    
    onTrade(trade);
    setAmount('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-4">
          {asset?.symbol || 'Select Asset'}
        </h3>
        
        <div className="space-y-4">
          {/* Trade Type Tabs */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab('call')}
              className={`py-2 rounded-md ${
                activeTab === 'call' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-600 text-gray-300'
              }`}
            >
              BUY
            </button>
            <button
              onClick={() => setActiveTab('put')}
              className={`py-2 rounded-md ${
                activeTab === 'put' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-600 text-gray-300'
              }`}
            >
              SELL
            </button>
          </div>

          {/* Investment Amount */}
          <div>
            <label className="block text-sm mb-1">Investment Amount</label>
            <input
              type="number"
              min="1"
              className="w-full bg-gray-600 rounded-lg px-3 py-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Stop Loss & Take Profit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Stop Loss</label>
              <input
                type="number"
                className="w-full bg-gray-600 rounded-lg px-3 py-2"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Take Profit</label>
              <input
                type="number"
                className="w-full bg-gray-600 rounded-lg px-3 py-2"
                value={takeProfit}
                onChange={(e) => setTakeProfit(e.target.value)}
              />
            </div>
          </div>

          {/* Trade Button */}
          <button
            onClick={() => executeTrade(activeTab)}
            className={`w-full py-4 rounded-lg text-xl font-bold ${
              activeTab === 'call'
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-red-600 hover:bg-red-700'
            } text-white`}
          >
            {activeTab === 'call' ? 'BUY' : 'SELL'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;