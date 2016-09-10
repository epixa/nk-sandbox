'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';

const Application = ({ current, renderApplication }) => (
  <div className="application">
    {renderApplication(current)}
  </div>
);

const mapStateProps = (state) => ({
  current: state.application.current,
});

const mapDispatchProps = (dispatch, { applications }) => ({
  renderApplication(name) {
    return find(applications, { name }).component();
  }
});

export default connect(mapStateProps, mapDispatchProps)(Application);
