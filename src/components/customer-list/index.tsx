import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { TOrderStatus, IOrder, CreditPaymentType } from '../../utils/api/api-models';
import { UILink } from '../..';

/* CustomerListComponent Helpers */
interface CustomerListComponentProps {
  orders: IOrder[];
  elementCountOfPage: number;
  setSortBy: (e: any) => void;
  setSortType: (e: 'desc' | 'asc') => void;
  handlePdfBtnClick: (e: IOrder) => void;
  onPageChange?: (pageNumber: number) => void;
  onOrderUpdated: (id: string, paidPrice?: number, paymentType?: CreditPaymentType, waybillDate?: string) => void;
  showFinishedButton?: boolean;
  showMerchantName?: boolean;
  showCustomerName?: boolean;
  showUpdatePopup?: boolean;
  sortObject?: { sortName: string; sortType: 'asc' | 'desc' };
}

/* CustomerListComponent Constants */
const ORDER_STATUS_MAP: Record<TOrderStatus, string> = {
  NEW: 'Yeni',
  FINISHED: 'Teslim Edildi',
  CANCELLED: 'Iptal Edildi',
  CONFIRMED: 'Onaylandi',
  CANCEL_REQUEST: 'Iptal Istegi',
  PREPARED: 'Hazirlaniyor/Hazir',
  ON_WAY: 'Yolda',
};
/* CustomerListComponent Styles */

/* CustomerListComponent Component  */
function CustomerListComponent(props: React.PropsWithChildren<CustomerListComponentProps>) {
  /* CustomerListComponent Variables */
  const { t } = useTranslation();
  const [selectedItemForUpdate, setSelectedItemForUpdate] = React.useState<IOrder>();
  const [isPopupOpened, setIsPopupOpened] = React.useState<boolean>(false);
  /* CustomerListComponent Callbacks */

  const memoColumns = React.useMemo(() => {
    const columns = [
      {
        Header: t('order.code'),
        accessor: 'id',
        sort: true,
        sortType: props.sortObject && props.sortObject.sortName === 'id' ? props.sortObject.sortType : 'desc',
        customRenderer: (item: IOrder) => item.id.slice(0, 10) as UITableCustomRendererTypes,
      },
    ] as any[];
    if (props.showCustomerName) {
      columns.push({
        Header: t('common.customer'),
        accessor: 'buyerName',
      });
    }
    if (props.showMerchantName) {
      columns.push({
        Header: t('common.merchant'),
        accessor: 'merchantName',
        customRenderer: (item: IOrder) => item.merchant.merchantName,
      });
    }
    return columns.concat([
      {
        Header: t('order.order-date'),
        accessor: 'orderDate',
      },
      {
        Header: t('order.order-waybill-date'),
        accessor: 'waybillDate',
      },
      {
        Header: t('order.quantity'),
        accessor: 'orderItems',
        sort: true,
        sortType: props.sortObject && props.sortObject.sortName === 'orderItems' ? props.sortObject.sortType : 'desc',
        customRenderer: (item: IOrder) => item.orderItems.length,
      },
      {
        Header: t('order.status-text'),
        accessor: 'status',
        customRenderer: (item: IOrder) => ORDER_STATUS_MAP[item.status],
      },
      {
        Header: t('common.total-price'),
        accessor: 'totalPrice',
        customRenderer: (item: IOrder) => `${item.totalPrice} TL`,
      },
      {
        Header: '',
        accessor: 'operations',
        customRenderer: (item: IOrder) => (
          <div className="d-flex justify-content-center align-items-center">
            {props.showFinishedButton && (item.status === 'CONFIRMED' || item.status === 'PREPARED') && (
              <Button
                variant="link"
                onClick={() => {
                  setSelectedItemForUpdate(item);
                  setIsPopupOpened(true);
                }}
              >
                Teslimat
              </Button>
            )}
            <UILink to={`/order/${item.id}`}> {t('common.details')}</UILink>
            {item.status === 'FINISHED' && (
              <Button variant="link" onClick={x => props.handlePdfBtnClick(item)}>
                Yazdir
              </Button>
            )}
          </div>
        ),
      },
    ]);
  }, [props, t]);
  /* CustomerListComponent Lifecycle  */

  return (
    <>
      <UITableComponent
        columns={memoColumns}
        data={props.orders}
        currentPage={1}
        onPageChange={props.onPageChange}
        onSortChange={props.setSortBy}
        onSortTypeChange={props.setSortType}
        pagination
        showLastOrFirstPage
        showPageSize={7}
        totalPages={props.elementCountOfPage}
      />
      {props.showUpdatePopup && (
        <UpdateOrderPopupComponent
          orderId={selectedItemForUpdate?.id}
          isOpened={isPopupOpened}
          onShowingChanged={(e: boolean) => {
            setIsPopupOpened(e);
          }}
          onSubmit={(id: string, paidPrice?: number, paymentType?: CreditPaymentType, waybillDate?: string) => {
            setIsPopupOpened(false);
            props.onOrderUpdated(id, paidPrice, paymentType, waybillDate);
          }}
        />
      )}
    </>
  );
}
const PureCustomerListComponent = React.memo(CustomerListComponent);

export { PureCustomerListComponent as CustomerListComponent };
