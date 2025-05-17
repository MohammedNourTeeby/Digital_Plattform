import { useState, useEffect } from 'react';
import { TrophyIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import Countdown from 'react-countdown';

const Battles = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedBattle, setSelectedBattle] = useState(null);
  const TABS = [
    { label: 'نشطة', key: 'active' },
    { label: 'قادمة', key: 'upcoming' },
    { label: 'منتهية', key: 'ended' }
  ];
  // بيانات وهمية للبطولات
  const mockBattles = {
    active: [
      {
        id: 1,
        name: 'بطولة الذهب الأسبوعية',
        logo: '🎯',
        startTime: Date.now() + 3600000,
        endTime: Date.now() + 86400000,
        prizePool: 5000,
        entryFee: 50,
        participants: 142,
        rules: 'التداول على أصول الذهب فقط، الحد الأدنى 10 صفقات',
        assets: ['Gold/XAUUSD', 'Gold/XAUGBP'],
        prizes: [2500, 1500, 1000],
        leaderboard: [
          { id: 1, name: 'محمد علي', profit: '+24.5%' },
          { id: 2, name: 'أحمد حسن', profit: '+18.3%' },
          // ... بيانات أخرى
        ],
        isParticipant: true
      }
    ],
   upcoming: [], // مصفوفة فارغة بدل التعليق
    ended: []  
  };

  const BattleCard = ({ battle }) => (
    <div className="bg-gradient-to-br from-purple-700 to-indigo-800 rounded-xl p-6 shadow-xl mb-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-3xl mr-3">{battle.logo}</span>
          <h3 className="text-xl font-bold">{battle.name}</h3>
        </div>
        <span className="bg-green-500 text-xs px-3 py-1 rounded-full">نشطة</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center">
          <ClockIcon className="w-5 h-5 mr-2" />
          <Countdown date={battle.endTime} renderer={({ hours, minutes }) => 
            <span>{hours} س : {minutes} د</span>
          }/>
        </div>
        <div className="flex items-center">
          <CurrencyDollarIcon className="w-5 h-5 mr-2" />
          <span>{battle.prizePool.toLocaleString()} $</span>
        </div>
        <div className="flex items-center">
          <UserGroupIcon className="w-5 h-5 mr-2" />
          <span>{battle.participants} مشارك</span>
        </div>
        <div className="flex items-center">
          <ChartBarIcon className="w-5 h-5 mr-2" />
          <span>رسم الدخول: {battle.entryFee} $</span>
        </div>
      </div>

      <button 
        onClick={() => setSelectedBattle(battle)}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition"
      >
        {battle.isParticipant ? 'استمرار التداول' : 'انضم الآن'}
      </button>
    </div>
  );

  const BattleDetails = ({ battle }) => (
    <div className="bg-gray-800 text-white p-6 rounded-xl">
      <button 
        onClick={() => setSelectedBattle(null)}
        className="mb-6 text-gray-400 hover:text-white"
      >
        ← العودة للقائمة
      </button>

      <div className="grid md:grid-cols-3 gap-6">
        {/* معلومات البطولة */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">{battle.name}</h2>
          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">📜 قواعد البطولة:</h3>
            <p>{battle.rules}</p>
          </div>
          
          {/* واجهة التداول */}
          {battle.isParticipant && (
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-4">📊 منصة التداول</h3>
              <div className="grid grid-cols-2 gap-4">
                <select className="bg-gray-800 rounded p-2">
                  {battle.assets.map(asset => (
                    <option key={asset}>{asset}</option>
                  ))}
                </select>
                <input type="number" placeholder="المبلغ" className="bg-gray-800 rounded p-2" />
                <button className="bg-green-500 p-2 rounded">شراء</button>
                <button className="bg-red-500 p-2 rounded">بيع</button>
              </div>
            </div>
          )}
        </div>

        {/* لوحة المتصدرين */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-4">🏆 المتصدرون</h3>
          <div className="space-y-3">
            {battle.leaderboard.map((user, idx) => (
              <div 
                key={user.id}
                className={`p-3 rounded ${user.id === 1 ? 'bg-yellow-500 bg-opacity-20' : 'bg-gray-600'} ${user.id === 0 ? 'border-2 border-green-500' : ''}`}
              >
                <div className="flex justify-between">
                  <span>#{idx + 1} {user.name}</span>
                  <span className={user.profit.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                    {user.profit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* قائمة الجوائز */}
      <div className="mt-6 bg-gray-700 p-4 rounded-lg">
        <h3 className="font-bold mb-4">🎖 توزيع الجوائز</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          {battle.prizes.map((prize, idx) => (
            <div key={idx} className="p-3 bg-gray-800 rounded">
              <span className="text-yellow-300">#{idx + 1}</span>
              <div className="text-lg font-bold">{prize.toLocaleString()} $</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-6">🎮 بطولات التداول</h1>
      
      {/* التبويبات */}
     <div className="flex mb-6 border-b border-gray-700">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 ${activeTab === tab.key ? 'border-b-2 border-green-500' : 'text-gray-400'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {selectedBattle ? (
        <BattleDetails battle={selectedBattle} />
      ) : (
        <div>
          {/* إضافة تحقق من وجود البيانات */}
          {(mockBattles[activeTab] || []).map(battle => (
            <BattleCard key={battle.id} battle={battle} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Battles;