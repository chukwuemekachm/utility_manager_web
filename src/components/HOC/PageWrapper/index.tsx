import * as React from 'react';
import styled from '@emotion/styled';
import {connect} from 'react-redux'

import {retrieveLastPageState} from 'store/actions/navigation'

function PageWrapper({children, retrieveDataForPage}) {
    retrieveDataForPage();
  return (
    <main>
        {children}
    </main>
  );
}


const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch => ({
    retrieveDataForPage: payload=> dispatch(retrieveLastPageState())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
