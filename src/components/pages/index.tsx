import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from 'components/pages/routes';

export default function Pages(): React.ReactElement<{}> {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
}
