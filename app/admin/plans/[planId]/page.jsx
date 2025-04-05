'use client';
import React from 'react'; // أضفنا استيراد React
import { use } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { plans } from '../../../../data/plans';
import { subscriptions } from '../../../../data/subscriptions';
import PaymentSchedule from '@/components/PaymentSchedule';
import PerformanceChart from '@/components/PerformanceChart';
import SubscriptionList from '@/components/SubscriptionList';

export default function PlanDetail({ params }) {
  const { planId } = use(params);
  const plan = plans.find(p => p.id === Number(planId));
  const planSubscriptions = subscriptions.filter(s => s.planId === Number(planId));

  if (!plan) return <div className="p-6 text-red-500">الخطة غير موجودة</div>;

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
        
        <Tabs defaultValue="payments">
          <TabsList>
            <TabsTrigger value="payments">جدول الدفعات</TabsTrigger>
            <TabsTrigger value="subscriptions">الاشتراكات</TabsTrigger>
            <TabsTrigger value="performance">الأداء</TabsTrigger>
          </TabsList>

          <TabsContent value="payments">
            <PaymentSchedule schedule={plan.paymentSchedule} />
          </TabsContent>

          <TabsContent value="subscriptions">
            <SubscriptionList subscriptions={planSubscriptions} />
          </TabsContent>

          <TabsContent value="performance">
            <PerformanceChart plan={plan} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}