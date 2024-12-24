import type { FoodItem } from '../types';

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (item: FoodItem, quantity: number) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}