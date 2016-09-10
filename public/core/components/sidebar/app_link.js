'use strict';

import React from 'react';
import { connect } from 'react-redux';

const AppLink = ({ children, clickHandler, name }) => (
  <a className="app_link" onClick={clickHandler(name)}>
    {children}
  </a>
);

const mapStateProps = (state) => ({
  current: state.application.current,
});

const mapDispatchProps = (dispatch) => ({
  clickHandler(current) {
    return () => {
      dispatch({
        type: 'switchApplication',
        current
      });
    };
  }
});

export default connect(mapStateProps, mapDispatchProps)(AppLink);
