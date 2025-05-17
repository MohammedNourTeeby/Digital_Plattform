'use client'
import { useState, useEffect } from 'react'

export default function ProfileInterface() {
  // الحالات الرئيسية
  const [user, setUser] = useState({
    name: 'محمد أحمد',
    email: 'mohamed@example.com',
    phone: '+20123456789',
    country: 'مصر',
    accountType: 'فردي',
    registrationDate: '2023-01-15',
    verified: true
  })
  
  const [isEditing, setIsEditing] = useState(false)
  const [kycStatus, setKycStatus] = useState('pending')
  const [documents, setDocuments] = useState([])
  const [twoFAEnabled, setTwoFAEnabled] = useState(false)
  const [recoveryCodes, setRecoveryCodes] = useState([])

  // حالات نماذج التعديل
  const [editForm, setEditForm] = useState({...user})
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: ''
  })

  // توليد رموز الاسترداد
  const generateRecoveryCodes = () => {
    const codes = Array.from({length: 8}, () => 
      Math.random().toString(36).substr(2, 8).toUpperCase()
    )
    setRecoveryCodes(codes)
  }

  // معالجة تغيير الحقول
  const handleEditChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
  }

  // حفظ التغييرات
  const saveChanges = () => {
    setUser({...editForm})
    setIsEditing(false)
    // هنا يتم إرسال البيانات للواجهة الخلفية
  }

  // معالجة رفع الملفات
  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const newDoc = {
        id: Date.now(),
        name: file.name,
        status: 'pending'
      }
      setDocuments([...documents, newDoc])
      // هنا يتم رفع الملف للخادم
    }
  }

  // حالة التحقق (KYC)
  const getKycStatusBadge = () => {
    const statusClasses = {
      pending: 'bg-yellow-500 text-yellow-100',
      approved: 'bg-green-500 text-green-100',
      rejected: 'bg-red-500 text-red-100'
    }
    return statusClasses[kycStatus]
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* بطاقة المعلومات الشخصية */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl text-sky-400 font-bold mb-4">المعلومات الشخصية</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          {/* عرض المعلومات */}
          {!isEditing ? (
            <div className="space-y-2">
              <p><span className="text-sky-400">الاسم:</span> {user.name}</p>
              <p>
                <span className="text-sky-400">البريد الإلكتروني:</span> {user.email}
                <span className={`ml-2 px-2 py-1 rounded text-xs ${
                  user.verified ? 'bg-green-500 text-green-100' : 'bg-yellow-500 text-yellow-100'
                }`}>
                  {user.verified ? 'موثق' : 'غير موثق'}
                </span>
              </p>
              {/* ... باقي الحقول ... */}
              <button 
                onClick={() => setIsEditing(true)}
                className="mt-4 bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded"
              >
                تعديل البيانات
              </button>
            </div>
          ) : (
            /* نموذج التعديل */
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleEditChange}
                className="w-full bg-gray-700 rounded p-2 text-gray-300"
              />
              {/* ... باقي الحقول القابلة للتعديل ... */}
              <div className="flex gap-4">
                <button 
                  onClick={saveChanges}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                >
                  حفظ التغييرات
                </button>
                <button 
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* قسم التحقق (KYC) */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl text-sky-400 font-bold mb-4">التحقق (KYC)</h2>
        
        <div className="mb-6">
          <span className={`text-lg px-4 py-2 rounded-full ${getKycStatusBadge()}`}>
            {kycStatus === 'pending' && 'قيد المراجعة'}
            {kycStatus === 'approved' && 'تم التحقق'}
            {kycStatus === 'rejected' && 'مرفوض'}
          </span>
        </div>

        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
            <input 
              type="file" 
              onChange={handleFileUpload}
              className="hidden" 
              id="documentUpload"
            />
            <label 
              htmlFor="documentUpload"
              className="cursor-pointer text-sky-400 hover:text-sky-300"
            >
              اختر ملف للتحميل
            </label>
            <p className="text-gray-400 mt-2">
              {documents.length > 0 && `${documents.length} ملف مرفوع`}
            </p>
          </div>

          {/* قائمة المستندات المرفوعة */}
          <div className="space-y-2">
            {documents.map((doc) => (
              <div 
                key={doc.id}
                className="flex items-center justify-between bg-gray-700 p-3 rounded"
              >
                <span className="text-gray-300">{doc.name}</span>
                <span className={`px-2 py-1 rounded text-xs ${
                  doc.status === 'pending' ? 'bg-yellow-500 text-yellow-100' :
                  doc.status === 'approved' ? 'bg-green-500 text-green-100' :
                  'bg-red-500 text-red-100'
                }`}>
                  {doc.status === 'pending' && 'قيد المراجعة'}
                  {doc.status === 'approved' && 'مقبول'}
                  {doc.status === 'rejected' && 'مرفوض'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* إعدادات الأمان */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl text-sky-400 font-bold mb-4">إعدادات الأمان</h2>
        
        {/* تغيير كلمة المرور */}
        <div className="mb-6">
          <h3 className="text-lg text-sky-300 mb-3">تغيير كلمة المرور</h3>
          <div className="space-y-3 max-w-md">
            <input
              type="password"
              placeholder="كلمة المرور الحالية"
              className="w-full bg-gray-700 rounded p-2 text-gray-300"
              value={passwordForm.current}
              onChange={(e) => setPasswordForm({...passwordForm, current: e.target.value})}
            />
            {/* ... حقول كلمة المرور الجديدة ... */}
            <button className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded">
              تحديث كلمة المرور
            </button>
          </div>
        </div>

        {/* إعدادات 2FA */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sky-300">المصادقة الثنائية (2FA)</span>
            <button
              onClick={() => {
                setTwoFAEnabled(!twoFAEnabled)
                if (!twoFAEnabled) generateRecoveryCodes()
              }}
              className={`px-4 py-2 rounded ${
                twoFAEnabled 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              {twoFAEnabled ? 'مفعل' : 'غير مفعل'}
            </button>
          </div>

          {/* رموز الاسترداد */}
          {twoFAEnabled && (
            <div className="mt-4 bg-gray-700 p-4 rounded">
              <div className="text-red-400 mb-2">رموز الاسترداد:</div>
              <div className="grid grid-cols-2 gap-2">
                {recoveryCodes.map((code, index) => (
                  <code key={index} className="font-mono text-gray-300">
                    {code}
                  </code>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}