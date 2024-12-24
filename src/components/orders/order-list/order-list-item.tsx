import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin } from 'lucide-react';
import type { Order } from '@/lib/orders/types';
import { formatCurrency, formatTime } from '@/lib/orders/utils/format-utils';
import { STATUS_LABELS } from '@/lib/orders/constants';

interface OrderListItemProps {
  order: Order;
}

export function OrderListItem({ order }: OrderListItemProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">Order #{order.id}</h3>
            <Badge variant={order.status === 'delivered' ? 'secondary' : 'default'}>
              {STATUS_LABELS[order.status]}
            </Badge>
          </div>
          
          <div className="text-sm text-gray-500 space-y-1">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{order.restaurant.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>
                {order.status === 'delivered' 
                  ? 'Delivered'
                  : `Estimated delivery: ${formatTime(order.estimatedDeliveryTime)}`
                }
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-medium">{formatCurrency(order.total)}</p>
            <p className="text-sm text-gray-500">{order.items.length} items</p>
          </div>
          <Button variant="outline" onClick={() => alert('View details')}>
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
}