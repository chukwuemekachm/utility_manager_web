import * as React from 'react';
import { WHITE_SMOKE } from 'settings/__color';
import styled from '@emotion/styled';

interface TableContentParserProps {
  data?: object[];
  children: (obj: Record<string, any>) => React.ReactNode;
  onClick?: Function;
  lastRef?: React.RefObject<any>;
  headerParser?: () => React.ReactNode;
  top?: string;
}

export default function TableContentParser(props: TableContentParserProps) {
  const { data = [], onClick, children, lastRef, headerParser, top } = props;

  return (
    <TableContentParser.Div top={top}>
      <table>
        {headerParser && (
          <thead>
            <tr>{headerParser()}</tr>
          </thead>
        )}

        <tbody>
          {data.length == 0 ? (
            <tr>
              <td align="center" colSpan={4000}>
                No results were found{' '}
              </td>
            </tr>
          ) : (
            data.map((obj, index) =>
              index == data.length - 1 ? (
                <tr key={index} ref={lastRef}>
                  {children(obj)}
                </tr>
              ) : (
                <tr key={index}>{children(obj)}</tr>
              ),
            )
          )}
        </tbody>
      </table>
    </TableContentParser.Div>
  );
}

TableContentParser.Div = styled.div<Pick<TableContentParserProps, 'top'>>`
  position: relative;
  table {
    width: 100%;
    display: table;
    border-spacing: 0;
    border-collapse: collapse;
  }
  thead {
    font-weight: bolder;
    position: relative;
  }
  tbody {
    padding-top: 4%;
  }
  th,
  td {
    /* display: table-cell; */
    padding: 1em;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    line-height: 1.43;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    vertical-align: inherit;
  }

  th {
    position: -webkit-sticky;
    position: sticky;
    top: ${props => props.top || 0};
    background-color: ${WHITE_SMOKE};
    font-weight: bold;
    z-index: 1;
  }
`;
