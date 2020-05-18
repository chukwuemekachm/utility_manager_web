import * as React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from 'utils/misc';
import { WHITE_SMOKE } from 'settings/__color';

export interface MoreActionProps {
  children: React.ReactNode;
  handleBlur?: React.ReactEventHandler;
}

function MoreAction({ children, handleBlur }: MoreActionProps): React.ReactElement<MoreActionProps> {
  return (
    <MoreAction.Wrapper onBlur={handleBlur}>
      <MoreAction.SubWrapper>{children}</MoreAction.SubWrapper>
    </MoreAction.Wrapper>
  );
}
MoreAction.Wrapper = styled.div`
  position: absolute;
  top: ${convertFromPixelsToRem(15)};
  right: ${convertFromPixelsToRem(11)};
  z-index: 65;
`;
MoreAction.SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 11rem;
  background: white;
  margin: 3rem auto;
  padding-top: ${convertFromPixelsToRem(12)};
  padding-bottom: ${convertFromPixelsToRem(3)};
  padding-left: ${convertFromPixelsToRem(3)};
  padding-right: ${convertFromPixelsToRem(3)};
  background: ${WHITE_SMOKE};
  border-radius: ${convertFromPixelsToRem(3)};
  ::before {
    content: '';
    width: 1rem;
    height: 1rem;
    border-top-left-radius: ${convertFromPixelsToRem(3)};
    background: ${WHITE_SMOKE};
    position: absolute;
    top: ${convertFromPixelsToRem(-8)};
    left: 85%;
    transform: translateX(-85%) rotate(45deg);
  }
`;
export default MoreAction;
