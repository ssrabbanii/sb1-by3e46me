import { DashboardHeader } from '@/components/partner-dashboard/dashboard-header';
import { DashboardStats } from '@/components/partner-dashboard/dashboard-stats';
import { OrdersList } from '@/components/partner-dashboard/orders-list';
import { RevenueChart } from '@/components/partner-dashboard/revenue-chart';
import { PopularItems } from '@/components/partner-dashboard/popular-items';

export function PartnerDashboard() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardStats />
      <div className="grid lg:grid-cols-2 gap-8">
        <RevenueChart />
        <PopularItems />
      </div>
      <OrdersList />
    </div>
  );
}