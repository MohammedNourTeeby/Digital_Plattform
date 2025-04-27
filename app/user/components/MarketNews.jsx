'use client'
import { FireIcon } from '@heroicons/react/24/outline'

const MarketNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Federal Reserve Announces Interest Rate Decision',
      source: 'Bloomberg',
      timestamp: '2h ago',
      impact: 'high'
    },
    {
      id: 2,
      title: 'ECB Signals Potential Policy Shift in Q3',
      source: 'Financial Times',
      timestamp: '4h ago',
      impact: 'medium'
    },
    {
      id: 3,
      title: 'Bitcoin Volatility Hits 6-Month Low Amid Stable Market',
      source: 'CoinDesk',
      timestamp: '6h ago',
      impact: 'low'
    }
  ]

  return (
    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <FireIcon className="h-5 w-5 text-orange-500" />
        <h3 className="text-lg font-semibold text-gray-900">Market News</h3>
      </div>
      
      <div className="space-y-4">
        {newsItems.map((item) => (
          <div 
            key={item.id}
            className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.source}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                item.impact === 'high' ? 'bg-red-100 text-red-800' :
                item.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {item.impact.charAt(0).toUpperCase() + item.impact.slice(1)}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-2">{item.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketNews