import * as React from 'react';
import Table, { TableCard, TableItem } from 'components/ui/Table';

interface TableContentParserProps {
  data: object[];
  children: (obj: Record<string, any>) => React.ReactNode;
  onClick?: (obj: object) => void;
}

export default function TableContentParser(props: TableContentParserProps) {
  const { data, onClick, children } = props;
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
      {data.map((obj, index) => (
        <TableCard key={index} onClick={onClickHandler(obj)}>
          {children(obj)}
        </TableCard>
      ))}
    </Table>
  );
}
