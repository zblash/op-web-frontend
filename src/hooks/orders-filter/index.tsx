import * as React from 'react';
import {
  TOrderStatus,
  dateToString,
  OrderListFilterComponent,
  ICommonCustomerResponse,
  ICommonMerchantResponse,
  stringToDate,
  FilterWrapperComponent,
} from '../..';

export interface OrdersFilterHooksProps {
  showCustomerFilter: boolean;
  showMerchantFilter: boolean;
  givenStatus?: TOrderStatus;
}

export function useOrdersFilterHOC(props: OrdersFilterHooksProps) {
  const [customerId, setCustomerId] = React.useState<string>();
  const [merchantId, setMerchantId] = React.useState<string>();
  const [customerName, setCustomerName] = React.useState('');
  const [merchantName, setMerchantName] = React.useState('');
  const [isCustomerSearching, setIsCustomerSearching] = React.useState(false);
  const [isMerchantSearching, setIsMerchantSearching] = React.useState(false);

  const [startDate, setStartDate] = React.useState<string>();
  const [endDate, setEndDate] = React.useState<string>();
  const [status, setStatus] = React.useState(props.givenStatus);

  const onCustomerSearchType = React.useCallback((e: string) => {
    setCustomerName(e);
    setIsCustomerSearching(true);
  }, []);
  const onMerchantSearchType = React.useCallback((e: string) => {
    setMerchantName(e);
    setIsMerchantSearching(true);
  }, []);

  const handleFilterSubmit = React.useCallback(
    (e: { customerId?: string; merchantId?: string; startDate?: Date; endDate?: Date; status?: TOrderStatus }) => {
      if (e.status) {
        setStatus(e.status);
      }
      if (e.customerId) {
        setCustomerId(e.customerId);
      }
      if (e.merchantId) {
        setMerchantId(e.merchantId);
      }
      if (e.startDate && e.endDate) {
        setStartDate(dateToString(e.startDate));
        setEndDate(dateToString(e.endDate));
      }
    },
    [],
  );

  const renderOrdersFilter = React.useCallback(
    (searchCustomersResponse, searchMerchantsResponse, searchCustomersRequestError, searchMerchantsRequestError) => {
      return (
        <>
          {!searchCustomersRequestError && !searchMerchantsRequestError && (
            <FilterWrapperComponent>
              <OrderListFilterComponent
                selectedCustomer={{ id: customerId, key: customerName }}
                selectedMerchant={{ id: merchantId, key: merchantName }}
                selectedStatus={status}
                selectedStartDate={startDate ? stringToDate(startDate) : undefined}
                selectedEndDate={endDate ? stringToDate(endDate) : undefined}
                onSubmit={handleFilterSubmit}
                showMerchantFilter={props.showMerchantFilter}
                showCustomerFilter={props.showCustomerFilter}
                onCustomerFilterType={onCustomerSearchType}
                onMerchantFilterType={onMerchantSearchType}
                filteredCustomerList={
                  searchCustomersResponse && searchCustomersResponse.length > 0
                    ? searchCustomersResponse.map((c: ICommonCustomerResponse) => {
                        return { id: c.id, key: c.username };
                      })
                    : []
                }
                filteredMerchantList={
                  searchMerchantsResponse && searchMerchantsResponse.length > 0
                    ? searchMerchantsResponse.map((m: ICommonMerchantResponse) => {
                        return { id: m.merchantId, key: m.merchantName };
                      })
                    : []
                }
              />
            </FilterWrapperComponent>
          )}
        </>
      );
    },
    [
      customerId,
      customerName,
      merchantId,
      merchantName,
      status,
      startDate,
      endDate,
      handleFilterSubmit,
      props.showMerchantFilter,
      props.showCustomerFilter,
      onCustomerSearchType,
      onMerchantSearchType,
    ],
  );

  return {
    customerId,
    merchantId,
    customerName,
    merchantName,
    isCustomerSearching,
    isMerchantSearching,
    startDate,
    endDate,
    status,
    renderOrdersFilter,
  };
}
