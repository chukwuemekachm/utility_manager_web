import React from 'react';
import { action } from '@storybook/addon-actions';
import TableContentParser from '.';
import { TableItem } from '../Table';

export default {
  component: TableContentParser,
  title: 'components/ui/TableContentParser',
};

const contentParserFn = obj => {
  return (
    <>
      <td>{obj.name}</td>
      <td>{obj.description}</td>
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

  const headerParser = () => (
    <>
      <th>Name</th>
      <th>Description</th>
    </>
  );
  return (
    <TableContentParser
      handleDisplayMoreAction={action('handleDisplayMoreAction!!')}
      headerParser={headerParser}
      data={data}
    >
      {contentParserFn}
    </TableContentParser>
  );
};
