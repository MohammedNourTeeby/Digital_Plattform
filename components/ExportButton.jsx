"use client"
import { saveAs } from 'file-saver';
import { utils, writeFile } from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const ExportButton = ({ format }) => {
  const handleExport = () => {
    // بيانات افتراضية للتجربة
    const data = [
      { label: 'الإيرادات', value: 150000 },
      { label: 'المصروفات', value: 75000 }
    ];

    if (format === 'excel') {
      const ws = utils.json_to_sheet(data);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "التقرير");
      writeFile(wb, 'تقرير.xlsx');
    } else {
      const doc = new jsPDF();
      autoTable(doc, {
        head: [['البند', 'القيمة']],
        body: data.map(item => [item.label, item.value]),
        styles: { font: 'arabic', halign: 'right' }
      });
      doc.save('تقرير.pdf');
    }
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
    >
      {format === 'excel' ? '📊 تصدير إكسل' : '📄 تصدير PDF'}
    </button>
  );
};

export default ExportButton;