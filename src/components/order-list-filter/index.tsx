import * as React from 'react';
import DatePicker from 'react-datepicker';
import { Button, Row, Col } from 'react-bootstrap';
import { TOrderStatus } from '../../utils/api/api-models';
import styled, { css } from 'styled-components';
import { UISelect, UIInput } from '../..';
import { SearchComponent, ResultItem } from '../search-component';

/* OrderListFilterComponent Helpers */
interface OrderListFilterComponentProps {
  setCustomerId?: (e: string) => void;
  setMerchantId?: (e: string) => void;
  setLastDate: (e: Date) => void;
  setStatus: (e: TOrderStatus) => void;
  status?: TOrderStatus;
  showCustomerFilter?: boolean;
  showMerchantFilter?: boolean;
  filteredCustomerList?: Array<ResultItem>;
  filteredMerchantList?: Array<ResultItem>;
  onCustomerFilterType?: (key: string) => void;
  onMerchantFilterType?: (key: string) => void;
}
/* OrderListFilterComponent Constants */

/* OrderListFilterComponent Styles */
const StyledNameLabel = styled.label`
  margin-right: 7px;
  padding: 3px;
  float: left;
`;

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
  const [customerId, setCustomerId] = React.useState<string>();
  const [merchantId, setMerchantId] = React.useState<string>();
  const [customerName, setCustomerName] = React.useState<string>('');
  const [merchantName, setMerchantName] = React.useState<string>('');
  const [lastDate, setLastDate] = React.useState<Date>();
  const [selectedStatus, setSelectedStatus] = React.useState<{ value: TOrderStatus; label: string }>(
    statusList.find(opt => opt.value === props.status),
  );
  /* OrderListFilterComponent Callbacks */
  const handleFilterCustomerChange = React.useCallback((e: string) => {
    setCustomerName(e);
    if (props.onCustomerFilterType) {
      props.onCustomerFilterType(e);
    }
  }, []);
  const handleFilterMerchantChange = React.useCallback((e: string) => {
    setMerchantName(e);
    if (props.onMerchantFilterType) {
      props.onMerchantFilterType(e);
    }
  }, []);

  const handleFilter = React.useCallback(() => {
    if (customerId && props.setCustomerId) {
      props.setCustomerId(customerId);
    }
    if (merchantId && props.setMerchantId) {
      props.setMerchantId(customerId);
    }
    if (lastDate) {
      props.setLastDate(lastDate);
    }
    if (selectedStatus) {
      props.setStatus(selectedStatus.value);
    }
  }, []);
  /* OrderListFilterComponent Lifecycle  */

  return (
    <Row>
      <Col lg={3} md={3} xl={3} sm={12} xs={12}>
        <UISelect
          value={selectedStatus}
          onChange={(e: { value: TOrderStatus; label: string }) => setSelectedStatus(e)}
          options={statusList}
          placeholderKey="Secim Yapin"
          labelKey="Siparis Durumu"
        />
      </Col>
      {props.showCustomerFilter && (
        <Col lg={3} md={3} xl={3} sm={12} xs={12}>
          <SearchComponent
            labelKey="Musteri Ismi"
            inputName="customer-filter"
            searchKey={customerName}
            onTypeCallback={handleFilterCustomerChange}
            onSelectCallback={(x: ResultItem) => {
              setCustomerId(x.id);
            }}
            resultList={props.filteredCustomerList}
          />
        </Col>
      )}
      {props.showMerchantFilter && (
        <Col lg={3} md={3} xl={3} sm={12} xs={12}>
          <SearchComponent
            labelKey="Satici"
            inputName="merchant-filter"
            searchKey={merchantName}
            onTypeCallback={handleFilterMerchantChange}
            onSelectCallback={(x: ResultItem) => {
              setMerchantId(x.id);
            }}
            resultList={props.filteredMerchantList}
          />
        </Col>
      )}
      <Col lg={3} md={3} xl={3} sm={12} xs={12} className="d-flex justify-content-center align-items-center">
        <StyledNameLabel>Tarih: </StyledNameLabel>
        <DatePicker
          selected={lastDate}
          maxDate={new Date()}
          onChange={selectedDate => setLastDate(selectedDate)}
          locale="tr"
          dateFormat="yyyy-MM-dd"
        />
      </Col>
      <Col lg={3} md={3} xl={3} sm={12} xs={12} className="d-flex justify-content-end align-items-center">
        <Button disabled={!lastDate && !selectedStatus} onClick={handleFilter}>
          Filtrele
        </Button>
      </Col>
    </Row>
  );
}
const PureOrderListFilterComponent = React.memo(OrderListFilterComponent);

export { PureOrderListFilterComponent as OrderListFilterComponent };
