import { BaseKeysFactory } from './base-factory';

export const searchQueryKeys = BaseKeysFactory('search', {
  customer: (customerName: string) => [...searchQueryKeys.all, 'search-customers', { customerName }] as const,
  merchant: (merchantName: string) => [...searchQueryKeys.all, 'merchant-customers', { merchantName }] as const,
  product: (productName: string) => [...searchQueryKeys.all, 'product-customers', { productName }] as const,
});
