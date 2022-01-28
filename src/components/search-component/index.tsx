import React from 'react';
import { Col } from 'react-bootstrap';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import { UIInput } from '../..';
import { Colors } from '../../utils/colors';

const StyledResultListWrapper = styled.div`
  width: 100%;
  height: 175px;
  box-shadow: 0 0 0 0.2rem rgb(116 177 38 / 25%);
  margin-top: -15px;
  overflow-y: scroll;
  z-index: 999;
`;

const StyledResultItem = styled.button`
  background-color: white;
  border: 0;
  border-bottom: 1px solid ${Colors.grayLite};
  padding: 5px 0 5px 12px;
  width: 100%;
`;

export interface ResultItem {
  id: string;
  key: string;
}

export interface SearchComponentProps {
  inputName: string;
  labelKey: string;
  searchKey?: string;
  onTypeCallback: (key: string) => void;
  resultList?: Array<ResultItem>;
  onSelectCallback?: (result: ResultItem) => void;
}

/* SearchComponent Component  */
function SearchComponent(props: React.PropsWithChildren<SearchComponentProps>) {
  /* SearchComponent Variables */
  const [searchKey, setSearchKey] = React.useState(props.searchKey || '');
  const [showResultList, setShowResultList] = React.useState(false);
  /* SearchComponent Callbacks */
  const delayedSearch = debounce((e: string) => {
    if (e.length > 2) {
      props.onTypeCallback(e);
    }
  }, 500);

  const onItemSelected = React.useCallback(
    (result: ResultItem) => {
      if (props.onSelectCallback) {
        props.onSelectCallback(result);
      }
      setSearchKey(result.key);
      setShowResultList(false);
    },
    [props],
  );

  const onInputChanged = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchKey(e.target.value);
      delayedSearch(e.target.value);
    },
    [delayedSearch],
  );

  /* SearchComponent Lifecycle  */
  return (
    <>
      <UIInput
        placeholderKey={props.labelKey}
        labelKey={props.labelKey}
        name={props.inputName}
        id={props.inputName}
        value={searchKey}
        onChange={onInputChanged}
        onFocus={() => {
          setShowResultList(true);
        }}
      />
      {props.resultList && props.resultList.length > 0 && showResultList && (
        <StyledResultListWrapper>
          {props.resultList.map((result: ResultItem) => (
            <StyledResultItem key={result.id} onClick={() => onItemSelected(result)}>
              {result.key}
            </StyledResultItem>
          ))}
        </StyledResultListWrapper>
      )}
    </>
  );
}
const PureSearchComponent = React.memo(SearchComponent);

export { PureSearchComponent as SearchComponent };
