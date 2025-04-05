import QrCodeGenerator from '@/components/QrCodeGenerator';

export default function DepositPage() {
  const walletAddress = '0x3FZbgi29vcjqGFRNdkf94kfMK';

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">إيداع الأموال</h1>
      
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">عنوان الإيداع</h2>
        
        <div className="flex flex-col items-center gap-4">
          <QrCodeGenerator value={walletAddress} />
          
          <div className="w-full p-3 bg-gray-100 rounded flex items-center justify-between">
            <span className="font-mono">{walletAddress}</span>
            <button 
              onClick={() => navigator.clipboard.writeText(walletAddress)}
              className="text-blue-600 hover:text-blue-800"
            >
              نسخ
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-4">آخر الإيداعات</h3>
          {/* يمكن إضافة قائمة بالإيداعات السابقة هنا */}
        </div>
      </div>
    </div>
  );
}