import type { CartItem } from './types';

export const calculateTotalItems = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

export const calculateTotalPrice = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const formatPrice = (price: number): string => {
  return price.toFixed(2);
};