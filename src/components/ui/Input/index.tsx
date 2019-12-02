import * as React from 'react';
import styled from '@emotion/styled';
import __layouts from 'settings/__layouts';
import { fontSizes } from 'settings/__fonts';
import __spacing from 'settings/__spacing';
import { GAINS_BORO, GRAY, CRIMSON } from 'settings/__color';

type InputType = 'text' | 'number' | 'email' | 'password';

interface InputProps {
  type?: InputType;
  name: string,
  title: string,
  value: string;
  errorFeedback?: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const {
    type = 'text', name, title,
    handleChange, handleBlur = () => true,
    value, errorFeedback = [],
  } = props;
  return (
    <Input.Wrapper>
      <label>{title}</label>
      <span className="input-wrapper">
        <input
          value={value}
          name={name}
          type={type}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </span>
      {errorFeedback && errorFeedback.map(message => <span key={message} className="input-error-feedback">{message}</span>)}
    </Input.Wrapper>
  );
}

Input.Wrapper = styled.div`

  @media (max-width: ${__layouts.lg}) {
    &:first-child{
      margin-top: 10%;
    }
  }
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

  .input-wrapper {
    border: 1px solid ${GAINS_BORO};
    border-radius: 3px;
    margin: ${__spacing.xSmall} 0;

    input {
      width: 100%;
      font-size: ${fontSizes.small};
      padding: ${__spacing.small};
      border: none;

      &:focus {
        outline: none;
      }
    }
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