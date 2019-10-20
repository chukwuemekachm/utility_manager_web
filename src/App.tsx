import * as React from 'react';
import { Global } from '@emotion/core';

import AuthenticationLayout from 'components/layouts/AuthenticationLayout';
import __globalCss from 'settings/__global.css';
import Authentication from 'components/pages/Authentication';

export default function App() {
  return (
    <AuthenticationLayout>
     <Global styles={__globalCss} />
     <Authentication />
    </AuthenticationLayout>
  );
}
