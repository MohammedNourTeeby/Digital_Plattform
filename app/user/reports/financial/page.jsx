"use client"
import ReportCarda from '@/components/ReportCarda';
import ExportButton from '@/components/ExportButton';
import { financialData } from '../../../../data/financialReports';

export default function FinancialReports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-4 mb-6">
        <ExportButton format="pdf" />
        <ExportButton format="excel" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReportCarda 
          title="أداء المحفظة"
          data={financialData.portfolio}
          type="line-chart"
        />
        <ReportCarda 
          title="المقارنة مع الأهداف"
          data={financialData.goals}
          type="bar-chart"
        />
      </div>
    </div>
  );
}