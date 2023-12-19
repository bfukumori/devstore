'use client';

import { useSearchParams } from 'next/navigation';

export function CurrentSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <p>
      Resultados para: <span className="font-bold">{query}</span>
    </p>
  );
}
