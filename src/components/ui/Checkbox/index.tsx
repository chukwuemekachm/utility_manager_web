import * as React from 'react';
import styled from '@emotion/styled';
import { fontSizes } from 'settings/__fonts';
import __spacing from 'settings/__spacing';
import { GAINS_BORO, GRAY, CRIMSON, BRAND_PRIMARY } from 'settings/__color';
import { InputProps } from '../Input';
export type InputType = 'text' | 'number' | 'email' | 'password';

export interface CheckboxProps extends Omit<InputProps, 'title' | 'type'> {
  checked: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Checkbox(props: CheckboxProps) {
  const {
    name,
    children,
    disabled = false,
    handleChange,
    handleBlur = () => true,
    value,
    errorFeedback = [],
    checked,
  } = props;
  return (
    <Checkbox.Wrapper>
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
        />{' '}
        <span className="label-text">{children}</span>
      </label>
    </Checkbox.Wrapper>
  );
}

Checkbox.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${__spacing.medium};

  label {
    color: ${GRAY};
    .label-text {
      font-size: ${fontSizes.normal};
    }
    input[type='checkbox'] {
      display: none;
      + .label-text:before {
        speak: none;
        font-family: 'Ionicons';
        font-size: ${fontSizes.xLarge};
        display: inline-block;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        margin-right: 4px;
        width: 1em;
        vertical-align: middle;
        border-radius: 5px;
        color: ${GRAY};
      }
      + .label-text:before {
        content: '\f15c';
      }

      &:disabled + .label-text:before {
        content: '\f381';
        color: #aaa;
      }
      &:checked:disabled + .label-text:before {
        content: '\f148';
        color: #aaa;
      }
      &:checked + .label-text:before {
        content: '\f148';
        -webkit-animation: checkbox-animate 1s; /* Safari 4.0 - 8.0 */
        animation: checkbox-animate 200ms ease-in;
        color: ${BRAND_PRIMARY};
      }
    }
  }

  @keyframes checkbox-animate {
    0% {
      transform: scale(0);
    }

    90% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
