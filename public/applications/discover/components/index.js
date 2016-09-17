'use strict';

import React from 'react';

import { connect } from 'react-redux';

const DiscoverApp = ({ doSomething, duration }) => (
  <div className="discover-app" onClick={doSomething}>
    discover, local duration: {duration}
  </div>
);

const mapStateProps = (state) => ({
  duration: state.timepicker.duration,
});

const mapDispatchProps = (dispatch) => ({
  doSomething() {
    dispatch({ type: 'something' });
  }
});

export default connect(mapStateProps, mapDispatchProps)(DiscoverApp);
