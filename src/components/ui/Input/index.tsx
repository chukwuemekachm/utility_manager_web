import * as React from 'react';
import styled from '@emotion/styled';
import Icon from 'components/ui/Icon';
import InputErrors from 'components/ui/InputErrors';
import { fontSizes } from 'settings/__fonts';
import __spacing from 'settings/__spacing';
import { GAINS_BORO, GRAY, RED_ORANGE, WHITE_SMOKE } from 'settings/__color';

export type InputType = 'text' | 'number' | 'email' | 'password';

export interface SharedInputProps {
  name?: string;
  title: string;
  value?: string | number;
  autoComplete?: string;
  errorFeedback?: string[];
  placeholder?: string;
  tabIndex?: number;
  required?: boolean;
}
export interface InputProps extends SharedInputProps {
  type?: InputType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  iconLabel?: string;
}

export default function Input(props: InputProps): React.ReactElement<InputProps> {
  const {
    type = 'text',
    name,
    autoComplete,
    title,
    handleChange,
    handleBlur = (): boolean => true,
    value,
    errorFeedback = [],
    iconLabel = '',
    placeholder = '',
    tabIndex,
    required = false,
  } = props;
  return (
    <Input.Container>
      <Input.Label required={required}>{title}</Input.Label>
      <Input.Content>
        {iconLabel && (
          <Input.IconLabel>
            <Icon iconType={iconLabel} size="NORMAL" />
          </Input.IconLabel>
        )}
        <Input.Wrapper>
          <input
            tabIndex={tabIndex}
            autoComplete={autoComplete}
            value={value}
            name={name}
            type={type}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
          />
        </Input.Wrapper>
      </Input.Content>
      <InputErrors errorFeedback={errorFeedback} />
    </Input.Container>
  );
}

Input.Label = styled.label<Pick<SharedInputProps, 'required'>>`
  font-size: ${fontSizes.small};
  color: ${GRAY};
  position: relative;
  &::after {
    display: ${props => (props.required ? 'inline' : 'none')};
    content: '*';
    color: ${RED_ORANGE};
    position: absolute;
    top: 0;
    font-size: ${fontSizes.medium};
    margin-left: ${__spacing.xSmall};
  }
`;

Input.Content = styled.div`
  border: 1px solid ${GAINS_BORO};
  border-radius: 3px;
  margin: ${__spacing.xSmall} 0;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    font-size: ${fontSizes.small};
    padding: ${__spacing.small};
    border: none;
    outline: none;
  }

  &:focus {
    background-color: ${WHITE_SMOKE};
  }
  outline: none;
`;
Input.Wrapper = styled.div`
  width: 100%;
`;
Input.IconLabel = styled.div`
  padding-left: ${__spacing.small};
  width: auto;
`;

Input.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${__spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
  outline: none;
`;
