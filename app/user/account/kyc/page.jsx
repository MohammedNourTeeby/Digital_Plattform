'use client';
import { useState } from 'react';
import KYCStatus from '@/components/KYCStatus';

export default function KYCPage() {
  const [kycData, setKycData] = useState({
    status: 'pending',
    documents: []
  });

  const handleUpload = (e) => {
    // محاكاة رفع الملفات
    const files = Array.from(e.target.files);
    setKycData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files]
    }));
  };

  return (
    <div className="max-w-2xl space-y-6">
      <KYCStatus status={kycData.status} />
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">المستندات المطلوبة:</h3>
        <ul className="list-disc pl-6">
          <li>صورة الهوية الشخصية</li>
          <li>إثبات العنوان</li>
        </ul>
      </div>

      <div>
        <label className="block mb-2">رفع المستندات</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input 
            type="file" 
            multiple 
            onChange={handleUpload}
            className="hidden" 
            id="kyc-upload"
          />
          <label 
            htmlFor="kyc-upload"
            className="cursor-pointer text-blue-600 hover:text-blue-800"
          >
            انقر لرفع الملفات
          </label>
          <p className="text-sm text-gray-500 mt-2">الحد الأقصى 5 ملفات</p>
        </div>

        <div className="mt-4">
          {kycData.documents.map((doc, i) => (
            <div key={i} className="flex items-center justify-between p-2 border-b">
              <span>{doc.name}</span>
              <button className="text-red-600 hover:text-red-800">حذف</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}