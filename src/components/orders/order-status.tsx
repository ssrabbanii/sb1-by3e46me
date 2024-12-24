import { Progress } from '@/components/ui/progress';
import { STATUS_STEPS, STATUS_LABELS } from '@/lib/orders/constants';
import { calculateOrderProgress } from '@/lib/orders/utils';
import type { OrderStatus as OrderStatusType } from '@/lib/orders/types';
import { CheckCircle2, Clock } from 'lucide-react';

interface OrderStatusProps {
  status: OrderStatusType;
}

export function OrderStatus({ status }: OrderStatusProps) {
  const progress = calculateOrderProgress(status);
  const currentStep = STATUS_STEPS.indexOf(status);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {status === 'delivered' ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <Clock className="h-5 w-5 text-blue-600 animate-pulse" />
          )}
          <span className="font-medium">
            {status === 'delivered'
              ? 'Order Delivered'
              : 'Estimated delivery: 35-45 minutes'}
          </span>
        </div>
        <span className="text-sm text-gray-500">Order #{Math.random().toString(36).slice(2, 8)}</span>
      </div>

      <div className="space-y-4">
        <Progress value={progress} className="h-2" />
        <div className="grid grid-cols-5 gap-2">
          {STATUS_STEPS.map((step, index) => (
            <div
              key={step}
              className={`text-center ${
                index <= currentStep ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <div className="text-xs font-medium">{STATUS_LABELS[step]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}