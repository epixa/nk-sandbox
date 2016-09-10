'use strict';

import React from 'react';

import { connect } from 'react-redux';

const DashboardApp = ({ doSomething }) => (
  <div className="dashboard-app" onClick={doSomething}>
    waaaaaat dashboard!
  </div>
);

const mapDispatchProps = (dispatch) => ({
  doSomething() {
    dispatch({ type: 'something' });
  }
});

export default connect(null, mapDispatchProps)(DashboardApp);
