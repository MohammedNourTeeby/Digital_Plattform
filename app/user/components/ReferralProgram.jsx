import { useState } from 'react';
import { HiOutlineDuplicate, HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ReferralProgram = () => {
  const [isCopied, setIsCopied] = useState(false);
  const referralLink = "https://expertoption.com/r/username123";
  
  // بيانات وهمية
  const stats = {
    totalReferrals: 45,
    successfulReferrals: 32,
    totalEarnings: 2560.50
  };

  const marketingMaterials = [
    { type: 'banner', url: '/banners/banner1.jpg' },
    { type: 'text', content: 'انضم الآن واحصل على مكافأة 50$!' }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      {/* قسم رابط الإحالة */}
      <div className="bg-indigo-900 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">شارك الرابط واكسب المكافآت</h2>
        <div className="flex gap-2">
          <input 
            type="text" 
            value={referralLink} 
            readOnly 
            className="flex-1 bg-gray-700 p-3 rounded-lg text-gray-200" 
          />
         <button onClick={copyToClipboard}>
      <HiOutlineDuplicate className="w-5 h-5" />
      {isCopied ? 'تم النسخ!' : 'نسخ'}
    </button>
        </div>
      </div>

      {/* أزرار المشاركة الاجتماعية */}
      <div className="bg-gray-700 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">مشاركة عبر:</h3>
        <div className="flex gap-4">
         <button><FaFacebook className="w-6 h-6" /></button>
    <button><FaTwitter className="w-6 h-6" /></button>
    <button><HiOutlineMail className="w-6 h-6" /></button>
    <button><FaLinkedin className="w-6 h-6" /></button>
        </div>
      </div>

      {/* إحصائيات الإحالة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-700 p-6 rounded-lg text-center">
          <p className="text-2xl font-bold">{stats.totalReferrals}</p>
          <p className="text-gray-200">إجمالي الإحالات</p>
        </div>
        <div className="bg-blue-700 p-6 rounded-lg text-center">
          <p className="text-2xl font-bold">{stats.successfulReferrals}</p>
          <p className="text-gray-200">إحالات ناجحة</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg text-center">
          <p className="text-2xl font-bold">${stats.totalEarnings.toFixed(2)}</p>
          <p className="text-gray-200">أرباح إجمالية</p>
        </div>
      </div>

      {/* شرح الفوائد */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">مزايا للمُحيل:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>مكافأة 10% من إيداعات المحال</li>
            <li>مكافآت تراكمية لكل إحالة ناجحة</li>
            <li>وصول إلى برنامج المزايا VIP</li>
          </ul>
        </div>
        
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">مزايا للمُحال:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>مكافأة ترحيبية 50$ عند التسجيل</li>
            <li>عمولات تداول مخفضة</li>
            <li>دعم فني مميز</li>
          </ul>
        </div>
      </div>

      {/* مواد تسويقية */}
      <div className="bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">مواد ترويجية</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {marketingMaterials.map((material, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              {material.type === 'banner' ? (
                <img 
                  src={material.url} 
                  alt="Banner" 
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <p className="text-gray-300">{material.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;