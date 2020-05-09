import * as React from 'react';
import styled from '@emotion/styled';

import { fontSizes } from 'settings/__fonts';
import __spacing from 'settings/__spacing';
import { GRAY, BRAND_PRIMARY, WHITE_SMOKE, GAINS_BORO, LIGHT_GRAY } from 'settings/__color';
import { InputProps } from 'components/ui/Input';

export type InputType = 'text' | 'number' | 'email' | 'password';

export interface CheckBoxProps extends Omit<InputProps, 'title' | 'autoComplete' | 'type'> {
  checked: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  checkboxArgs?: {
    uncheckedTextColor: string | null;
    checkedTextColor: string | null;
    uncheckedLabelBorderColor: string | null;
    checkedIconColor: string | null;
  };
}

export default function CheckBox(props: CheckBoxProps): React.ReactElement<CheckBoxProps> {
  const defaultCheckboxArgs = {
    uncheckedTextColor: null,
    checkedTextColor: null,
    uncheckedLabelBorderColor: null,
    checkedIconColor: null,
  };
  const {
    name,
    children,
    disabled = false,
    handleChange,
    handleBlur = () => true,
    value,
    errorFeedback = [],
    checked,
    checkboxArgs = defaultCheckboxArgs,
  } = props;

  return (
    <CheckBox.Wrapper checked={checked} checkboxArgs={checkboxArgs}>
      <CheckBox.LabelWrapper>
        <CheckBox.Input
          type="checkbox"
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
        />{' '}
        <CheckBox.Label className="label-text">{children}</CheckBox.Label>
      </CheckBox.LabelWrapper>
    </CheckBox.Wrapper>
  );
}

CheckBox.Wrapper = styled.div<Pick<CheckBoxProps, 'checked' | 'checkboxArgs'>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  > *:hover {
    cursor: pointer;
  }
  label {
    color: ${props =>
      props.checked
        ? (props.checkboxArgs && props.checkboxArgs.checkedTextColor) || GRAY
        : (props.checkboxArgs && props.checkboxArgs.uncheckedTextColor) || GRAY};

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
        color: ${props => (props.checkboxArgs && props.checkboxArgs.uncheckedLabelBorderColor) || BRAND_PRIMARY};
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
        color: ${props => (props.checkboxArgs && props.checkboxArgs.checkedIconColor) || BRAND_PRIMARY};
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

CheckBox.Label = styled.span``;

CheckBox.LabelWrapper = styled.label``;

CheckBox.Input = styled.input``;

export function FilledCheckBox(props: CheckBoxProps) {
  const { checked } = props;

  const finalProps = {
    ...props,
    checked: checked,
    checkboxArgs: {
      uncheckedTextColor: 'black',
      checkedTextColor: 'white',
      uncheckedLabelBorderColor: LIGHT_GRAY,
      checkedIconColor: 'white',
    },
  };

  return (
    <FilledCheckBox.DIV checked={checked}>
      <CheckBox {...finalProps} />
    </FilledCheckBox.DIV>
  );
}

FilledCheckBox.DIV = styled.div<Pick<CheckBoxProps, 'checked'>>`
  padding: 3%;
  border: solid 2px ${WHITE_SMOKE};
  box-shadow: 0 0 5px ${WHITE_SMOKE};
  border-radius: 5px 5px;
  ${props =>
    props.checked &&
    `
    background-color: ${BRAND_PRIMARY};
    color: white;
  `}

  &:hover {
    cursor: pointer;
  }
`;
