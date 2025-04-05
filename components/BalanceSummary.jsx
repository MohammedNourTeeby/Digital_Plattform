export default function BalanceSummary({ data }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map(currency => (
          <div key={currency.symbol} className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500">{currency.name}</h3>
                <p className="text-2xl font-bold">
                  {currency.balance} {currency.symbol}
                </p>
                <p className="text-gray-500">≈ {currency.fiatValue} USD</p>
              </div>
              <img 
                src={`/icons/${currency.symbol}.svg`} 
                className="w-12 h-12"
                alt={currency.name}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }