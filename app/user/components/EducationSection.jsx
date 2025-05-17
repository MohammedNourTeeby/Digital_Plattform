import React, { useState, useEffect } from 'react';

// بيانات وهمية
const mockMaterials = [
  {
    id: 1,
    title: 'مقدمة في التحليل الفني',
    type: 'مقالات',
    level: 'مبتدئ',
    topic: 'تحليل فني',
    description: 'الدليل الشامل لفهم أساسيات التحليل الفني في التداول',
    publishDate: '2024-03-15',
    content: `<h2>الفصل الأول: المفاهيم الأساسية</h2>
              <p>التحليل الفني هو دراسة حركة السوق باستخدام...</p>
              <img src="https://picsum.photos/600/300" alt="تحليل فني" />`,
    thumbnail: 'https://picsum.photos/300/200?1',
    related: [2, 3]
  },
  {
    id: 2,
    title: 'أساسيات إدارة المخاطر',
    type: 'فيديوهات',
    level: 'متوسط',
    topic: 'إدارة مخاطر',
    description: 'كيفية حماية رأس المال وتحديد حجم الصفقة الأمثل',
    publishDate: '2024-03-10',
    duration: '12:30',
    contentUrl: 'https://www.youtube.com/embed/abc123',
    thumbnail: 'https://picsum.photos/300/200?2',
    related: [1, 4]
  },
  {
    id: 3,
    title: 'التحليل الأساسي للأسواق',
    type: 'مقالات',
    level: 'متقدم',
    topic: 'أساسي',
    description: 'تحليل العوامل الاقتصادية المؤثرة على الأسواق',
    publishDate: '2024-03-05',
    content: `<h2>العوامل الاقتصادية الرئيسية</h2>
              <p>تشمل العوامل الأساسية أسعار الفائدة...</p>`,
    thumbnail: 'https://picsum.photos/300/200?3',
    related: [1, 5]
  },
  {
    id: 4,
    title: 'استراتيجيات التداول اليومي',
    type: 'فيديوهات',
    level: 'متوسط',
    topic: 'تحليل فني',
    description: 'أفضل الاستراتيجيات للتداول قصير المدى',
    publishDate: '2024-02-28',
    duration: '18:45',
    contentUrl: 'https://www.youtube.com/embed/xyz456',
    thumbnail: 'https://picsum.photos/300/200?4',
    related: [2, 5]
  },
  {
    id: 5,
    title: 'أدوات التحليل المتقدمة',
    type: 'دروس',
    level: 'متقدم',
    topic: 'تحليل فني',
    description: 'استخدام المؤشرات الفنية المتقدمة في التداول',
    publishDate: '2024-02-20',
    content: `<div>
              <h3>الخطوة 1: فهم المؤشرات</h3>
              <p>المؤشرات الفنية مثل MACD و RSI...</p>
            </div>`,
    thumbnail: 'https://picsum.photos/300/200?5',
    related: [3, 4]
  }
];

const EducationalResources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    contentType: '',
    level: '',
    topic: ''
  });
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // محاكاة جلب البيانات من API
  useEffect(() => {
    setTimeout(() => {
      setMaterials(mockMaterials);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesContentType = !filters.contentType || material.type === filters.contentType;
    const matchesLevel = !filters.level || material.level === filters.level;
    const matchesTopic = !filters.topic || material.topic === filters.topic;
    
    return matchesSearch && matchesContentType && matchesLevel && matchesTopic;
  });

  const getLevelBadgeColor = (level) => {
    switch(level) {
      case 'مبتدئ': return 'bg-green-500';
      case 'متوسط': return 'bg-yellow-500';
      case 'متقدم': return 'bg-red-500';
      default: return 'bg-gray-600';
    }
  };

  const getRelatedMaterials = (currentId) => {
  return materials.filter(m => 
    mockMaterials.find(mock => mock.id === currentId)?.related.includes(m.id)
  );
};
  if (selectedMaterial) {
    return (
      <div className="p-6 text-gray-100 min-h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => setSelectedMaterial(null)}
            className="mb-6 text-blue-400 hover:text-blue-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            العودة إلى القائمة
          </button>

          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <h1 className="text-3xl font-bold mb-4 md:mb-0">{selectedMaterial.title}</h1>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full ${getLevelBadgeColor(selectedMaterial.level)}`}>
                  {selectedMaterial.level}
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500">
                  {selectedMaterial.type}
                </span>
              </div>
            </div>

            {selectedMaterial.type === 'فيديوهات' && (
              <div className="aspect-video bg-gray-700 rounded-lg mb-6 overflow-hidden">
                <iframe 
                  src={selectedMaterial.contentUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {selectedMaterial.type === 'مقالات' && (
              <div 
                className="prose prose-invert max-w-none mb-6"
                dangerouslySetInnerHTML={{ __html: selectedMaterial.content }}
              />
            )}

            {selectedMaterial.type === 'دروس' && (
              <div className="bg-gray-700 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">خطوات الدرس</h3>
                <div 
                  className="prose prose-invert"
                  dangerouslySetInnerHTML={{ __html: selectedMaterial.content }}
                />
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                  بدء الاختبار
                </button>
              </div>
            )}

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">مواد ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getRelatedMaterials(selectedMaterial.id).map(material => (
                  <div 
                    key={material.id}
                    className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors"
                    onClick={() => setSelectedMaterial(material)}
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-bold flex-1">{material.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-sm ${getLevelBadgeColor(material.level)}`}>
                        {material.level}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">{material.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* شريط البحث والفلاتر */}
        <div className="lg:flex gap-6 mb-8">
          <div className="lg:w-3/4 mb-4 lg:mb-0">
            <input
              type="text"
              placeholder="ابحث عن مواد تعليمية..."
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="lg:w-1/4 flex gap-3">
            <select
              className="bg-gray-800 rounded-lg px-3 py-2 text-gray-100 flex-1"
              value={filters.contentType}
              onChange={(e) => setFilters({...filters, contentType: e.target.value})}
            >
              <option value="">كل الأنواع</option>
              <option value="مقالات">مقالات</option>
              <option value="فيديوهات">فيديوهات</option>
              <option value="دروس">دروس</option>
            </select>
            
            <select
              className="bg-gray-800 rounded-lg px-3 py-2 text-gray-100 flex-1"
              value={filters.level}
              onChange={(e) => setFilters({...filters, level: e.target.value})}
            >
              <option value="">كل المستويات</option>
              <option value="مبتدئ">مبتدئ</option>
              <option value="متوسط">متوسط</option>
              <option value="متقدم">متقدم</option>
            </select>

            <select
              className="bg-gray-800 rounded-lg px-3 py-2 text-gray-100 flex-1"
              value={filters.topic}
              onChange={(e) => setFilters({...filters, topic: e.target.value})}
            >
              <option value="">كل المواضيع</option>
              <option value="تحليل فني">تحليل فني</option>
              <option value="أساسي">أساسي</option>
              <option value="إدارة مخاطر">إدارة مخاطر</option>
            </select>
          </div>
        </div>

        {/* حالة التحميل */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
          </div>
        )}

        {/* عرض المواد */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map(material => (
              <div
                key={material.id}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedMaterial(material)}
              >
                <div className="relative">
                  <img 
                    src={material.thumbnail}
                    alt={material.title}
                    className="w-full h-48 object-cover"
                  />
                  {material.type === 'فيديوهات' && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{material.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-sm ${getLevelBadgeColor(material.level)}`}>
                      {material.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{material.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{new Date(material.publishDate).toLocaleDateString()}</span>
                    {material.type === 'فيديوهات' && (
                      <span>⏳ {material.duration}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* حالة عدم وجود نتائج */}
        {!isLoading && filteredMaterials.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            لا توجد نتائج مطابقة لبحثك
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalResources;