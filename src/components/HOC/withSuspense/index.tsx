/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import * as React from 'react';

import PageWrapper from 'components/HOC/withNavigation';
import SuspenseLoader from 'components/ui/SuspenseLoader';

interface WithSuspenseProps {
  page: string;
  data?: Record<string, any>;
}

export default function withSuspense(args: WithSuspenseProps): React.FC<null> {
  const { page, data } = args;
  return function(props: Record<string, any>): React.ReactElement<Record<string, any>> {
    const LazyComponent = React.lazy(() => import(`components/pages/${page}`));

    return (
      <React.Suspense fallback={<SuspenseLoader />}>
        <PageWrapper>
          <LazyComponent {...props} {...data} />
        </PageWrapper>
      </React.Suspense>
    );
  };
}
