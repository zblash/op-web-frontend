export interface IBaseUser {
  username: string;
  name: string;
  exp: number;
  merchantId: string;
}

export interface IUserInfoResponse {
  username: string;
  name: string;
  email: string;
  activeStates: IAddressStateResponse[];
  address: IAddressResponse;
}

export interface IObligationActivityResponse {
  id: string;
  price: number;
  documentNo: number;
  userId: string;
  userName: string;
  customerName: string;
  orderTotalPrice: number;
  orderCommissionPrice: number;
  date: Date;
  obligationActivityType: CreditActivityType;
  totalDebt: number;
  totalReceivable: number;
}

export interface ILoginResponse {
  username: string;
  name: string;
  email: string;
  role: UserRoleResponse;
  accessToken: string;
  refreshToken: string;
  address: IAddressResponse;
}

export interface IRegisterResponse {
  id: string;
  username: string;
  name: string;
  email: string;
  taxNumber: string;
  status: boolean;
}

export interface IRegisterRequest {
  //merchant için
  cityId: string;
  stateId: string;
  details: string;
  name: string;
  username: string;
  email: string;
  password: string;
  taxNumber: string;
  phoneNumber: string;
  activeStates: string[];
}

export interface IPaginationWrapper<P> {
  first: boolean;
  last: boolean;
  nextPage: number;
  previusPageIndex: number;
  values: P[];
  pageNumber: number;
  totalElements: number;
  totalPage: number;
  elementCountOfPage: number;
}

export interface IExceptionResponse {
  status: string;
  timestamp: Date;
  message: string;
  path: string;
  subErrors: ISubErrorResponse[] | undefined;
}

export interface ISubErrorResponse {
  object: string;
  field: string;
  rejectedValue: string;
  message: string;
}

export interface IProductRequest {
  barcode: string;
  categoryId: string;
  name: string;
  tax: number;
  uploadedFile?: File;
  customerTypeIdList: string[];
}

export interface ISpecifyProductRequest {
  barcode: string;
  contents: number;
  quantity: number;
  recommendedRetailPrice: number;
  stateIds: string[];
  totalPrice: number;
  unitPrice: number;
  unitType: UnitTypeResponse;
  discount: boolean;
  discountValue?: number;
  discountUnit?: number;
  promotionText?: string;
  customerTypeIdList: string[];
  promotionType: string;
  promotionDiscountType: string;
}

export interface IAddressStateResponse {
  cityTitle: string;
  code: number;
  id: string;
  title: string;
}

export interface IAddressResponse {
  cityId: string;
  cityName: string;
  details: string;
  id: string;
  stateId: string;
  stateName: string;
}

export interface IAddressCityResponse {
  code: number;
  id: string;
  title: string;
}

export interface IProductResponse {
  active: boolean;
  barcodeList: string[];
  categoryName: string;
  categoryId: string;
  id: string;
  name: string;
  photoUrl: string;
  tax: number;
  commission: number;
  customerTypeList: ICustomerTypeResponse[];
}

export interface ICreditResponse {
  id: string;
  totalDebt: number;
  creditLimit: number;
  customerId: string;
  customerName: string;
}

export interface IUserCreditResponse {
  id: string;
  totalDebt: number;
  creditLimit: number;
  customerId: string;
  customerName: string;
  merchantId: string;
  merchantName: string;
}

export interface ISpecifyProductResponse {
  id: string;
  totalPrice: number;
  unitPrice: number;
  quantity: number;
  contents: number;
  unitType: UnitTypeResponse;
  recommendedRetailPrice: number;
  productName: string;
  states: IAddressStateResponse[];
  merchant: ICommonMerchantResponse;
  productId: string;
  productBarcodeList: string[];
  discount: boolean;
  promotion: IProductPromotion;
  customerTypeList: ICustomerTypeResponse[];
}

export interface ICommonMerchantResponse {
  merchantId: string;
  merchantName: string;
  merchantScore: number;
}

export interface IProductPromotion {
  promotionText: string;
  discountValue: number;
  discountUnit: number;
  promotionDiscountType: string;
  promotionType: string;
}

export interface ICardItemResponse {
  id: string;
  productId: string;
  productBarcodeList: string[];
  productName: string;
  productPhotoUrl: string;
  productPrice: number;
  productTax: number;
  quantity: number;
  recommendedRetailPrice: number;
  merchant: ICommonMerchantResponse;
  totalPrice: number;
  unitPrice: number;
  unitContents: number;
  unitType: UnitTypeResponse;
  discountedTotalPrice: number;
}

export interface ICardResponse {
  id: string;
  items: ICartItemDetailResponse[];
  quantity: number;
  totalPrice: number;
}

export interface ICartItemDetailResponse {
  id: string;
  sellerId: string;
  sellerName: string;
  totalPrice: number;
  discountedTotalPrice: number;
  quantity: number;
  details: ICardItemResponse[];
}

export interface IUserCommonResponse {
  username: string;
  role: UserRoleResponse;
  name: string;
  email: string;
  id: string;
  status?: boolean;
  taxNumber?: string;
  activeStates: IAddressStateResponse[];
  address: IAddressResponse;
  commission?: number;
}

export interface ICategoryResponse {
  id: string;
  name: string;
  parentId: string | null;
  photoUrl: string;
  subCategory: boolean;
  subCategoryCount: number;
  commission?: number;
}

export interface IOrderItems {
  price: number;
  id: string;
  productBarcodeList: string[];
  productName: string;
  productPhotoUrl: string;
  productPrice: number;
  productTax: number;
  quantity: number;
  recommendedRetailPrice: number;
  merchant: ICommonMerchantResponse;
  totalPrice: number;
  discountedTotalPrice: number;
  unitPrice: number;
  unitType: UnitTypeResponse;
  unitContents: number;
  promotionText: string;
}

export interface IOrder {
  buyerName: string;
  code: number;
  id: string;
  orderDate: string;
  orderItems: IOrderItems[];
  merchant: ICommonMerchantResponse;
  status: TOrderStatus;
  commentable: boolean;
  paymentType: TPaymentOption;
  totalPrice: number;
  waybillDate: string | null;
  buyerAddress: IAddressResponse;
}

export interface IOrderConfirmItem {
  id: string;
  quantity: number;
  removed: boolean;
}

export interface Invoice {
  buyer: string;
  discount: number;
  id: string;
  paidPrice: number;
  seller: string;
  totalPrice: number;
  unPaidPrice: number;
  order: IOrder;
}

export interface IAnnouncement {
  id: string;
  fileUrl: string;
  lastDate: string;
  message: string;
  title: string;
}

export interface ICampaignResponse {
  id: string;
  fileUrl: string;
  title: string;
}

export interface ICompaniesResponse {
  id: string;
  fileUrl: string;
  title: string;
}

export interface IUserRegisterResponse {
  email: string;
  id: string;
  name: string;
  status: boolean;
  taxNumber: string;
  username: string;
}

export interface ICustomerRegisterRequest {
  cityId: string;
  stateId: string;
  details: string;
  name: string;
  username: string;
  email: string;
  password: string;
  taxNumber: string;
  phoneNumber: string;
  customerTypeId: string;
}

export interface INotificationResponse {
  id: string;
  title: string;
  message: string;
  userId: string;
  userName: string;
}

export interface IPaymentMethodsResponse {
  id: string;
  displayName: string;
  paymentOption: string;
}

export interface ITicketResponse {
  id: string;
  title: string;
  status: string;
  openerName: string;
  addedTime: Date;
}

export interface ITicketReplyResponse {
  id: string;
  message: string;
  username: string;
  addedTime: Date;
}

export interface ICreditActivityResponse {
  id: string;
  documentNo: number;
  price: number;
  paidPrice: number;
  creditLimit: number;
  currentDebt: number;
  currentReceivable: number;
  activityType: ActivityType;
  paymentType: CreditPaymentType;
  customerId: string;
  customerName: string;
  merchantId?: string;
  merchantName?: string;
  date: Date;
}

export interface IShippingDaysResponse {
  id: string;
  merchantId: string;
  merchantName: string;
  days: DaysOfWeek[];
  stateId: string;
  stateName: string;
  cityId: string;
  cityName: string;
}

export interface ICartCount {
  count: number;
}

export interface IOrderSummary {
  id: string;
  newCount: number;
  finishedCount: number;
  cancelledCount: number;
  cancelRequestCount: number;
  submittedCount: number;
}

export interface IObligationTotals {
  id: string;
  debt: number;
  receivable: number;
  userName: string;
  userId: string;
}

export interface ICustomerTypeResponse {
  id: string;
  typeName: string;
}

export type UserRoleResponse = 'ADMIN' | 'MERCHANT' | 'CUSTOMER';

export type UnitTypeResponse = 'KG' | 'KL' | 'AD';

export type TOrderStatus = 'NEW' | 'FINISHED' | 'CONFIRMED' | 'CANCELLED' | 'CANCEL_REQUEST' | 'PREPARED' | 'ON_WAY';

export type TPaymentOption = 'SYSTEM_CREDIT' | 'MERCHANT_CREDIT' | 'COD';

export type CreditActivityType = 'DEBT' | 'CREDIT';

export type CreditType = 'SYSTEM_CREDIT' | 'MERCHANT_CREDIT';

export type ActivityType = 'SYSTEM_CREDIT' | 'MERCHANT_CREDIT' | 'ORDER' | 'ORDER_CANCEL';

export type CreditPaymentType = 'CASH' | 'CREDIT_CARD' | 'RUNNING_ACCOUNT';

export type DaysOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
