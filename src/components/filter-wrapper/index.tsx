import * as React from 'react';
import styled from 'styled-components';
import { UIFilterIcon } from '../../icons';
import { Colors } from '../../utils/colors';

/* FilterWrapperComponent Helpers */

interface FilterWrapperComponentProps {
  opened?: boolean;
}

interface StyledFilterWrapperDivProps {
  isOpened: boolean;
}
/* FilterWrapperComponent Constants */

/* FilterWrapperComponent Styles */
const StyledButton = styled.button`
  border: 1px solid ${Colors.lightGray};
  border-radius: 100px;
  width: 30px;
  height: 30px;
  background-color: ${Colors.white};
  float: right;
  margin-bottom: 16px;
`;

const StyledFilterWrapper = styled.div`
  width: 100%;
  opacity: ${(props: StyledFilterWrapperDivProps) => (props.isOpened ? '1' : '0')};
  max-height: ${(props: StyledFilterWrapperDivProps) => (props.isOpened ? 'auto' : '0')};
  overflow: hidden;
  padding: 16px;
  border: 1px solid ${Colors.lightGray};
  transition: all 0.3s;
  margin-bottom: 16px;
`;

/* FilterWrapperComponent Component  */
function FilterWrapperComponent(props: React.PropsWithChildren<FilterWrapperComponentProps>) {
  /* FilterWrapperComponent Variables */
  const [isOpened, setIsOpened] = React.useState(props.opened);
  /* FilterWrapperComponent Callbacks */

  /* FilterWrapperComponent Lifecycle  */
  return (
    <>
      <StyledButton
        onClick={() => {
          setIsOpened(prev => !prev);
        }}
      >
        <UIFilterIcon color={Colors.green} />
      </StyledButton>
      <StyledFilterWrapper isOpened={isOpened}>
        <h3>Filtrele</h3>
        {props.children}
      </StyledFilterWrapper>
    </>
  );
}
const PureFilterWrapperComponent = React.memo(FilterWrapperComponent);

export { PureFilterWrapperComponent as FilterWrapperComponent };
