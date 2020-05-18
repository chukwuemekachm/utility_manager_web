import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'components/ui/Button';
import { BRAND_WHITE } from 'settings/__color';


import MoreAction from '.';

export default {
  component: MoreAction,
  title: 'components/ui/MoreAction',
};
export function moreButton(): React.ReactElement<{}> {
  return (
    <MoreAction handleBlur={action('handleBlur')}>
      {
        <>
          <Button inverted borderColor={BRAND_WHITE} type="submit" disabled={false}>
            Edit
          </Button>
          <Button inverted borderColor={BRAND_WHITE} type="submit" disabled={false}>
            Delete
          </Button>
        </>
      }
    </MoreAction>
  );
}
