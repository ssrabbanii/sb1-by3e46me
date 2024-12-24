import type { ImpactStats, BeneficiaryStory, FoodBank } from './types';

export const impactStats: ImpactStats = {
  totalContributions: 1250000,
  mealsProvided: 500000,
  familiesHelped: 25000,
  partneredBanks: 50,
};

export const beneficiaryStories: BeneficiaryStory[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Brooklyn, NY',
    story: 'As a single mother of three, accessing nutritious food was always a challenge. The local food bank, supported by ByteBank contributions, has been a lifeline for my family.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
    impact: 'Provides regular meals for her three children',
  },
  {
    id: '2',
    name: 'Miguel Rodriguez',
    location: 'Queens, NY',
    story: 'After losing my job during the pandemic, I struggled to put food on the table. The food bank helped me get back on my feet while I searched for new opportunities.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    impact: 'Received support during unemployment',
  },
  {
    id: '3',
    name: 'Emily Chen',
    location: 'Manhattan, NY',
    story: 'As a student working part-time, I often had to choose between books and meals. The food bank ensures I can focus on my education without worrying about my next meal.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    impact: 'Maintains healthy diet while studying',
  },
];

export const foodBanks: FoodBank[] = [
  {
    id: '1',
    name: 'City Harvest',
    location: 'New York City',
    description: 'Rescuing and delivering nutritious food for New Yorkers in need.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
    contributionsReceived: 450000,
    mealsProvided: 180000,
  },
  {
    id: '2',
    name: 'Food Bank For NYC',
    location: 'New York City',
    description: 'Working to end food poverty across the five boroughs.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd59c5bc3f90',
    contributionsReceived: 380000,
    mealsProvided: 152000,
  },
  {
    id: '3',
    name: 'Feeding NYC',
    location: 'New York City',
    description: 'Providing meals and hope to families in need.',
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497',
    contributionsReceived: 420000,
    mealsProvided: 168000,
  },
];