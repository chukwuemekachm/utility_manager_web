import React from 'react';
import Table, { TableCard, TableItem } from '.';
import Checkbox from '../Checkbox';
import { action } from '@storybook/addon-actions';
import Icon from 'components/ui/Icon';
import { text, boolean } from '@storybook/addon-knobs';

export default {
  component: Table,
  title: 'components/ui/Table',
};

export const TableWithCheckBoxes = (): React.ReactElement<{}> => (
  <Table>
    <TableCard>
      <TableItem flexValue={1}>
        <Checkbox
          name="row-1"
          checked={boolean('checkbox1', false)}
          value=""
          handleChange={action('Checkbox Clicked!!')}
        />
      </TableItem>
      <TableItem flexValue={4}> {text('0,0', 'Row ')}</TableItem>
      <TableItem flexValue={2}>{text('0,1', 'Row ')}</TableItem>
      <TableItem flexValue={1}>{text('0,2', 'Row ')}</TableItem>
    </TableCard>
    <TableCard>
      <TableItem flexValue={1}>
        <Checkbox
          name="row-2"
          value=""
          checked={boolean('checkbox2', true)}
          handleChange={action('Checkbox Clicked!!')}
        />
      </TableItem>
      <TableItem flexValue={4}> {text('1,0', 'Row ')}</TableItem>
      <TableItem flexValue={2}>{text('1,1', 'Row ')}</TableItem>
      <TableItem flexValue={1}>{text('1,2', 'Row ')}</TableItem>
    </TableCard>
  </Table>
);

export const TableWithIcons = (): React.ReactElement<{}> => (
  <Table>
    <TableCard>
      <TableItem flexValue={1}>
        <Icon iconType="md-star" size="LARGE" color="INFO" />
        <Icon iconType="md-star-half" size="LARGE" color="INFO" />
        <Icon iconType="md-star-outline" size="LARGE" color="INFO" />
      </TableItem>
      <TableItem flexValue={4}>{text('0,0', 'Row ')}</TableItem>
      <TableItem flexValue={2}>{text('0,1', 'Row ')}</TableItem>
      <TableItem flexValue={1}>{text('0,2', 'Row ')}</TableItem>
    </TableCard>
    <TableCard>
      <TableItem flexValue={1}>
        <Icon iconType="md-star" size="LARGE" color="INFO" />
      </TableItem>
      <TableItem flexValue={4}>Row One</TableItem>
      <TableItem flexValue={2}>Row One</TableItem>
      <TableItem flexValue={1}>Row One</TableItem>
    </TableCard>
    <TableCard>
      <TableItem flexValue={1}>
        <Icon iconType="md-star-half" size="LARGE" color="INFO" />
      </TableItem>
      <TableItem flexValue={4}>Row One</TableItem>
      <TableItem flexValue={2}>Row One</TableItem>
      <TableItem flexValue={1}>Row One</TableItem>
    </TableCard>
    <TableCard>
      <TableItem flexValue={1}>
        <Icon iconType="md-star-outline" size="LARGE" color="INFO" />
      </TableItem>
      <TableItem flexValue={4}>Row One</TableItem>
      <TableItem flexValue={2}>Row One</TableItem>
      <TableItem flexValue={1}>Row One</TableItem>
    </TableCard>
  </Table>
);

export const TableWithHeaders = (): React.ReactElement<{}> => (
  <Table>
    <TableCard isHeader>
      <TableItem flexValue={1}>Date Logged</TableItem>
      <TableItem flexValue={2}>Energy Consumed</TableItem>
      <TableItem flexValue={2}>Power Rating</TableItem>
      <TableItem flexValue={2}>Engine Speed</TableItem>
    </TableCard>
    <TableCard>
      <TableItem flexValue={1}>21/01/2020 17:57</TableItem>
      <TableItem flexValue={2}>379J</TableItem>
      <TableItem flexValue={2}>3.5KVA</TableItem>
      <TableItem flexValue={2}>21km/h</TableItem>
    </TableCard>
    <TableCard>
      <TableItem flexValue={1}>21/01/2020 17:57</TableItem>
      <TableItem flexValue={2}>379J</TableItem>
      <TableItem flexValue={2}>3.5KVA</TableItem>
      <TableItem flexValue={2}>21km/h</TableItem>
    </TableCard>
    <TableCard>
      <TableItem flexValue={1}>21/01/2020 17:57</TableItem>
      <TableItem flexValue={2}>379J</TableItem>
      <TableItem flexValue={2}>3.5KVA</TableItem>
      <TableItem flexValue={2}>21km/h</TableItem>
    </TableCard>
    <TableCard>
      <TableItem flexValue={1}>21/01/2020 17:57</TableItem>
      <TableItem flexValue={2}>379J</TableItem>
      <TableItem flexValue={2}>3.5KVA</TableItem>
      <TableItem flexValue={2}>21km/h</TableItem>
    </TableCard>
  </Table>
);
