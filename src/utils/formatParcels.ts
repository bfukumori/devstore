export function formatParcels(price: number, parcels: number) {
  const priceByNumberOfParcels = price / parcels;
  return priceByNumberOfParcels.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
