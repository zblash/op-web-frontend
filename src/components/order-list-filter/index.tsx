import * as React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { TOrderStatus } from '../../utils/api/api-models';
import styled from 'styled-components';
import { UISelect, DatePickerComponent } from '../..';
import { SearchComponent, ResultItem } from '../search-component';
import { FiltersComponent } from '../filters';

/* OrderListFilterComponent Helpers */
interface FilterSubmitParams {
  customerId?: string;
  merchantId?: string;
  startDate?: Date;
  endDate?: Date;
  status?: TOrderStatus;
}

interface OrderListFilterComponentProps {
  selectedStatus?: TOrderStatus;
  selectedCustomer?: ResultItem;
  selectedMerchant?: ResultItem;
  selectedStartDate?: Date;
  selectedEndDate?: Date;
  onSubmit: (e: FilterSubmitParams) => void;
  showCustomerFilter?: boolean;
  showMerchantFilter?: boolean;
  filteredCustomerList?: Array<ResultItem>;
  filteredMerchantList?: Array<ResultItem>;
  onCustomerFilterType?: (key: string) => void;
  onMerchantFilterType?: (key: string) => void;
}
/* OrderListFilterComponent Constants */

/* OrderListFilterComponent Styles */

/* OrderListFilterComponent Component  */
function OrderListFilterComponent(props: React.PropsWithChildren<OrderListFilterComponentProps>) {
  /* OrderListFilterComponent Variables */
  const statusList = React.useMemo<{ value: TOrderStatus; label: string }[]>(() => {
    return [
      { value: 'FINISHED', label: 'Teslim Edildi' },
      { value: 'PREPARED', label: 'Hazirlaniyor' },
      { value: 'NEW', label: 'Yeni' },
      { value: 'CONFIRMED', label: 'Onaylanan' },
      { value: 'CANCELLED', label: 'Iptal' },
      { value: 'CANCEL_REQUEST', label: 'Iptal Isteginde' },
    ];
  }, []);
  const [customerId, setCustomerId] = React.useState<string>(props.selectedCustomer ? props.selectedCustomer.id : '');
  const [merchantId, setMerchantId] = React.useState<string>(props.selectedMerchant ? props.selectedMerchant.id : '');
  const [customerName, setCustomerName] = React.useState<string>(
    props.selectedCustomer ? props.selectedMerchant.key : '',
  );
  const [merchantName, setMerchantName] = React.useState<string>(
    props.selectedMerchant ? props.selectedMerchant.key : '',
  );
  const [startDate, setStartDate] = React.useState<Date>(props.selectedStartDate);
  const [endDate, setEndDate] = React.useState<Date>(props.selectedEndDate);
  const [selectedStatus, setSelectedStatus] = React.useState<{ value: TOrderStatus; label: string }>(
    statusList.find(opt => opt.value === props.selectedStatus),
  );
  /* OrderListFilterComponent Callbacks */
  const handleFilterCustomerChange = React.useCallback(
    (e: string) => {
      setCustomerName(e);
      if (props.onCustomerFilterType) {
        props.onCustomerFilterType(e);
      }
    },
    [props],
  );
  const handleFilterMerchantChange = React.useCallback(
    (e: string) => {
      setMerchantName(e);
      if (props.onMerchantFilterType) {
        props.onMerchantFilterType(e);
      }
    },
    [props],
  );

  const onDatesChanged = React.useCallback(dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }, []);

  const handleFilter = React.useCallback(() => {
    const filterObj = {
      customerId,
      merchantId,
      startDate,
      endDate,
      status: selectedStatus?.value || undefined,
    };
    props.onSubmit(filterObj);
  }, [customerId, endDate, merchantId, props, selectedStatus, startDate]);
  /* OrderListFilterComponent Lifecycle  */

  return (
    <FiltersComponent
      id="orders-filter"
      fields={[
        {
          type: 'select',
          input: {
            value: selectedStatus,
            onChange: (e: { value: TOrderStatus; label: string }) => setSelectedStatus(e),
            options: statusList,
            placeholderKey: 'Secim Yapin',
            labelKey: 'Siparis Durumu',
          },
        },
        {
          type: 'search',
          input: {
            labelKey: 'Musteri Ismi',
            inputName: 'customer-filter',
            searchKey: customerName,
            onTypeCallback: handleFilterCustomerChange,
            onSelectCallback: (x: ResultItem) => {
              setCustomerId(x.id);
            },
            resultList: props.filteredCustomerList,
          },
        },
        {
          type: 'search',
          input: {
            labelKey: 'Satici',
            inputName: 'merchant-filter',
            searchKey: merchantName,
            onTypeCallback: handleFilterMerchantChange,
            onSelectCallback: (x: ResultItem) => {
              setMerchantId(x.id);
            },
            resultList: props.filteredMerchantList,
          },
        },
        {
          type: 'date',
          input: {
            labelKey: 'Tarih',
            name: 'date-ranges',
            placeholderText: 'Tarih',
            selected: startDate,
            maxDate: new Date(),
            onChange: onDatesChanged,
            startDate: startDate,
            endDate: endDate,
            selectsRange: true,
            isClearable: true,
            locale: 'tr',
            dateFormat: 'dd-MM-yyyy',
          },
        },
      ]}
      onSubmit={handleFilter}
    />
  );
}
const PureOrderListFilterComponent = React.memo(OrderListFilterComponent);

export { PureOrderListFilterComponent as OrderListFilterComponent };
