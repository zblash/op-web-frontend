import * as React from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import styled from 'styled-components';
import { Colors } from '../../utils/colors';

/* DatePickerComponent Helpers */
export interface DatePickerComponentProps<
  CustomModifierNames extends string = never,
  WithRange extends boolean = boolean,
> extends ReactDatePickerProps<CustomModifierNames, WithRange> {
  labelKey: string;
  labelClassName?: string;
  name: string;
}

const StyledDatePickerWrapper = styled.div`
  .datePickerInput {
    width: 100%;
    min-height: 38px;
    height: calc(1.5 em + 0.75 rem + 2 px);
    padding: 0.375 rem 0.75 rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${Colors.primary};
    background-color: ${Colors.white};
    background-clip: padding-box;
    border: 1px solid ${Colors.lightGray};
    border-radius: 0;
  }

  .react-datepicker__close-icon::after {
    background-color: red;
  }
`;
/* DatePickerComponent Component  */
function DatePickerComponent(props: DatePickerComponentProps) {
  /* DatePickerComponent Variables */

  /* DatePickerComponent Callbacks */
  /* DatePickerComponent Lifecycle  */

  return (
    <StyledDatePickerWrapper>
      <label className={props.labelClassName} htmlFor={props.name}>
        {props.labelKey}
      </label>
      <DatePicker {...props} className="datePickerInput" withPortal dateFormat="dd-MM-yyyy" />
    </StyledDatePickerWrapper>
  );
}
const PureDatePickerComponent = React.memo(DatePickerComponent);

export { PureDatePickerComponent as DatePickerComponent };
