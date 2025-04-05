import InvestmentPlanCard from '@/components/InvestmentPlanCard';
import { investmentPlans } from '../../../../data/investmentPlans';

export default function PlansPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {investmentPlans.map(plan => (
        <InvestmentPlanCard 
          key={plan.id}
          plan={plan}
        />
      ))}
    </div>
  );
}