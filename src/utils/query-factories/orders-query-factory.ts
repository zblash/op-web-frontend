import { TOrderStatus } from '../api/api-models';
import { BaseKeysFactory } from './base-factory';

export const ordersQueryKeys = BaseKeysFactory('products', {
  list: (s: {
    userId?: string;
    userName?: string;
    startDate?: string;
    pageNumber: number;
    sortBy?: string;
    sortType?: string;
    status?: TOrderStatus;
  }) => [...ordersQueryKeys.all, s] as const,
});
