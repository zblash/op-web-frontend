import * as React from 'react';
import styled from 'styled-components';
import { Loading } from './loading';
import { Colors } from '../../utils/colors';

/*
  DefaultLoading Helpers
*/

/*
  DefaultLoading Colors // TODO : move theme.json
*/

/*
  DefaultLoading Styles
*/

const StyledDefaultLoadingWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: 'transparent';
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultLoading: React.FC = () => (
  <StyledDefaultLoadingWrapper>
    <Loading size={70} color={Colors.primary} />
  </StyledDefaultLoadingWrapper>
);

export { DefaultLoading };
