import * as React from 'react';
import styled from 'styled-components';
import Portal from '../portal';
import { DefaultLoading } from './default-loading';

/*
  FullScreenLoading Helpers
*/
interface FullScreenLoadingProps {
  className?: string;
}

/*
  FullScreenLoading Colors // TODO : move theme.json
*/
const FullScreenLoadingColors = {
  wrapperBackground: '#fff',
};

/*
  FullScreenLoading Styles
*/

const StyledFullScreenLoadingWrapper = styled.div`
  background-color: ${FullScreenLoadingColors.wrapperBackground};
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

const FullScreenLoading: React.SFC<FullScreenLoadingProps> = React.memo(props => (
  <Portal>
    <StyledFullScreenLoadingWrapper className={props.className}>
      <DefaultLoading />
    </StyledFullScreenLoadingWrapper>
  </Portal>
));

export { FullScreenLoading };
