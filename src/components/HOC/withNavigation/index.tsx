import * as React from 'react';
import { connect } from 'react-redux';

import { retrieveLastPageState } from 'store/actions/navigation';

interface PageWrapperProps {
  children: React.ReactNode;
  retrievePageData: () => void;
}

function PageWrapper({ children, retrievePageData }: PageWrapperProps): React.ReactElement<PageWrapperProps> {
  retrievePageData();
  return <div>{children}</div>;
}

const mapDispatchToProps = (dispatch): Pick<PageWrapperProps, 'retrievePageData'> => ({
  retrievePageData: (): void => dispatch(retrieveLastPageState()),
});

export default connect(null, mapDispatchToProps)(PageWrapper);
