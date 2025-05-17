"use client";
import { useState } from "react";

const AssetSelector = ({ selectedAsset, onSelect }) => {
  const [search, setSearch] = useState('');
  const [assets] = useState([
{ id: 1, symbol: 'BTC/USD', name: 'Bitcoin', price: 42000, change: 2.5 },
    { id: 2, symbol: 'ETH/USD', name: 'Ethereum', price: 2500, change: -1.2 },
    { id: 3, symbol: 'XAU/USD', name: 'Gold', price: 1950, change: 0.8 },
    { id: 4, symbol: 'EUR/USD', name: 'Euro/Dollar', price: 1.085, change: 0.3 },
    { id: 5, symbol: 'AAPL', name: 'Apple Inc', price: 185, change: 1.7 },
    { id: 6, symbol: 'TSLA', name: 'Tesla Inc', price: 240, change: -3.1 },  ]);

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search assets..."
        className="w-full bg-gray-700 rounded-lg px-4 py-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <div className="space-y-2 h-[calc(100vh-300px)] overflow-y-auto">
        {assets.filter(a => 
          a.symbol.toLowerCase().includes(search.toLowerCase()) ||
          a.name.toLowerCase().includes(search.toLowerCase())
        ).map(asset => (
          <div
            key={asset.id}
            onClick={() => onSelect(asset)}
            className={`p-3 rounded-lg cursor-pointer ${
              selectedAsset?.id === asset.id 
                ? 'bg-blue-900' 
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">{asset.symbol}</div>
                <div className="text-sm text-gray-400">{asset.name}</div>
              </div>
              <div className={`text-right ${
                asset.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                <div>${asset.price}</div>
                <div className="text-xs">{asset.change}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AssetSelector ;