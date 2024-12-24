import type { CartItem } from '../cart/types';

export type OrderStatus = 'ordered' | 'preparing' | 'ready' | 'delivering' | 'delivered';

export interface OrderLocation {
  lat: number;
  lng: number;
}

export interface Restaurant {
  name: string;
  address: string;
  location: OrderLocation;
}

export interface Order {
  id: string;
  items: CartItem[];
  status: OrderStatus;
  total: number;
  deliveryFee: number;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  deliveryInstructions?: string;
  createdAt: string; // Changed from Date to string
  estimatedDeliveryTime: string; // Changed from Date to string
  currentLocation?: OrderLocation;
  restaurant: Restaurant;
}

export interface OrderStore {
  orders: Order[];
  activeOrder: Order | null;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  updateOrderLocation: (orderId: string, lat: number, lng: number) => void;
  getOrder: (orderId: string) => Order | undefined;
}