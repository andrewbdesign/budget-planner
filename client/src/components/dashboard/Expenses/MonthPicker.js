import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getMonth,
  increaseMonth,
  decreaseMonth,
} from '../../../actions/expense';

import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';

const MonthPicker = ({
  getMonth,
  increaseMonth,
  decreaseMonth,
  expense: { monthFocus },
}) => {
  useEffect(() => {
    getMonth();
  }, [getMonth]);

  if (monthFocus) {
    return (
      <div className="month-picker">
        <div
          className="month-previous"
          onClick={() => decreaseMonth(monthFocus.subtract(1, 'month'))}
        >
          <img className="month-picker-arrows" src={arrowLeft} alt="" />
          &nbsp;
        </div>
        <div className="month-displayer">{monthFocus.format('YYYY MMM')}</div>
        <div
          className="month-next"
          onClick={() => increaseMonth(monthFocus.add(1, 'month'))}
        >
          &nbsp;
          <img className="month-picker-arrows" src={arrowRight} alt="" />
        </div>
      </div>
    );
  }

  return <div></div>;
};

MonthPicker.propTypes = {
  expense: PropTypes.object.isRequired,
  getMonth: PropTypes.func.isRequired,
  increaseMonth: PropTypes.func.isRequired,
  decreaseMonth: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  expense: state.expense,
});

const mapDispatchToProps = {
  getMonth,
  increaseMonth,
  decreaseMonth,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MonthPicker);
