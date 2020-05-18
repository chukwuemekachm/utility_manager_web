import * as React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from 'utils/misc';
import { BRAND_PRIMARY } from 'settings/__color';

export interface MoreButtonProps {
  handleClick?: Function;
  actionIndex?: number;
}

function MoreButton({ handleClick, actionIndex }: MoreButtonProps): React.ReactElement {
  return (
    <MoreButton.Wrapper onClick={() => handleClick(actionIndex)}>
      <MoreButton.Dot></MoreButton.Dot>
      <MoreButton.Dot></MoreButton.Dot>
      <MoreButton.Dot></MoreButton.Dot>
    </MoreButton.Wrapper>
  );
}
const dotSize = convertFromPixelsToRem(5);
MoreButton.Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${convertFromPixelsToRem(3)};
  :hover {
    cursor: pointer;
  }
`;
MoreButton.Dot = styled.span`
  width: ${dotSize};
  height: ${dotSize};
  border-radius: 50%;
  background-color: ${BRAND_PRIMARY};
  margin: ${convertFromPixelsToRem(2)} 0;
`;
export default MoreButton;
