import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import type { BeneficiaryStory } from '@/lib/bytebank/types';

interface BeneficiaryStoryCardProps {
  story: BeneficiaryStory;
}

export function BeneficiaryStoryCard({ story }: BeneficiaryStoryCardProps) {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-4">
        <img
          src={story.image}
          alt={story.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{story.name}</h3>
          <p className="text-sm text-gray-500">{story.location}</p>
        </div>
      </div>
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-200" />
        <p className="pl-6 text-gray-600">{story.story}</p>
      </div>
      <div className="pt-4 border-t">
        <p className="text-sm font-medium text-green-600">Impact: {story.impact}</p>
      </div>
    </Card>
  );
}