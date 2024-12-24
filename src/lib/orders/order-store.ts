import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Order, OrderStore } from './types';
import { mockOrders } from './mock-data';

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: mockOrders, // Initialize with mock data
      activeOrder: mockOrders.find(order => order.status !== 'delivered') || null,
      addOrder: (order) => {
        set((state) => ({
          orders: [order, ...state.orders],
          activeOrder: order,
        }));
      },
      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId ? { ...order, status } : order
          ),
          activeOrder:
            state.activeOrder?.id === orderId
              ? { ...state.activeOrder, status }
              : state.activeOrder,
        }));
      },
      updateOrderLocation: (orderId, lat, lng) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? { ...order, currentLocation: { lat, lng } }
              : order
          ),
          activeOrder:
            state.activeOrder?.id === orderId
              ? { ...state.activeOrder, currentLocation: { lat, lng } }
              : state.activeOrder,
        }));
      },
      getOrder: (orderId) => get().orders.find((order) => order.id === orderId),
    }),
    {
      name: 'order-storage',
      version: 1,
    }
  )
);