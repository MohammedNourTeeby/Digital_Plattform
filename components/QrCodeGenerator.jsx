import QRCode from 'react-qr-code';

export default function QrCodeGenerator({ value }) {
  return (
    <div className="p-4 bg-white rounded">
      <QRCode 
        value={value}
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
      />
    </div>
  );
}