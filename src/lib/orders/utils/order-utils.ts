import type { Order } from '../types';
import { STATUS_STEPS } from '../constants';
import { addMinutes } from './date-utils';

export const calculateOrderProgress = (status: Order['status']): number => {
  const currentStep = STATUS_STEPS.indexOf(status);
  return (currentStep / (STATUS_STEPS.length - 1)) * 100;
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
  const estimatedDelivery = addMinutes(now, 45);

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