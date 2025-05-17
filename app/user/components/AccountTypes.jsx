import React from 'react';
import { BookOpenIcon, ArrowDownIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const AccountTypes = () => {
  // بيانات الحسابات (يمكن جلبها من API)
  const accountTypes = [
    {
      name: 'مايكرو',
      minDeposit: 50,
      features: {
        educationalMaterials: true,
        withdrawalPriority: false,
        maxTrade: 500,
        assetYield: '5%',
        personalManager: false
      },
      recommended: false
    },
    {
      name: 'بيسك',
      minDeposit: 500,
      features: {
        educationalMaterials: true,
        withdrawalPriority: true,
        maxTrade: 2500,
        assetYield: '10%',
        personalManager: false
      },
      recommended: true
    },
    {
      name: 'سيلفر',
      minDeposit: 5000,
      features: {
        educationalMaterials: true,
        withdrawalPriority: true,
        maxTrade: 10000,
        assetYield: '15%',
        personalManager: true
      },
      recommended: false
    }
  ];

  // بيانات الأسئلة الشائعة
  const faqs = [
    {
      question: 'كيف أغير نوع حسابي؟',
      answer: 'يمكنك تغيير نوع الحساب من خلال إعدادات الحساب أو التواصل مع الدعم.'
    },
    {
      question: 'هل يمكنني الترقية لاحقًا؟',
      answer: 'نعم، يمكنك ترقية حسابك في أي وقت عن طريق زيادة الرصيد.'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-900 text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">اختر الحساب المناسب لك</h2>

      {/* جدول للشاشات الكبيرة */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-4 text-right"></th>
              {accountTypes.map((account) => (
                <th 
                  key={account.name}
                  className={`px-6 py-4 relative ${account.recommended ? 'border-2 border-sky-500' : ''}`}
                >
                  {account.name}
                  {account.recommended && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs px-2 py-1 rounded-b">
                      موصى به
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {/* صف الحد الأدنى للإيداع */}
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 font-semibold">الحد الأدنى للإيداع</td>
              {accountTypes.map((account) => (
                <td 
                  key={account.name} 
                  className={`px-6 py-4 text-center ${account.recommended ? 'bg-gray-700/20' : ''}`}
                >
                  ${account.minDeposit}
                </td>
              ))}
            </tr>

            {/* صفوف الميزات */}
            {Object.keys(accountTypes[0].features).map((featureKey) => (
              <tr key={featureKey} className="border-b border-gray-700">
                <td className="px-6 py-4 font-semibold">{getFeatureLabel(featureKey)}</td>
                {accountTypes.map((account) => (
                  <td 
                    key={`${account.name}-${featureKey}`}
                    className={`px-6 py-4 text-center ${account.recommended ? 'bg-gray-700/20' : ''}`}
                  >
                    {renderFeatureValue(account.features[featureKey])}
                  </td>
                ))}
              </tr>
            ))}

            {/* أزرار الاشتراك */}
            <tr>
              <td className="px-6 py-4"></td>
              {accountTypes.map((account) => (
                <td key={account.name} className={`px-6 py-4 ${account.recommended ? 'bg-gray-700/20' : ''}`}>
                  <button
                    className={`w-full ${
                      account.recommended ? 'bg-sky-600 hover:bg-sky-700' : 'bg-emerald-600 hover:bg-emerald-700'
                    } text-white py-2 px-4 rounded-lg transition-colors`}
                  >
                    ابدأ الآن
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* بطاقات للشاشات الصغيرة */}
      <div className="md:hidden space-y-6">
        {accountTypes.map((account) => (
          <div
            key={account.name}
            className={`bg-gray-800 rounded-xl p-6 ${
              account.recommended ? 'border-2 border-sky-500' : 'border border-gray-700'
            } relative`}
          >
            {account.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm">
                موصى به
              </div>
            )}
            
            <h3 className="text-xl font-bold text-center mb-4">{account.name}</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>الحد الأدنى:</span>
                <span className="font-bold">${account.minDeposit}</span>
              </div>

              {Object.entries(account.features).map(([featureKey, value]) => (
                <div key={featureKey} className="flex items-center justify-between">
                  <span>{getFeatureLabel(featureKey)}</span>
                  {renderFeatureValue(value)}
                </div>
              ))}

              <button
                className={`w-full ${
                  account.recommended ? 'bg-sky-600 hover:bg-sky-700' : 'bg-emerald-600 hover:bg-emerald-700'
                } text-white py-3 px-6 rounded-lg transition-colors`}
              >
                ابدأ الآن
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* الأسئلة الشائعة */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-6">أسئلة شائعة</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer">
                  <span>{faq.question}</span>
                  <ArrowDownIcon className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-2 text-gray-400">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// دالة مساعدة لعرض الميزات
const renderFeatureValue = (value) => {
  if (typeof value === 'boolean') {
    return value ? (
      <CheckIcon className="w-6 h-6 mx-auto text-green-400" />
    ) : (
      <XMarkIcon className="w-6 h-6 mx-auto text-red-400" />
    );
  }
  return <span>{value}</span>;
};

// دالة مساعدة لعناوين الميزات
const getFeatureLabel = (featureKey) => {
  const labels = {
    educationalMaterials: 'مواد تعليمية',
    withdrawalPriority: 'أولوية سحب',
    maxTrade: 'حد الصفقة الأقصى',
    assetYield: 'عائد الأصول',
    personalManager: 'مدير حساب شخصي'
  };
  return labels[featureKey] || featureKey;
};

export default AccountTypes;