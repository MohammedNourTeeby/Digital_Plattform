import { useState } from 'react';
import { FaCoins, FaShieldAlt, FaGift, FaMagic, FaClock } from 'react-icons/fa';

// بيانات وهمية للمكافآت
const mockRewards = [
  {
    id: 1,
    name: "صفقة خالية من المخاطر",
    icon: <FaShieldAlt className="text-blue-400 text-2xl" />,
    description: "احصل على تعويض كامل في حالة الصفقة الخاسرة",
    type: "risk_free",
    status: "active",
    acquiredDate: "2024-03-01",
    expirationDate: "2024-04-01",
    daysLeft: 5
  },
  {
    id: 2,
    name: "معزز الأرباح 50%",
    icon: <FaCoins className="text-yellow-400 text-2xl" />,
    description: "زيادة الأرباح على الصفقات الناجحة",
    type: "profit_boost",
    status: "used",
    acquiredDate: "2024-02-15",
    expirationDate: "2024-03-15"
  },
  {
    id: 3,
    name: "كود ترويجي 100$",
    icon: <FaGift className="text-green-400 text-2xl" />,
    description: "إيداع أولي بقيمة 100 دولار",
    type: "promo_code",
    status: "expired",
    acquiredDate: "2024-01-10",
    expirationDate: "2024-02-10"
  },
];

const InventorySection = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  // فلترة المكافآت
  const filteredRewards = mockRewards.filter(reward => {
    const typeMatch = selectedType === 'all' || reward.type === selectedType;
    const statusMatch = selectedStatus === 'all' || reward.status === selectedStatus;
    return typeMatch && statusMatch;
  });

  // معالجة تفعيل المكافأة
  const handleActivate = (rewardId) => {
    console.log(`تفعيل المكافأة ${rewardId}`);
    // هنا ستكون منطق التفاعل مع الواجهة الخلفية
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* الفلاتر */}
      <div className="mb-6 flex gap-4">
        <select 
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">جميع الأنواع</option>
          <option value="risk_free">صفقات خالية من المخاطر</option>
          <option value="profit_boost">معززات الأرباح</option>
          <option value="promo_code">رموز ترويجية</option>
        </select>

        <select 
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="all">جميع الحالات</option>
          <option value="active">نشطة</option>
          <option value="used">مستخدمة</option>
          <option value="expired">منتهية</option>
        </select>
      </div>

      {/* شبكة المكافآت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRewards.map((reward) => (
          <div 
            key={reward.id}
            className={`bg-gray-800 rounded-lg p-4 shadow-md border-l-4 ${
              reward.status === 'active' ? 'border-yellow-400' :
              reward.status === 'used' ? 'border-green-500' :
              'border-red-500'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {reward.icon}
                <h3 className="text-white font-semibold">{reward.name}</h3>
              </div>
              <span className={`text-sm ${
                reward.status === 'active' ? 'text-yellow-400' :
                reward.status === 'used' ? 'text-green-400' :
                'text-red-400'
              }`}>
                {reward.status === 'active' ? 'نشطة' : 
                 reward.status === 'used' ? 'مستخدمة' : 'منتهية'}
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-4">{reward.description}</p>

            <div className="flex justify-between text-sm text-gray-400 mb-4">
              <div>
                <div className="flex items-center gap-1">
                  <FaClock className="text-gray-500" />
                  <span>تاريخ الانتهاء: {reward.expirationDate}</span>
                </div>
                {reward.daysLeft && reward.daysLeft <= 7 && (
                  <span className="text-red-400 text-xs">!تنتهي قريبًا</span>
                )}
              </div>
            </div>

            <button
              onClick={() => handleActivate(reward.id)}
              className={`w-full py-2 rounded-lg ${
                reward.status === 'active' 
                ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                : 'bg-gray-700 cursor-not-allowed text-gray-400'
              }`}
              disabled={reward.status !== 'active'}
            >
              {reward.status === 'active' ? 'تفعيل الآن' : 'غير متاح'}
            </button>
          </div>
        ))}
      </div>

      {/* قسم كسب المكافآت (اختياري) */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
          <FaMagic className="text-purple-400" /> كيفية كسب المزيد من المكافآت
        </h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>أكمل المهام اليومية</li>
          <li>شارك في المسابقات الأسبوعية</li>
          <li>قم بإحالة أصدقائك</li>
          <li>احتفل بأيام التداول الخاصة</li>
        </ul>
      </div>
    </div>
  );
};

export default InventorySection;