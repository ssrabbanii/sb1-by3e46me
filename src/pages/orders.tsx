import { OrderList } from '@/components/orders/order-list/order-list';
import { EmptyState } from '@/components/orders/order-list/empty-state';
import { useOrderStore } from '@/lib/orders/order-store';

export function Orders() {
  const { orders, activeOrder } = useOrderStore();
  
  if (orders.length === 0) {
    return <EmptyState />;
  }

  const activeOrders = orders.filter(order => order.status !== 'delivered');
  const pastOrders = orders.filter(order => order.status === 'delivered');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">My Orders</h1>
      
      <OrderList 
        orders={activeOrders}
        title="Active Orders"
      />

      <OrderList 
        orders={pastOrders}
        title="Order History"
      />
    </div>
  );
}