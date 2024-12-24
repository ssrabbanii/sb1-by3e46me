import type { Order } from '@/lib/orders/types';
import { OrderStatus } from './order-status';
import { OrderDetails } from './order-details';
import { OrderMap } from './order-map';

interface ActiveOrderProps {
  order: Order;
}

export function ActiveOrder({ order }: ActiveOrderProps) {
  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold">Active Order</h2>
      <OrderStatus status={order.status} />
      <OrderDetails order={order} />
      <OrderMap
        restaurantLocation={order.restaurant.location}
        deliveryLocation={{
          lat: 0, // In a real app, geocode the delivery address
          lng: 0,
        }}
        currentLocation={order.currentLocation}
      />
    </div>
  );
}