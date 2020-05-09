import * as React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from 'utils/misc';
import { GAINS_BORO } from 'settings/__color';

export interface ModalCardProps {
  cardTitle: string;
  children: React.ReactNode;
  handleToggleModal: React.EventHandler<React.SyntheticEvent>;
  size?: string;
}

function ModalCard({
  children,
  cardTitle,
  handleToggleModal,
  size = 'SMALL',
}: ModalCardProps): React.ReactElement<ModalCardProps> {
  return (
    <ModalCard.Wrapper size={size}>
      <ModalCard.Header>{cardTitle}</ModalCard.Header>
      <ModalCard.CancelIcon onClick={handleToggleModal}>&times;</ModalCard.CancelIcon>
      <ModalCard.Body>{children}</ModalCard.Body>
    </ModalCard.Wrapper>
  );
}

const headerFont = convertFromPixelsToRem(20);
const paddingSize = convertFromPixelsToRem(20);
ModalCard.Wrapper = styled.div<Pick<ModalCardProps, 'size'>>`
  position: relative;
  width: 100%;
  overflow: auto;
  /* height: auto; */
  background-color: white;
  border-radius: ${convertFromPixelsToRem(3)};
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 992px) {
    width: ${props => (props.size === 'NORMAL' ? '50%' : props.size === 'LARGE' ? '75%' : '25%')};
  }
`;
ModalCard.Header = styled.span`
  display: inline-block;
  font-size: ${headerFont};
  width: 100%;
  line-height: ${convertFromPixelsToRem(20)};
  padding: ${paddingSize};
  font-family: Fira Sans;
  font-style: normal;
  border-bottom: 0.75px solid ${GAINS_BORO};
`;
ModalCard.CancelIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: ${convertFromPixelsToRem(30)};
  font-weight: lighter;
  cursor: pointer;
`;
ModalCard.Body = styled.div`
  padding: 0 ${paddingSize};
  margin-top: ${convertFromPixelsToRem(40)};
  margin-bottom: ${convertFromPixelsToRem(14)};
`;
export default ModalCard;
