import type { NextRequest } from 'next/server';
import data from '../data.json';
import { z } from 'zod';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const query = z.string().parse(searchParams.get('q'));

  const products = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return Response.json(products);
}
