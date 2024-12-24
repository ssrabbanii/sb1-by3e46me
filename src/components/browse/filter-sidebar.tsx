import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { FilterContent } from './filter-content';
import type { SearchParams } from '@/hooks/use-search-params';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
}

export function FilterSidebar({ isOpen, onClose, searchParams, setSearchParams }: FilterSidebarProps) {
  return (
    <>
      <div className="hidden lg:block w-[300px] bg-white p-6 rounded-lg h-fit">
        <FilterContent searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Filter Options</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterContent searchParams={searchParams} setSearchParams={setSearchParams} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}