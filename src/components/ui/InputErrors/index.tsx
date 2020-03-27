import * as React from 'react';
import styled from '@emotion/styled';

import { fontSizes } from 'settings/__fonts';
import { CRIMSON } from 'settings/__color';
import __spacing from 'settings/__spacing';
import { InputProps } from 'components/ui/Input';

export default function InputErrors(
  props: Pick<InputProps, 'errorFeedback'>,
): React.ReactElement<Pick<InputProps, 'errorFeedback'>> {
  const { errorFeedback } = props;
  return (
    <InputErrors.Wrapper>
      {errorFeedback &&
        errorFeedback.map(message => (
          <span key={message} className="input-error-feedback">
            {message}
          </span>
        ))}
    </InputErrors.Wrapper>
  );
}

InputErrors.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
