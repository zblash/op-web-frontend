import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/colors';

interface CheckboxProps {
  id: string;
  label: React.ReactElement | string;
  hasError?: boolean;
  unCheckedlabel?: React.ReactElement | string;
  onChange?: (isChecked: boolean) => void;
  alwaysHighlighted?: boolean;
  value?: boolean;
  className?: string;
}

const StyledLabel = styled.label<{ poition: 'left' | 'right' }>`
  margin-left: ${props => (props.poition === 'right' ? 8 : 0)}px;
  margin-right: ${props => (props.poition === 'left' ? 8 : 0)}px;
  cursor: pointer;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input<{ isAlwaysHighlighted?: boolean }>`
  position: relative;
  flex-shrink: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  cursor: pointer;
  width: 32px;
  height: 16px;
  border: 2px solid ${props => (props.isAlwaysHighlighted ? Colors.primary : Colors.gray)};
  border-radius: 16px;

  ::before {
    content: ' ';
    position: absolute;
    transition: all 0.1s;
    top: 2px;
    right: 18px;
    bottom: 2px;
    left: 2px;
    border-radius: 50%;
    background: ${props => (props.isAlwaysHighlighted ? Colors.primary : Colors.gray)};
  }
  :checked {
    border-color: ${Colors.primary};
    ::before {
      right: 2px;
      left: 18px;
      background: ${Colors.primary};
    }
  }
`;

function UICheckbox(props: CheckboxProps) {
  const { id, label, unCheckedlabel } = props;

  return (
    <StyledCheckboxWrapper className={props.className}>
      {unCheckedlabel && <StyledLabel poition="left">{unCheckedlabel}</StyledLabel>}
      <StyledCheckbox
        checked={props.value}
        isAlwaysHighlighted={props.alwaysHighlighted}
        type="checkbox"
        id={id}
        onChange={e => {
          if (props.onChange) {
            props.onChange(e.target.checked);
          }
        }}
      />
      <StyledLabel poition="right">{label}</StyledLabel>
    </StyledCheckboxWrapper>
  );
}

export { UICheckbox };
