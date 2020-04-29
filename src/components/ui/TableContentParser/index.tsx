import * as React from 'react';
import Table, { TableCard, TableItem } from 'components/ui/Table';

interface TableContentParserProps {
  data?: object[];
  children: (obj: Record<string, any>) => React.ReactNode;
  onClick?: Function;
  lastRef?: string;
  headerConfig?: {
    text: string;
    flexValue: number;
  }[];
}

export default function TableContentParser(props: TableContentParserProps) {
  const { data = [], onClick, children, lastRef, headerConfig } = props;
  if (data.length === 0) {
    return (
      <Table>
        <TableCard>
          <TableItem textAlign="center">No Results was found</TableItem>
        </TableCard>
      </Table>
    );
  }
  function onClickHandler(obj): React.EventHandler<React.SyntheticEvent> {
    return function(e) {
      e.preventDefault();
      onClick && onClick(obj);
    };
  }

  return (
    <Table>
      {headerConfig && (
        <TableCard isHeader>
          {headerConfig.map((header, index) => (
            <TableItem key={index} flexValue={header.flexValue}>
              {header.text}
            </TableItem>
          ))}
        </TableCard>
      )}

      {data.map((obj, index) =>
        index == data.length - 1 ? (
          <TableCard lastRef={lastRef} key={index} onClick={onClick && onClickHandler(obj)}>
            {children(obj)}
          </TableCard>
        ) : (
          <TableCard key={index} onClick={onClick && onClickHandler(obj)}>
            {children(obj)}
          </TableCard>
        ),
      )}
    </Table>
  );
}
