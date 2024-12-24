import type { OrderStatus, Order } from './types';
import { STATUS_STEPS } from './constants';

export const calculateOrderProgress = (status: OrderStatus): number => {
  const currentStep = STATUS_STEPS.indexOf(status);
  return (currentStep / (STATUS_STEPS.length - 1)) * 100;
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (dateString: string): string => {
  return new Date(dateString).toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const createOrder = (
  items: Order['items'],
  customerDetails: {
    name: string;
    phone: string;
    address: string;
    instructions?: string;
  }
): Order => {
  const now = new Date();
  const estimatedDelivery = new Date(now.getTime() + 45 * 60000); // 45 minutes from now

  return {
    id: Math.random().toString(36).slice(2),
    items,
    status: 'ordered',
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    deliveryFee: 2.99,
    customerName: customerDetails.name,
    customerPhone: customerDetails.phone,
    deliveryAddress: customerDetails.address,
    deliveryInstructions: customerDetails.instructions,
    createdAt: now.toISOString(),
    estimatedDeliveryTime: estimatedDelivery.toISOString(),
    restaurant: {
      name: items[0].restaurant,
      address: '123 Restaurant St',
      location: { lat: 0, lng: 0 },
    },
  };
};