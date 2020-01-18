import React from 'react';
import NavBar from '.';

export default {
  component: NavBar,
  title: 'components/ui/NavBar',
};

export const logo = (): React.ReactElement<{}> => <NavBar />;
