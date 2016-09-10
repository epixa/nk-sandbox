'use strict';

import React from 'react';

import { connect } from 'react-redux';

const DiscoverApp = ({ doSomething }) => (
  <div className="discover-app" onClick={doSomething}>
    waaaaaat discover!
  </div>
);

const mapDispatchProps = (dispatch) => ({
  doSomething() {
    dispatch({ type: 'something' });
  }
});

export default connect(null, mapDispatchProps)(DiscoverApp);
