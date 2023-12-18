import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/utils/formatPrice';
import { redirect } from 'next/navigation';
import { Product } from '@/data/types/product';
import { api } from '@/data/api';

interface SearchProps {
  searchParams: {
    q: string;
  };
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });
  const products = await response.json();
  return products;
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams;
  const products = await searchProducts(query);

  if (!query) {
    redirect('/');
  }

  return (
    <div className="flex flex-col gap-4">
      <p>
        Resultados para: <span className="font-bold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.slug}
            className="group rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end relative"
          >
            <Image
              className="group-hover:scale-105 transition-transform duration-500"
              src={product.image}
              width={400}
              height={400}
              alt={product.description}
              quality={100}
            />
            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {formatPrice(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
