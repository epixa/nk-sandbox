'use strict';

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const AppLink = ({ children, clickHandler, current, name }) => (
  <a className={classNames({ app_link: true, current: current === name })} onClick={clickHandler(name)}>
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
