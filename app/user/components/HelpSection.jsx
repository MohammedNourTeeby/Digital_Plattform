import React, { useState } from 'react';

const SupportInterface = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    attachment: null,
  });

  // بيانات الأسئلة الشائعة
  const faqCategories = [
    {
      category: 'الحساب',
      questions: [
        { question: 'كيف أنشئ حسابًا جديدًا؟', answer: 'إجابة حول إنشاء الحساب...' },
        { question: 'كيف أغير كلمة المرور؟', answer: 'إجابة حول تغيير كلمة المرور...' },
      ],
    },
    // إضافة فئات وأسئلة أخرى هنا
  ];

  // تصفية الأسئلة حسب البحث
   const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase())
    ) // تم إضافة القوس الناقص
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // إرسال البيانات للواجهة الخلفية
    console.log(formData);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 p-6">
      {/* قسم الأسئلة الشائعة */}
      <section className="bg-gray-900 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-sky-500 mb-6">الأسئلة الشائعة</h2>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="ابحث في الأسئلة..."
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredFAQs.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            {category.questions.map((faq, idx) => (
              <details key={idx} className="group mb-3 bg-gray-800 rounded-lg p-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-medium">{faq.question}</span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-gray-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        ))}
      </section>

      {/* معلومات الاتصال */}
      <section className="bg-gray-900 rounded-lg p-6 mb-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-sky-500 mb-6">معلومات الاتصال</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="font-medium">الدعم العربي: +123456789</p>
                <p className="text-sm text-gray-400">24/7</p>
              </div>
            </div>
            {/* إضافة معلومات اتصال أخرى هنا */}
          </div>
        </div>

        {/* نموذج الاتصال */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-3 rounded-lg bg-gray-800"
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 rounded-lg bg-gray-800"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="الموضوع"
              className="w-full p-3 rounded-lg bg-gray-800"
              required
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>
          <div>
            <textarea
              placeholder="الرسالة"
              className="w-full p-3 rounded-lg bg-gray-800 h-32"
              required
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-sky-600 px-4 py-2 rounded-lg">
              إرفاق ملف
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <button type="submit" className="bg-sky-600 px-6 py-2 rounded-lg hover:bg-sky-700 transition">
              إرسال
            </button>
          </div>
        </form>
      </section>

      {/* زر الدردشة العائم */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 bg-sky-600 p-4 rounded-full shadow-lg hover:bg-sky-700 transition"
      >
        💬
      </button>

      {/* نافذة الدردشة */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-gray-900 rounded-lg shadow-xl">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h3 className="font-semibold">الدردشة المباشرة</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white">×</button>
          </div>
          <div className="h-64 p-4 overflow-y-auto">
            {/* محتوى الدردشة هنا */}
            <p className="text-gray-400 text-center">مرحبًا! كيف يمكننا مساعدتك؟</p>
          </div>
          <div className="p-4 border-t border-gray-700">
            <input
              type="text"
              placeholder="اكتب رسالتك..."
              className="w-full p-2 rounded-lg bg-gray-800"
            />
          </div>
        </div>
      )}

      {/* (اختياري) روابط التواصل الاجتماعي */}
      <div className="flex gap-4 justify-center mt-8">
        <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
        <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
        <a href="#" className="text-gray-400 hover:text-white transition">Telegram</a>
      </div>
    </div>
  );
};

export default SupportInterface;