'use strict';

import React from 'react';

import { connect } from 'react-redux';

const VisualizeApp = ({ doSomething }) => (
  <div className="visualize-app" onClick={doSomething}>
    waaaaaat visualize!
  </div>
);


const mapDispatchProps = (dispatch) => ({
  doSomething() {
    dispatch({ type: 'something' });
  }
});

export default connect(null, mapDispatchProps)(VisualizeApp);
