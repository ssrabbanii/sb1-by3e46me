import { BrowseHeader } from '@/components/browse/browse-header';
import { FilterSidebar } from '@/components/browse/filter-sidebar';
import { FoodGrid } from '@/components/browse/food-grid';
import { useState } from 'react';
import { useSearchParams } from '@/hooks/use-search-params';

export function Browse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <BrowseHeader 
        onFilterClick={() => setIsSidebarOpen(true)}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <div className="flex gap-6">
        <FilterSidebar 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <FoodGrid searchParams={searchParams} />
      </div>
    </div>
  );
}