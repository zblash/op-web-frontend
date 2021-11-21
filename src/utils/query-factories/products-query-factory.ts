import { BaseFactory } from './base-factory';

export const productsQueryKeys = BaseFactory('products', {
  detailsByBarcode: (barcode: string) => [...productsQueryKeys.all, { barcode }] as const,
  list: (s: { userId?: string; pageNumber: number; sortBy?: string; sortType?: string }) =>
    [...productsQueryKeys.all, s] as const,
  listByFilter: (s: { name?: string; categoryId?: string }) => [...productsQueryKeys.all, s] as const,
  listByUser: () => [productsQueryKeys.all, 'by-user'] as const,
});

export const productSpecifiesQueryKeys = BaseFactory('product-specifies', {
  list: (s: { userId?: string; productId?: string; pageNumber: number; sortBy?: string; sortType?: string }) =>
    [...productSpecifiesQueryKeys.all, s] as const,
});
