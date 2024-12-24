import { FilterSection } from './filter-section';
import { Button } from '@/components/ui/button';
import type { SearchParams } from '@/hooks/use-search-params';

const cuisines = [
  'Italian', 'Chinese', 'Japanese', 'Mexican', 'Indian', 'Thai', 'American'
];

const priceRanges = [
  { label: 'Under $10', value: '0-10' },
  { label: '$10 - $20', value: '10-20' },
  { label: '$20 - $30', value: '20-30' },
  { label: '$30+', value: '30-plus' },
];

const dietaryOptions = [
  'Vegetarian', 'Vegan', 'Gluten-Free', 'Halal', 'Kosher'
];

interface FilterContentProps {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
}

export function FilterContent({ searchParams, setSearchParams }: FilterContentProps) {
  return (
    <div className="space-y-6">
      <FilterSection
        title="Cuisines"
        options={cuisines}
        selected={searchParams.cuisines || []}
        onChange={(selected) => setSearchParams({ ...searchParams, cuisines: selected })}
      />
      <FilterSection
        title="Price Range"
        options={priceRanges}
        selected={searchParams.priceRanges || []}
        onChange={(selected) => setSearchParams({ ...searchParams, priceRanges: selected })}
      />
      <FilterSection
        title="Dietary Preferences"
        options={dietaryOptions}
        selected={searchParams.dietary || []}
        onChange={(selected) => setSearchParams({ ...searchParams, dietary: selected })}
      />
      <div className="pt-4">
        <Button 
          className="w-full"
          onClick={() => setSearchParams({})}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
}