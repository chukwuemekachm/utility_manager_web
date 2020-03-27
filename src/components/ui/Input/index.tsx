import * as React from 'react';
import styled from '@emotion/styled';
import Icon from 'components/ui/Icon';
import InputErrors from 'components/ui/InputErrors';
import { fontSizes } from 'settings/__fonts';
import __spacing from 'settings/__spacing';
import { GAINS_BORO, GRAY, CRIMSON } from 'settings/__color';

export type InputType = 'text' | 'number' | 'email' | 'password';

export interface InputProps {
  type?: InputType;
  name: string;
  title: string;
  value: string;
  autoComplete?: string;
  errorFeedback?: string[];
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
  } = props;
  return (
    <Input.Container>
      <label>{title}</label>
      <Input.Wrapper>
        {iconLabel && (
          <Input.IconLabel>
            <Icon iconType={iconLabel} size="NORMAL" />
          </Input.IconLabel>
        )}
        <div>
          <input
            autoComplete={autoComplete}
            value={value}
            name={name}
            type={type}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Input.Wrapper>
      <InputErrors errorFeedback={errorFeedback} />
    </Input.Container>
  );
}

Input.Wrapper = styled.div`
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

  > div {
    width: 100%;
  }
`;

Input.IconLabel = styled.div`
  padding-left: ${__spacing.small};
`;

Input.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${__spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }

  label {
    font-size: ${fontSizes.small};
    color: ${GRAY};
  }

  .input-error-feedback {
    font-size: ${fontSizes.small};
    font-weight: 300;
    color: ${CRIMSON};
    margin-bottom: ${__spacing.xSmall};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
