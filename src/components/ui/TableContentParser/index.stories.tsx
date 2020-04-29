import React from 'react';
import TableContentParser from '.';
import { TableItem } from '../Table';

export default {
  component: TableContentParser,
  title: 'components/ui/TableContentParser',
};

const contentParserFn = obj => {
  return (
    <>
      <TableItem flexValue={2}>{obj.name}</TableItem>
      <TableItem flexValue={10}>{obj.description}</TableItem>
    </>
  );
};

export const TableWithNoData = () => {
  return <TableContentParser>{contentParserFn}</TableContentParser>;
};

export const TableWithData = () => {
  const data = [
    { name: 'Some strange name', description: 'Here is the longest description I could type' },
    { name: 'Some strange name 2', description: 'Here is the longest description I could type' },
    { name: 'Some strange name 3', description: 'Here is the longest description I could type' },
    { name: 'Some strange name 4', description: 'Here is the longest description I could type' },
  ];
  return <TableContentParser data={data}>{contentParserFn}</TableContentParser>;
};

export const TableWithHeader = () => {
  const data = [
    { name: 'Some strange name', description: 'Here is the longest description I could type' },
    { name: 'Some strange name 2', description: 'Here is the longest description I could type' },
    { name: 'Some strange name 3', description: 'Here is the longest description I could type' },
    { name: 'Some strange name 4', description: 'Here is the longest description I could type' },
  ];

  const headerConfig = [
    { text: 'Name', flexValue: 2 },
    { text: 'Description', flexValue: 10 },
  ];
  return (
    <TableContentParser headerConfig={headerConfig} data={data}>
      {contentParserFn}
    </TableContentParser>
  );
};
