import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { CgDanger } from 'react-icons/cg';
import { ApiCallService, ApiCall } from '../../utils/api/ApiCall';
import { FullScreenLoading } from '../loading/full-screen-loading';
import styled from 'styled-components';

const StyledPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  text-align: center;
  padding: 16px;
`;

function CheckHealth(props: React.PropsWithChildren<any>) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    ApiCallService.request(new (ApiCall as any)().setUrl(`/health`, false).get())
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <FullScreenLoading />;
  }

  if (hasError) {
    return (
      <StyledPageContainer>
        <CgDanger color="#9e9e9e" size={46} />
        <StyledTitle>{t('not-connect-page.message')}</StyledTitle>
      </StyledPageContainer>
    );
  }

  return props.children;
}

export { CheckHealth };
