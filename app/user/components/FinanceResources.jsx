// FinanceResources.js
import { useState } from 'react';

const FinanceResources = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <h2 className="text-center mb-4">إعداد</h2>
      <p className="text-sm text-right mb-2">بلدك هو سوريا. دولة أخرى؟ تغيير</p>
      <div className="flex flex-col space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <span className="text-xl font-bold">USDT, TON, Bitcoin, Ethereum</span>
          <div className="flex justify-end mt-2">
            {/* أضف أيقونات العملات */}
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <span className="text-xl font-bold">Maestro, MasterCard</span>
          <div className="flex justify-end mt-2">
            {/* أضف أيقونات البطاقات */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceResources;