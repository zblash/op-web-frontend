import { BaseKeysFactory } from './base-factory';
import { ActivityType } from '../api/api-models';

export const creditsQueryKeys = BaseKeysFactory('credits', {
  myCredit: () => [...creditsQueryKeys.all, 'my'] as const,
  summary: () => [...creditsQueryKeys.all, 'summary'] as const,
  getDetailByUser: userId => [...creditsQueryKeys.all, { userId }] as const,
  list: (s: { pageNumber: number; sortBy?: string; sortType?: string; userName?: string; userId?: string }) =>
    [...creditsQueryKeys.all, s] as const,
});

export const creditActivitiesQueryKeys = BaseKeysFactory('credits-activities', {
  listByUser: (s: {
    pageNumber: number;
    sortBy?: string;
    sortType?: string;
    startDate?: string;
    lastDate?: string;
    userId?: string;
    activityType?: ActivityType;
  }) => [...creditActivitiesQueryKeys.all, { ...s, activityType: 'user' }] as const,
  list: (s: {
    pageNumber: number;
    sortBy?: string;
    sortType?: string;
    customerId?: string;
    merchantId?: string;
    activityType?: ActivityType;
    startDate?: Date;
    lastDate?: Date;
  }) => [...creditActivitiesQueryKeys.all, s] as const,
});
