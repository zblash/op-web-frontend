import { BaseKeysFactory } from './base-factory';

export const statesQueryKeys = BaseKeysFactory('states', {
  listByCity: (cityId: string) => [...statesQueryKeys.all, { cityId }] as const,
  forShippingDays: () => [...statesQueryKeys.all, 'for-shipping-days'] as const,
});

export const citiesQueryKeys = BaseKeysFactory('cities', {});

export const shippingDaysQueryKeys = BaseKeysFactory('shipping-days', {});

export const promotionTypesQueryKeys = BaseKeysFactory('promotion-types', {});

export const discountTypesQueryKeys = BaseKeysFactory('discount-types', {});

export const paymentMethodsQueryKeys = BaseKeysFactory('payment-methods', {});

export const customerTypesQueryKeys = BaseKeysFactory('customer-types', {});

export const merchantShippingDaysQueryKeys = BaseKeysFactory('merchant-shipping-days', {});

export const userInfosQueryKeys = BaseKeysFactory('user-infos', {});
