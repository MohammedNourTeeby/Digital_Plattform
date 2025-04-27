'use client'
import { useState } from 'react'
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline'

const TradingForm = () => {
  const [orderType, setOrderType] = useState('market')
  const [formData, setFormData] = useState({
    side: 'buy',
    amount: '',
    price: '',
    leverage: '1'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your order submission logic here
    console.log('Order submitted:', formData)
  }

  return (
    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setFormData({ ...formData, side: 'buy' })}
          className={`flex-1 p-2 rounded-lg transition-colors ${
            formData.side === 'buy' 
              ? 'bg-green-100 text-green-700 ring-2 ring-green-500' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Buy
        </button>
        <button
          type="button"
          onClick={() => setFormData({ ...formData, side: 'sell' })}
          className={`flex-1 p-2 rounded-lg transition-colors ${
            formData.side === 'sell' 
              ? 'bg-red-100 text-red-700 ring-2 ring-red-500' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Sell
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Order Type</label>
            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="market">Market</option>
              <option value="limit">Limit</option>
              <option value="stop">Stop</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Leverage</label>
            <div className="relative">
              <select
                value={formData.leverage}
                onChange={(e) => setFormData({ ...formData, leverage: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 pr-8"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <input
            type="number"
            step="0.01"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.00"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            required
          />
        </div>

        {orderType !== 'market' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="number"
              step="0.0001"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="0.0000"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required={orderType !== 'market'}
            />
          </div>
        )}

        <div className="mt-6">
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
        </div>
      </form>
    </div>
  )
}

export default TradingForm