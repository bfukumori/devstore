'use client';

import { Skeleton } from '@/components/skeleton';
import { useSearchParams } from 'next/navigation';

export default function SearchLoading() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: {query}
        <span className="font-semibold"></span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[340px]" />
        <Skeleton className="h-[340px]" />
        <Skeleton className="h-[340px]" />
        <Skeleton className="h-[340px]" />
        <Skeleton className="h-[340px]" />
        <Skeleton className="h-[340px]" />
      </div>
    </div>
  );
}
