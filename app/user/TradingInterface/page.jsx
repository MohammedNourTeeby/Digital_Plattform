// TradingPage.jsx - Enhanced Version
"use client";
import { useState, useEffect } from 'react';
import TradingChart from './TradingChart';
import AssetSelector from './AssetSelector';
import OrderPanel from './OrderPanel';
import TradesTable from './TradesTable';

const TradingPage = () => {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [balance, setBalance] = useState({ real: 5000, demo: 25000 });
  const [isDemo, setIsDemo] = useState(false);
  const [openTrades, setOpenTrades] = useState([]);
  const [marketData, setMarketData] = useState({});
  
  // Generate mock market data for all assets
  useEffect(() => {
    const assets = [
      { id: 1, symbol: 'BTC/USD', name: 'Bitcoin', price: 42000, change: 2.5 },
      { id: 2, symbol: 'ETH/USD', name: 'Ethereum', price: 3000, change: -1.2 },
      { id: 3, symbol: 'XRP/USD', name: 'XRP', price: 0.5, change: 0.8 },
      { id: 4, symbol: 'AAPL', name: 'Apple', price: 150, change: 0.5 },
      { id: 5, symbol: 'EUR/USD', name: 'Euro', price: 1.08, change: -0.3 },
      { id: 6, symbol: 'GOLD', name: 'Gold', price: 1800, change: 1.1 },
    ];
    
    const initialMarketData = {};
    assets.forEach(asset => {
      initialMarketData[asset.id] = {
        ...asset,
        priceHistory: Array.from({length: 30}, (_, i) => ({
          time: new Date(Date.now() - (30 - i) * 60000).toISOString().split('T')[0],
          price: asset.price + (Math.random() - 0.5) * 100
        }))
      };
    });
    
    setMarketData(initialMarketData);
    
    if (assets.length > 0) {
      setSelectedAsset(assets[0]);
    }
  }, []);
  
  // Update selected asset's price
  useEffect(() => {
    if (!selectedAsset) return;
    
    const interval = setInterval(() => {
      setMarketData(prev => {
        const updatedAsset = {
          ...prev[selectedAsset.id],
          price: prev[selectedAsset.id].price + (Math.random() - 0.5) * 10,
          change: (Math.random() - 0.5) * 5
        };
        
        return {
          ...prev,
          [selectedAsset.id]: updatedAsset
        };
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [selectedAsset]);
  
  // Handle new trade
  const handleTrade = (trade) => {
    setOpenTrades([...openTrades, trade]);
    
    // Update balance
    const cost = trade.amount;
    if (isDemo) {
      setBalance(prev => ({ ...prev, demo: prev.demo - cost }));
    } else {
      setBalance(prev => ({ ...prev, real: prev.real - cost }));
    }
  };
  
  // Close trade
  const handleCloseTrade = (trade) => {
    const pnl = calculateTradePnL(trade);
    
    // Update balance
    if (isDemo) {
      setBalance(prev => ({ ...prev, demo: prev.demo + trade.amount + pnl }));
    } else {
      setBalance(prev => ({ ...prev, real: prev.real + trade.amount + pnl }));
    }
    
    // Remove trade
    setOpenTrades(openTrades.filter(t => t.id !== trade.id));
  };
  
  // Calculate P&L for closed trade
  const calculateTradePnL = (trade) => {
    if (!trade || !trade.entryPrice) return 0;
    
    const currentPrice = marketData[trade.asset.id]?.price || trade.entryPrice;
    const directionMultiplier = trade.direction === 'call' ? 1 : -1;
    const priceDifference = (currentPrice - trade.entryPrice) * directionMultiplier;
    
    return priceDifference * trade.amount;
  };
  
  // Update selected asset price
  const handlePriceUpdate = (newPrice) => {
    if (!selectedAsset) return;
    
    setMarketData(prev => ({
      ...prev,
      [selectedAsset.id]: {
        ...prev[selectedAsset.id],
        price: newPrice,
        change: ((newPrice - selectedAsset.price) / selectedAsset.price) * 100
      }
    }));
    
    setSelectedAsset({
      ...selectedAsset,
      price: newPrice,
      change: ((newPrice - selectedAsset.price) / selectedAsset.price) * 100
    });
  };

  return (
    <div className="h-screen px-10 bg-gray-900 text-gray-100 flex flex-col ">
      {/* Top Navigation */}
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-bold">Trading Platform</h1>
          <button 
            onClick={() => setIsDemo(!isDemo)}
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            {isDemo ? `Demo: $${balance.demo.toFixed(2)}` : `Real: $${balance.real.toFixed(2)}`}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            Deposit
          </button>
          <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
            Settings
          </button>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4 flex-1 p-4">
        <div className="col-span-2 bg-gray-800 rounded-lg p-4">
          <AssetSelector 
            selectedAsset={selectedAsset}
            onSelect={(asset) => {
              setSelectedAsset({
                ...asset,
                price: marketData[asset.id]?.price || asset.price,
                change: marketData[asset.id]?.change || asset.change
              });
            }}
          />
        </div>
        
        <div className="col-span-8 bg-gray-800 rounded-lg p-4">
          <TradingChart 
            asset={selectedAsset ? {
              ...selectedAsset,
              price: marketData[selectedAsset.id]?.price || selectedAsset.price
            } : null}
            openTrades={openTrades}
            onPriceUpdate={handlePriceUpdate}
          />
        </div>
        
        <div className="col-span-2 bg-gray-800 rounded-lg p-4">
          <OrderPanel 
            asset={selectedAsset ? {
              ...selectedAsset,
              price: marketData[selectedAsset.id]?.price || selectedAsset.price
            } : null}
            onTrade={handleTrade}
          />
        </div>
        
        <div className="col-span-12 bg-gray-800 rounded-lg p-4">
          <TradesTable 
            trades={openTrades.map(trade => ({
              ...trade,
              asset: {
                ...trade.asset,
                price: marketData[trade.asset.id]?.price || trade.entryPrice
              }
            }))}
            onCloseTrade={handleCloseTrade}
          />
        </div>
      </div>
    </div>
  );
};

export default TradingPage;