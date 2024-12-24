import { InputWithIcon } from '@/components/ui/input-with-icon';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import { SearchParams } from '@/hooks/use-search-params';

interface BrowseHeaderProps {
  onFilterClick: () => void;
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
}

export function BrowseHeader({ onFilterClick, searchParams, setSearchParams }: BrowseHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Browse Food</h1>
      <div className="flex gap-4 items-center">
        <InputWithIcon
          placeholder="Search for food or restaurants..."
          className="flex-1"
          icon={<Search className="h-4 w-4" />}
          value={searchParams.search || ''}
          onChange={(e) => setSearchParams({ ...searchParams, search: e.target.value })}
        />
        <Button 
          variant="outline" 
          className="lg:hidden"
          onClick={onFilterClick}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
    </div>
  );
}