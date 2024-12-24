import { Card } from '@/components/ui/card';
import { Heart, Utensils, Users, Building } from 'lucide-react';
import type { ImpactStats } from '@/lib/bytebank/types';

interface ImpactStatsProps {
  stats: ImpactStats;
}

export function ImpactStats({ stats }: ImpactStatsProps) {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const stats_data = [
    {
      label: 'Total Contributions',
      value: `$${formatNumber(stats.totalContributions)}`,
      icon: Heart,
      color: 'text-red-500',
    },
    {
      label: 'Meals Provided',
      value: formatNumber(stats.mealsProvided),
      icon: Utensils,
      color: 'text-blue-500',
    },
    {
      label: 'Families Helped',
      value: formatNumber(stats.familiesHelped),
      icon: Users,
      color: 'text-green-500',
    },
    {
      label: 'Partnered Food Banks',
      value: formatNumber(stats.partneredBanks),
      icon: Building,
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats_data.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center gap-4">
            <div className={`${stat.color} bg-opacity-10 p-3 rounded-full`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}