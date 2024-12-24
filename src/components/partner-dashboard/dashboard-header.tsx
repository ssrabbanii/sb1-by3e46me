import { Button } from '@/components/ui/button';
import { Bell, Settings } from 'lucide-react';

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Restaurant Dashboard</h1>
        <p className="text-gray-500">Welcome back, Pizza Express</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button className="bg-green-600 hover:bg-green-700">
          Add New Item
        </Button>
      </div>
    </div>
  );
}