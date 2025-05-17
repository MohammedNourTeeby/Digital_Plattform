import React from 'react';
import { 
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CommandLineIcon, // أيقونة سطر الأوامر (بديل لـ Linux)
  CpuChipIcon,     // أيقونة المعالج (بديل لـ Windows)
  SwatchIcon       // أيقونة الألوان (بديل لـ macOS)
} from '@heroicons/react/24/outline';

// أيقونة أندرويد المخصصة
const AndroidIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9993-.9993.9993m-11.046 0c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9993-.9993.9993m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1694 1.0426L4.8083 5.3903a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.8347 11.027 1.1422 13.8033 1.1422 17.0156v.284c0 1.511 1.2223 2.7333 2.7333 2.7333h16.249c1.511 0 2.7333-1.2223 2.7333-2.7333v-.284c0-3.2123-1.6925-5.9886-4.1907-7.6942M3.7094 17.2996c0-2.5355 1.3623-4.8612 3.5657-6.1087.7397 1.2172 2.3405 2.1087 4.7249 2.1087s3.9852-.8915 4.7249-2.1087c2.2034 1.2475 3.5657 3.5732 3.5657 6.1087v.284c0 1.0324-.8362 1.8686-1.8686 1.8686H5.578c-1.0324 0-1.8686-.8362-1.8686-1.8686v-.284z"/>
  </svg>
);

// بيانات وهمية مع الأيقونات البديلة
const mockData = {
  desktopApp: {
    title: "تطبيق سطح المكتب",
    description: "تداول بسلاسة على جهازك الكمبيوتر مع واجهة متكاملة وميزات متقدمة",
    features: ["مخططات متقدمة", "إشعارات فورية", "دعم متعدد اللغات", "تحديثات حية"],
    downloads: [
      { 
        os: 'Windows', 
        icon: CpuChipIcon, // أيقونة المعالج
        color: 'bg-blue-600' 
      },
      { 
        os: 'macOS', 
        icon: SwatchIcon, // أيقونة الألوان
        color: 'bg-gray-900' 
      },
      { 
        os: 'Linux', 
        icon: CommandLineIcon, // أيقونة سطر الأوامر
        color: 'bg-yellow-600' 
      }
    ]
  },
  mobileApp: {
    title: "تطبيق الهاتف المحمول",
    description: "تداول من أي مكان مع تطبيقنا المحمول المصمم لتجربة مثالية",
    features: ["واجهة سهلة الاستخدام", "تحديثات فورية", "أمان متقدم", "دعم على مدار الساعة"],
    downloads: [
      { 
        store: 'App Store', 
        icon: SwatchIcon, 
        color: 'bg-black', 
        link: '#' 
      },
      { 
        store: 'Google Play', 
        icon: AndroidIcon, 
        color: 'bg-green-600', 
        link: '#' 
      }
    ],
    qrCode: 'https://via.placeholder.com/150/1a202c/FFFFFF?text=QR+Code',
    screenshots: [
      'https://via.placeholder.com/300/2d3748/FFFFFF?text=Mobile+Screen+1',
      'https://via.placeholder.com/300/2d3748/FFFFFF?text=Mobile+Screen+2'
    ]
  }
};

const AppsInterface = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-white mb-12">تطبيقات المنصة</h1>

      {/* قسم سطح المكتب */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gray-800 rounded-lg shadow-md p-8">
          <div className="flex items-center mb-8">
            <ComputerDesktopIcon className="h-12 w-12 text-blue-500 mr-4" />
            <h2 className="text-2xl font-semibold text-white">{mockData.desktopApp.title}</h2>
          </div>
          
          <p className="text-gray-300 mb-6">{mockData.desktopApp.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {mockData.desktopApp.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-3"/>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {mockData.desktopApp.downloads.map((download, index) => {
              const IconComponent = download.icon; // تخزين الأيقونة في متغير مخصص
              return (
                <a
                  key={index}
                  href="#"
                  className={`${download.color} flex items-center px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity`}
                >
                  <IconComponent className="h-6 w-6 mr-2" /> {/* استخدام المتغير هنا */}
                  <span>تحميل لـ {download.os}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* قسم الهاتف المحمول */}
      <section className="max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-md p-8">
          <div className="flex items-center mb-8">
            <DevicePhoneMobileIcon className="h-12 w-12 text-purple-500 mr-4" />
            <h2 className="text-2xl font-semibold text-white">{mockData.mobileApp.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6">{mockData.mobileApp.description}</p>
              
              <div className="grid grid-cols-1 gap-6 mb-8">
                {mockData.mobileApp.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3"/>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {mockData.mobileApp.downloads.map((download, index) => {
                  const IconComponent = download.icon; // تخزين الأيقونة في متغير مخصص
                  return (
                    <a
                      key={index}
                      href={download.link}
                      className={`${download.color} flex items-center px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity`}
                    >
                      <IconComponent className="h-6 w-6 mr-2" /> {/* استخدام المتغير هنا */}
                      <span>{download.store}</span>
                    </a>
                  )
                })}
              </div>

              <div className="bg-white p-4 rounded-lg inline-block">
                <img 
                  src={mockData.mobileApp.qrCode} 
                  alt="QR Code" 
                  className="w-32 h-32"
                />
                <p className="text-gray-800 text-sm mt-2 text-center">مسح رمز QR</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {mockData.mobileApp.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Mobile screenshot ${index + 1}`}
                  className="rounded-lg border-2 border-gray-700"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppsInterface;