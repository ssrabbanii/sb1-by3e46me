// Add to existing types
export type PaymentMethod = 'credit_card' | 'debit_card' | 'paypal';

export type OrderStatus = 'ordered' | 'preparing' | 'ready' | 'delivering' | 'delivered';

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
  createdAt: Date;
  estimatedDeliveryTime: Date;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  restaurant: {
    name: string;
    address: string;
    location: {
      lat: number;
      lng: number;
    };
  };
}