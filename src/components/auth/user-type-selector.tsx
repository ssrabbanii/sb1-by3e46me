import { Card } from '@/components/ui/card';
import { UserType } from '@/lib/auth/types';
import { User, Store, Heart } from 'lucide-react';

interface UserTypeSelectorProps {
  selected: UserType | undefined;
  onChange: (type: UserType) => void;
  error?: string;
}

const userTypes: Array<{
  type: UserType;
  label: string;
  description: string;
  icon: typeof User;
}> = [
  {
    type: 'customer',
    label: 'Customer',
    description: 'Order food and support local food banks',
    icon: User,
  },
  {
    type: 'restaurant',
    label: 'Restaurant Partner',
    description: 'List your restaurant and reach more customers',
    icon: Store,
  },
  {
    type: 'ngo',
    label: 'Food Bank / NGO',
    description: 'Partner with us to help fight hunger',
    icon: Heart,
  },
];

export function UserTypeSelector({ selected, onChange, error }: UserTypeSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {userTypes.map(({ type, label, description, icon: Icon }) => (
          <Card
            key={type}
            className={`p-4 cursor-pointer transition-colors ${
              selected === type
                ? 'border-2 border-green-600'
                : 'hover:border-green-200'
            }`}
            onClick={() => onChange(type)}
          >
            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold">{label}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </Card>
        ))}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}