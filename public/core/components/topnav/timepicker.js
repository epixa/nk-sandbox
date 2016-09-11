'use strict';

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const Timepicker = ({ clickHandler, current }) => (
  <div className="timepicker">
    <a onClick={clickHandler('15m')} className={classNames({ current: current === '15m' })}>15m</a>
    <a onClick={clickHandler('1h')} className={classNames({ current: current === '1h' })}>1h</a>
    <a onClick={clickHandler('24h')} className={classNames({ current: current === '24h' })}>24h</a>
    <a onClick={clickHandler('1y')} className={classNames({ current: current === '1y' })}>1y</a>
  </div>
);

const mapStateProps = (state) => ({
  current: state.timepicker.duration,
});

const mapDispatchProps = (dispatch) => ({
  clickHandler(duration) {
    return () => {
      dispatch({
        type: 'selectTime',
        duration
      });
    };
  }
});

export default connect(mapStateProps, mapDispatchProps)(Timepicker);
