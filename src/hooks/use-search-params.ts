import { useState } from 'react';

export interface SearchParams {
  search?: string;
  cuisines?: string[];
  priceRanges?: string[];
  dietary?: string[];
}

export function useSearchParams() {
  const [searchParams, setSearchParams] = useState<SearchParams>({});
  return [searchParams, setSearchParams] as const;
}