import * as React from 'react';
import { IPaginationWrapper, IOrder, OrderListComponent, CreditPaymentType } from '../..';
import { UITableSortTypes } from '../../components/table';

export interface OrdersListHookProps {
  showCustomerName: boolean;
  showMerchantName: boolean;
  handlePdfBtnClick: (e: IOrder) => void;
}

export function useOrdersListHOC(props: OrdersListHookProps) {
  const [sortBy, setSortBy] = React.useState<string>();
  const [sortType, setSortType] = React.useState<UITableSortTypes>();
  const [allOrdersPageNumber, setAllOrdersPageNumber] = React.useState<number>(1);

  const onChangePage = React.useCallback((pageIndex: number) => {
    setAllOrdersPageNumber(pageIndex);
  }, []);

  function renderOrderList(orders: IPaginationWrapper<IOrder>, updateOrder) {
    return (
      <OrderListComponent
        setSortBy={setSortBy}
        setSortType={setSortType}
        orders={orders.values}
        sortObject={{ sortType, sortName: sortBy }}
        elementCountOfPage={orders.totalPage}
        handlePdfBtnClick={props.handlePdfBtnClick}
        onPageChange={onChangePage}
        showFinishedButton
        showCustomerName={props.showCustomerName}
        showMerchantName={props.showMerchantName}
        showUpdatePopup
        onOrderUpdated={(id: string, paidPrice?: number, paymentType?: CreditPaymentType, waybillDate?: string) => {
          updateOrder({
            id,
            paidPrice,
            status: 'FINISHED',
            paymentType,
            waybillDate,
          });
        }}
      />
    );
  }

  return { sortBy, sortType, allOrdersPageNumber, renderOrderList };
}
