// components/ReportCard.jsx
export default function ReportCard({ title, data, type }) {
  // تأكد من وجود البيانات قبل العرض
  if (!data) {
    return <div>جاري تحميل البيانات...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow h-80">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {type === 'line-chart' ? (
        <Line 
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      ) : (
        <Bar 
          data={data}
          options={{ 
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 100 } }
          }}
        />
      )}
    </div>
  );
}