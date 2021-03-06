import {
  IPaymentMethodsResponse,
  ICategoryResponse,
  IProductResponse,
  IAddressStateResponse,
  IAddressCityResponse,
  IAnnouncement,
  IOrder,
  ISpecifyProductResponse,
  INotificationResponse,
  ITicketResponse,
  ITicketReplyResponse,
  IUserCreditResponse,
  IShippingDaysResponse,
  IUserInfoResponse,
  IObligationTotals,
  IOrderSummary,
  ICustomerTypeResponse,
  ICreditResponse,
  ICardResponse,
  ICommonMerchantResponse,
  ICommonCustomerResponse,
} from './api-models';
import { ApiCall, ApiCallService } from './ApiCall';

export type GetCategoriesVariables = { type: 'sub' | 'parent' | 'all' };

class QueryEndpoints {
  getCategories: (s: GetCategoriesVariables) => Promise<ICategoryResponse[]> = ({ type }) =>
    ApiCallService.request(
      new (ApiCall as any)()
        .setUrl(`/categories`, true)
        .setParams({ filter: type !== 'all', sub: type === 'sub' })
        .get(),
    );

  getParentCategories: () => Promise<ICategoryResponse[]> = () =>
    ApiCallService.request(
      new (ApiCall as any)().setUrl(`/categories`, true).setParams({ filter: true, sub: false }).get(),
    );

  getSubCategoriesByParentId: (s: { parentId: string }) => Promise<ICategoryResponse[]> = ({ parentId }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/categories/${parentId}/subCategories`, true).get());

  getCategoryByID: (s: { id: string }) => Promise<ICategoryResponse> = ({ id }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/categories/${id}`, true).get());

  getProductByBarcode: (s: { barcode: string }) => Promise<IProductResponse> = ({ barcode }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/products/barcode/${barcode}`, true).get());

  getProductById: (s: { id: string }) => Promise<IProductResponse> = ({ id }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/products/${id}`, true).get());

  getProductSpecifyById: (s: { id: string }) => Promise<ISpecifyProductResponse> = ({ id }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/products/specify/${id}`, true).get());

  getAuthUserActiveStates: () => Promise<IAddressStateResponse[]> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/user/activeStates', true).get());

  getCities: () => Promise<IAddressCityResponse[]> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/definitions/cities', false).get());

  getStatesByCityId: (s: { cityId: string }) => Promise<IAddressStateResponse[]> = ({ cityId }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/definitions/cities/${cityId}/states`, false).get());

  getStates: () => Promise<any> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/definitions/states', false).get());

  getObligationTotal: () => Promise<IObligationTotals> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/obligations/totals', true).get());

  getAnnouncements: () => Promise<Array<IAnnouncement>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/announcements', true).get());

  getOrder: (s: { id: string }) => Promise<IOrder> = ({ id }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/orders/${id}`, true).get());

  getOrderSummary: () => Promise<IOrderSummary> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/orders/summary', true).get());

  getAllNotifications: () => Promise<Array<INotificationResponse>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/notifications', true).get());

  getPaymentMethods: () => Promise<Array<IPaymentMethodsResponse>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/payment/methods', true).get());

  getCredit: () => Promise<ICreditResponse> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/credits/my', true).get());

  getAllUsersNotifications: () => Promise<Array<INotificationResponse>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/notifications/my', true).get());

  getProductsByFilter: (s: { name: string }) => Promise<Array<IProductResponse>> = ({ name }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/products/filter?name=${name}`, true).get());

  getTicketById: (s: { id: string }) => Promise<ITicketResponse> = ({ id }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/tickets/${id}`, true).get());

  getTicketRepliesByTicketId: (s: { id: string }) => Promise<Array<ITicketReplyResponse>> = ({ id }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/tickets/${id}/replies`, true).get());

  getAllProducts: () => Promise<Array<IProductResponse>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/products/byUser', true).get());

  getUsersCreditByUser: (s: { userId: string }) => Promise<IUserCreditResponse> = ({ userId }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/credits/byUser/${userId}`, true).get());

  getShippingDays: () => Promise<Array<IShippingDaysResponse>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/shippingDays', true).get());

  getAllowedStateForShippingDays: () => Promise<Array<IAddressStateResponse>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/shippingDays/allowedStates', true).get());

  getMerchantShippingDays: (s: { merchantId: string }) => Promise<IShippingDaysResponse> = ({ merchantId }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/shippingDays/merchant/${merchantId}`, true).get());

  getUserInfos: () => Promise<IUserInfoResponse> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/user/info', true).get());

  getCustomerTypes: () => Promise<Array<ICustomerTypeResponse>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/definitions/customerTypes', false).get());

  getDiscountTypes: () => Promise<Array<string>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/definitions/promotionDiscountTypes', false).get());

  getPromotionTypes: () => Promise<Array<string>> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/definitions/promotionTypes', false).get());

  getCart: () => Promise<ICardResponse> = () =>
    ApiCallService.request(new (ApiCall as any)().setUrl('/cart', true).get());

  getSearchMerchants: (s: { merchantName: string }) => Promise<ICommonMerchantResponse[]> = ({ merchantName }) =>
    ApiCallService.request(new (ApiCall as any)().setUrl(`/merchants/search?merchantName=${merchantName}`, true).get());

  getSearchCustomers: (s: { customerName: string }) => Promise<ICommonCustomerResponse[]> = ({ customerName }) =>
    ApiCallService.request(
      new (ApiCall as any)().setUrl(`/customers/search?customerUsername=${customerName}`, true).get(),
    );
}
const queryEndpoints = new QueryEndpoints();

export { queryEndpoints };
