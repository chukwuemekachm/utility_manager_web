import * as React from 'react';
import styled from '@emotion/styled';
import { fontSizes } from 'settings/__fonts';
import __spacing from 'settings/__spacing';
import { GAINS_BORO, GRAY } from 'settings/__color';

export interface TextAreaProps {
  rows: number;
  name: string;
  title: string;
  value: string;
  errorFeedback?: string[];
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

function TextArea(props: TextAreaProps): React.ReactElement<TextAreaProps> {
  const { rows, name, title, value, handleChange, handleBlur = (): boolean => true, errorFeedback = [] } = props;
  return (
    <TextArea.Wrapper>
      <label>{title}</label>
      <span className="input-wrapper">
        <textarea rows={rows} name={name} value={value} onChange={handleChange} onBlur={handleBlur} />
      </span>
      {errorFeedback &&
        errorFeedback.map(message => (
          <span key={message} className="input-error-feedback">
            {message}
          </span>
        ))}
    </TextArea.Wrapper>
  );
}

TextArea.Wrapper = styled.div`
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

    textarea {
      width: 100%;
      font-size: ${fontSizes.small};
      padding: ${__spacing.small};
      border: none;

      &:focus {
        outline: none;
      }
    }
  }
`;

export default TextArea;
