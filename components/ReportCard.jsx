export default function ReportCard({ title, value, currency, description }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
        <div className="text-2xl font-bold mb-2">
          {currency ? '$' : ''}{value?.toLocaleString()}
        </div>
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
      </div>
    );
  }