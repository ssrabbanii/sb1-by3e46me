import type { Order } from './types';

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    items: [
      {
        id: 1,
        name: 'Margherita Pizza',
        restaurant: 'Pizza Express',
        price: 12.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
      },
      {
        id: 2,
        name: 'Garlic Bread',
        restaurant: 'Pizza Express',
        price: 4.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c',
      }
    ],
    status: 'preparing',
    total: 30.97,
    deliveryFee: 2.99,
    customerName: 'John Doe',
    customerPhone: '+1 234-567-8900',
    deliveryAddress: '123 Main St, New York, NY 10001',
    createdAt: new Date(Date.now() - 30 * 60000).toISOString(), // 30 mins ago
    estimatedDeliveryTime: new Date(Date.now() + 15 * 60000).toISOString(), // 15 mins from now
    restaurant: {
      name: 'Pizza Express',
      address: '456 Restaurant Ave',
      location: { lat: 40.7128, lng: -74.0060 }
    }
  },
  {
    id: 'ORD-002',
    items: [
      {
        id: 3,
        name: 'Sushi Platter',
        restaurant: 'Sushi House',
        price: 24.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
      }
    ],
    status: 'delivering',
    total: 27.98,
    deliveryFee: 2.99,
    customerName: 'John Doe',
    customerPhone: '+1 234-567-8900',
    deliveryAddress: '123 Main St, New York, NY 10001',
    createdAt: new Date(Date.now() - 45 * 60000).toISOString(), // 45 mins ago
    estimatedDeliveryTime: new Date(Date.now() + 5 * 60000).toISOString(), // 5 mins from now
    restaurant: {
      name: 'Sushi House',
      address: '789 Sushi Lane',
      location: { lat: 40.7142, lng: -74.0064 }
    }
  },
  {
    id: 'ORD-003',
    items: [
      {
        id: 4,
        name: 'Pad Thai',
        restaurant: 'Thai Delight',
        price: 14.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
      }
    ],
    status: 'delivered',
    total: 32.97,
    deliveryFee: 2.99,
    customerName: 'John Doe',
    customerPhone: '+1 234-567-8900',
    deliveryAddress: '123 Main St, New York, NY 10001',
    createdAt: new Date(Date.now() - 24 * 60 * 60000).toISOString(), // 1 day ago
    estimatedDeliveryTime: new Date(Date.now() - 23 * 60 * 60000).toISOString(), // Delivered 23 hours ago
    restaurant: {
      name: 'Thai Delight',
      address: '321 Thai Street',
      location: { lat: 40.7135, lng: -74.0062 }
    }
  }
];