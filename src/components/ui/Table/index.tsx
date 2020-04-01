import * as React from 'react';
import styled from '@emotion/styled';
import { SECONDARY_LIGHT_SMOKE, GAINS_BORO } from 'settings/__color';

interface ItemProps {
  flexValue?: number;
  children: React.ReactNode | string;
  textAlign?: string;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  mouseCursor?: boolean;
}

export function TableItem(props: ItemProps): React.ReactElement {
  const { children, flexValue = 1, textAlign = 'left' } = props;
  return (
    <TableItem.Wrapper textAlign={textAlign} flexValue={flexValue}>
      {children}
    </TableItem.Wrapper>
  );
}
export function TableCard({ children, onClick }: Pick<ItemProps, 'children' | 'onClick'>): React.ReactElement {
  return (
    <TableCard.Wrapper mouseCursor={!!onClick} onClick={onClick}>
      {children}
    </TableCard.Wrapper>
  );
}

TableItem.Wrapper = styled.div<Pick<ItemProps, 'flexValue' | 'textAlign'>>`
  flex: ${props => props.flexValue};
  text-align: ${props => props.textAlign};
  padding-left: 2%;
  width: 100%;
`;
TableCard.Wrapper = styled.div<Pick<ItemProps, 'mouseCursor'>>`
  display: flex;
  height: 3.125em;
  background-color: ${SECONDARY_LIGHT_SMOKE};
  margin-bottom: 20px;
  color: black;
  align-items: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: ${GAINS_BORO};
    cursor: ${props => props.mouseCursor && 'pointer'};
  }
`;

function Table({ children }: Pick<ItemProps, 'children'>) {
  return <Table.Wrapper>{children}</Table.Wrapper>;
}
Table.Wrapper = styled.div`
  padding-top: 2%;
`;

export default Table;
