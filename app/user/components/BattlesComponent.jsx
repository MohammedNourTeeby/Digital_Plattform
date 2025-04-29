import { RiHome4Line, RiTrophyLine } from 'react-icons/ri';

const BattlesComponent = () => {
  return (
    <div className="flex flex-col h-screen bg-[#1a237e] text-white">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">المعارك</h2>
        <button className="text-2xl"></button>
      </div>

      {/* Banner Section */}
      <div className="relative w-full h-64 mt-8">
        <img 
          src="https://via.placeholder.com/350x150?text=BAZES+Logo" 
          alt="BAZES Logo" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Smileys and Lightning Bolt */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-4">
            <div className="bg-blue-500 p-2 rounded-full"><span role="img">😊</span></div>
            <div className="bg-blue-500 p-2 rounded-full"><span role="img">⚡</span></div>
            <div className="bg-blue-500 p-2 rounded-full"><span role="img">😄</span></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow p-8 flex flex-col items-center">
        {/* Button */}
        <button className="bg-blue-500 px-4 py-2 mb-4 rounded-lg">
          انضم إلى مكة التداول
        </button>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4">تقديم المعارك</h3>

        {/* Description */}
        <p className="text-center mb-8">
          يتنافس المتداولون ضد بعضهم البعض في الوقت الفعلي للتداول، ويتم تحديد الفائز من خلال أعلى ربح تم تحقيقه. انضم إلى الحدث من خلال تحديد معركة وإبدأ التداول للفوز بمكافآت مثيرة وكسب حقوق المفاخرة.
          لا تفوت فرصة عرض مهاراتك في التداول والاستمتاع مع معاركنا.
        </p>

        {/* Main Button */}
        <button className="bg-blue-500 px-8 py-4 mb-4 rounded-lg text-xl">
          البداية
        </button>

        {/* Privacy Policy Link */}
        <a href="#" className="text-blue-500 underline">
          سياسة الخصوصية
        </a>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 w-full bg-[#1a237e] p-4 flex justify-around">
        <div className="flex flex-col items-center">
          <RiHome4Line className="text-2xl mb-2" />
          <span>سجل</span>
        </div>
        <div className="flex flex-col items-center">
          <RiTrophyLine className="text-2xl mb-2" />
          <span>المعارك</span>
        </div>
      </div>
    </div>
  );
};

export default BattlesComponent;