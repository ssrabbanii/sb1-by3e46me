import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartStore } from './types';
import { calculateTotalItems, calculateTotalPrice } from './utils';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item, quantity) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          return {
            items: [...state.items, { ...item, quantity }],
          };
        });
      },
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== itemId),
        }));
      },
      updateQuantity: (itemId, quantity) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === itemId ? { ...i, quantity } : i
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => calculateTotalItems(get().items),
      getTotalPrice: () => calculateTotalPrice(get().items),
    }),
    {
      name: 'cart-storage',
    }
  )
);