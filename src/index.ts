export {
  MaybeArray,
  twoDigit,
  makeid,
  getDisplayName,
  narrowObject,
  stringLitArray,
  isArray,
  isObject,
  getKeyByValue,
  objectKeys,
  objectValues,
  objectForeach,
  asyncMap,
  objectMap,
  useLocationQueryParams,
  scrollToRef,
} from './utils/helpers';
export {
  useStateFromProp,
  usePrevious,
  useKeepValue,
  useStateWithCallback,
  useWindowEvent,
  useObjectState,
  useArrayState,
  useMemoWithPrevDeps,
  useAlert,
  useOnClickOutside,
  useWindowSize,
  useLocalStorage,
} from './utils/hooks';

export {
  IBaseUser,
  IUserInfoResponse,
  IObligationActivityResponse,
  ILoginResponse,
  IRegisterResponse,
  IRegisterRequest,
  IPaginationWrapper,
  IExceptionResponse,
  ISubErrorResponse,
  IProductRequest,
  ISpecifyProductRequest,
  IAddressStateResponse,
  IAddressResponse,
  IAddressCityResponse,
  IProductResponse,
  ICreditResponse,
  IUserCreditResponse,
  ISpecifyProductResponse,
  ICommonMerchantResponse,
  IProductPromotion,
  ICardItemResponse,
  ICardResponse,
  ICartItemDetailResponse,
  IUserCommonResponse,
  ICategoryResponse,
  IOrderItems,
  IOrder,
  IOrderConfirmItem,
  Invoice,
  IAnnouncement,
  ICampaignResponse,
  ICompaniesResponse,
  IUserRegisterResponse,
  ICustomerRegisterRequest,
  INotificationResponse,
  IPaymentMethodsResponse,
  ITicketResponse,
  ITicketReplyResponse,
  ICreditActivityResponse,
  IShippingDaysResponse,
  ICartCount,
  IOrderSummary,
  IObligationTotals,
  ICustomerTypeResponse,
  UserRoleResponse,
  UnitTypeResponse,
  TOrderStatus,
  TPaymentOption,
  CreditActivityType,
  CreditType,
  ActivityType,
  CreditPaymentType,
  DaysOfWeek,
} from './utils/api/api-models';

export { mutationEndPoints } from './utils/api/mutation-endpoints';
export { paginatedQueryEndpoints, GetCategoriesVariables } from './utils/api/paginated-query-endpoints';
export { queryEndpoints } from './utils/api/query-endpoints';
export { ApiCall, ApiCallService } from './utils/api/ApiCall';

export { TokenService } from './utils/token-service';

export { productsQueryKeys, productSpecifiesQueryKeys } from './utils/query-factories/products-query-factory';
export { creditsQueryKeys, creditActivitiesQueryKeys } from './utils/query-factories/credits-query-factory';
export { ordersQueryKeys } from './utils/query-factories/orders-query-factory';
export { categoriesQueryKeys } from './utils/query-factories/categories-query-factory';
export { ticketsQueryKeys } from './utils/query-factories/tickets-query-factory';
export { searchQueryKeys } from './utils/query-factories/searches-query-factory';
export {
  statesQueryKeys,
  citiesQueryKeys,
  shippingDaysQueryKeys,
  promotionTypesQueryKeys,
  discountTypesQueryKeys,
  paymentMethodsQueryKeys,
  customerTypesQueryKeys,
  merchantShippingDaysQueryKeys,
  userInfosQueryKeys,
} from './utils/query-factories/definitions-query-factory';

export {
  FaUserCircle as UIUserIcon,
  FaMapMarkedAlt as UIMapIcon,
  FaFacebookF as UIFacebookIcon,
  FaTwitter as UITwitterIcon,
  FaInstagram as UIInstagramIcon,
  FaLinkedinIn as UILinkedInIcon,
  FaSignOutAlt as UISignOutIcon,
  FaBullhorn as UINotificationHornIcon,
  FaRegEdit as UIEditIcon,
  FaTrash as UITrashIcon,
  FaCamera as UICameraIcon,
  FaChevronCircleUp as UIChevronUpIcon,
  FaShoppingCart as UIShoppingCartIcon,
} from 'react-icons/fa';

export { BsInboxes as UIInboxes, BsDot as UIDotIcon } from 'react-icons/bs';

export { RiNotification2Fill as UINotificationIcon, RiCloseFill as UICloseIcon } from 'react-icons/ri';

export { BiChevronDownCircle as UIDownChevronIcon, BiNetworkChart as UINetworkIcon } from 'react-icons/bi';

export { GoPackage as UIPackageIcon } from 'react-icons/go';

export {
  AiFillDownCircle as UIFillDownIcon,
  AiOutlineLogout as UILogoutSecondIcon,
  AiOutlineHome as UIHOmeIcon,
  AiOutlineCreditCard as UICreditCardIcon,
  AiOutlineSetting as UISettingsIcon,
  AiOutlineDown as UIOutlineDownIcon,
} from 'react-icons/ai';

export { Eye as UIEyeIcon } from './components/custom-icons/eye-icon';

export { EyeOff as UIEyeOffIcon } from './components/custom-icons/eye-off-icon';
export { CheckHealth } from './components/check-health';

export { UIContainer } from './components/container/index';
export { AnnouncementComponent } from './components/announcements';
export { Carousel } from './components/carousel';
export { UICheckbox } from './components/checkbox';
export { Footer } from './components/footer';
export { Header } from './components/header';
export { HeaderMenu } from './components/header-menu/desktop';
export { UIInput } from './components/input';
export { UILink } from './components/link';
export { DefaultLoading } from './components/loading/default-loading';
export { FullScreenLoading } from './components/loading/full-screen-loading';
export { Loading } from './components/loading/loading';
export { ModalComponent } from './components/modal';
export { Pagination } from './components/pagination';
export { PasswordInput } from './components/password-input';
export { Popup } from './components/popup';
export { Portal } from './components/portal';
export { UISelect } from './components/select';
export { UITableComponent } from './components/table';
export { UITextArea } from './components/textarea';
export { OrderListFilterComponent } from './components/order-list-filter';
export { QuantityInput } from './components/quantity-input';
export { SpecifyAddToCart } from './components/specify-add-to-cart';
export { OrderListComponent } from './components/order-list';
export { SearchComponent } from './components/search-component';
