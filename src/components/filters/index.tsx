import * as React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { TOrderStatus } from '../../utils/api/api-models';
import styled from 'styled-components';
import { UISelect, DatePickerComponent } from '../..';
import { SearchComponent, ResultItem, SearchComponentProps } from '../search-component';
import { UISelectProps } from '../select';
import { DatePickerComponentProps } from '../datepicker';
import { UIInput, UIInputProps } from '../input';

/* FiltersComponent Helpers */
interface FilterFieldProps {
  type: string;
  input: UISelectProps | SearchComponentProps | DatePickerComponentProps | UIInputProps;
}

interface FiltersComponentProps {
  id: string;
  fields: Array<FilterFieldProps>;
  onSubmit: () => void;
}
/* FiltersComponent Constants */

/* FiltersComponent Styles */

/* FiltersComponent Component  */
function FiltersComponent(props: React.PropsWithChildren<FiltersComponentProps>) {
  /* FiltersComponent Variables */

  /* FiltersComponent Callbacks */
  const renderFields = React.useMemo(() => {
    return (
      <>
        {props.fields.map((item: FilterFieldProps, index: number) => {
          let component;
          switch (item.type) {
            case 'select':
              component = <UISelect {...(item.input as UISelectProps)} />;
              break;
            case 'date':
              component = <DatePickerComponent {...(item.input as DatePickerComponentProps)} />;
              break;
            case 'search':
              component = <SearchComponent {...(item.input as SearchComponentProps)} />;
              break;
            default:
              component = <UIInput {...(item.input as UIInputProps)} />;
          }

          return (
            <Col key={`${props.id}-field-${index}`} lg={6} md={6} xl={6} sm={12} xs={12}>
              {component}
            </Col>
          );
        })}
      </>
    );
  }, [props]);
  /* FiltersComponent Lifecycle  */

  return (
    <Row>
      {renderFields}
      <Col lg={12} md={12} xl={12} sm={12} xs={12} className="d-flex justify-content-end align-items-center">
        <Button onClick={props.onSubmit}>Filtrele</Button>
      </Col>
    </Row>
  );
}
const PureFiltersComponent = React.memo(FiltersComponent);

export { PureFiltersComponent as FiltersComponent };
