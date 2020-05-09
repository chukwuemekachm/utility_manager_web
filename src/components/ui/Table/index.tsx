import * as React from 'react';
import styled from '@emotion/styled';
import { SECONDARY_LIGHT_SMOKE, WHITE_SMOKE, GAINS_BORO } from 'settings/__color';

interface ItemProps {
  flexValue?: number;
  children: React.ReactNode | string;
  textAlign?: string;
  onClick?: React.EventHandler<React.SyntheticEvent>;
}

interface CardProps extends Pick<ItemProps, 'children' | 'onClick'> {
  lastRef?: string;
  isHeader?: boolean;
  mouseCursor?: boolean;
  thickness?: 'LARGE' | 'NORMAL' | 'SMALL';
}
export function TableItem(props: ItemProps): React.ReactElement {
  const { children, flexValue = 1, textAlign = 'left' } = props;

  return (
    <TableItem.TD textAlign={textAlign} flexValue={flexValue}>
      {children}
    </TableItem.TD>
  );
}
export function TableCard(props: CardProps): React.ReactElement {
  const { children, onClick, lastRef = null, isHeader = false, thickness } = props;
  console.log('thickness', thickness);
  return (
    <TableCard.Wrapper
      thickness={thickness}
      isHeader={isHeader}
      ref={lastRef}
      mouseCursor={!!onClick}
      onClick={onClick}
    >
      {children}
    </TableCard.Wrapper>
  );
}

TableItem.TD = styled.td<Pick<ItemProps, 'flexValue' | 'textAlign'>>`
  /* flex: ${props => props.flexValue}; */
  text-align: ${props => props.textAlign};
  
  /* width: 100%; */
  
`;

TableItem.TH = styled.th<Pick<ItemProps, 'flexValue' | 'textAlign'>>`
  text-align: ${props => props.textAlign};
`;

TableCard.Wrapper = styled.tr<CardProps>`
  /* display: flex; */
  height: 3.125em;
  background-color: white;
  padding: 0;
  color: black;
  align-items: center;
  font-weight: inherit;

  padding: ${props =>
    props.thickness == 'LARGE'
      ? '3.5% 0'
      : props.thickness == 'NORMAL'
      ? '1.5% 0'
      : props.thickness == 'SMALL'
      ? '1.5% 0 '
      : '0'};
  &:hover {
    background-color: ${GAINS_BORO};
    cursor: pointer;
  }

  &:nth-child(2n) {
    background-color: ${SECONDARY_LIGHT_SMOKE};
  }
  ${props =>
    props.isHeader &&
    `
    font-weight: bold ;

    top: 0;
    right: 0;
    background-color:white; 
    border-bottom: solid 1px black;
    padding: 3% 0;
  `}
  padding-left: 2%;
`;

function Table({ children }: Pick<ItemProps, 'children'>) {
  return <Table.Wrapper>{children}</Table.Wrapper>;
}
Table.Wrapper = styled.table`
  position: relative;
  z-index: -1;
  width: 100%;

  td {
  }
`;

export default Table;
