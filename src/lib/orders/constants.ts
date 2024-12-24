import type { OrderStatus } from './types';

export const STATUS_STEPS: OrderStatus[] = [
  'ordered',
  'preparing',
  'ready',
  'delivering',
  'delivered',
];

export const STATUS_LABELS: Record<OrderStatus, string> = {
  ordered: 'Order Received',
  preparing: 'Preparing',
  ready: 'Ready for Delivery',
  delivering: 'Out for Delivery',
  delivered: 'Delivered',
};

export const DELIVERY_FEE = 2.99;

export const MOCK_LOCATIONS = {
  restaurant: { lat: 40.7128, lng: -74.0060 }, // New York
  delivery: { lat: 40.7282, lng: -73.9942 }, // Manhattan
};