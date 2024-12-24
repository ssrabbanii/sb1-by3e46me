import type { Offer } from './types';

export const mockOffers: Offer[] = [
  {
    id: '1',
    type: 'discount',
    title: '50% Off Your First Order',
    description: 'Get 50% off on your first order above $30',
    code: 'WELCOME50',
    discount: 50,
    minOrder: 30,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    termsAndConditions: [
      'Valid for first-time customers only',
      'Maximum discount of $25',
      'Not valid with other offers',
    ],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },
  {
    id: '2',
    type: 'freeDelivery',
    title: 'Free Delivery Week',
    description: 'Enjoy free delivery on all orders above $20',
    code: 'FREEDEL',
    minOrder: 20,
    expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
    termsAndConditions: [
      'Valid on orders above $20',
      'Limited to 5km radius',
    ],
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2',
  },
  {
    id: '3',
    type: 'buyOneGetOne',
    title: 'Buy 1 Get 1 Free',
    description: 'Order any main course and get another one free',
    code: 'BOGO2024',
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 1 day from now
    termsAndConditions: [
      'Valid on selected main courses only',
      'Equal or lesser value item free',
      'Valid for dine-in only',
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
  },
];