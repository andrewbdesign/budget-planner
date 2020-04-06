import React, { Fragment, useEffect, useState } from 'react';
import MonthPicker from './MonthPicker';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getExpenses,
  addExpense,
  removeExpense,
  updateExpense,
} from '../../../actions/expense';

// Helpers
import { numberWithCommas } from '../../../utils/numberFormatter';
import { getTotalSum } from '../../../utils/bill';
import { getCurrentMonth } from '../../../utils/dates';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import uuid from 'uuid';

import './Expenses.scss';

const Expenses = ({
  getExpenses,
  expense: { expenses },
  addExpense,
  updateExpense,
  removeExpense,
}) => {
  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const [showAddExpense, setShowAddExpense] = useState(false);
  const [updatingExpense, setUpdatingExpense] = useState(false);
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: moment(),
  });

  const { title, amount } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onDateChange = createdAt => {
    setFormData({
      ...formData,
      date: createdAt,
    });
  };

  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused);
  };

  const onSubmit = e => {
    e.preventDefault();
    addExpense(formData);
    setFormData({
      ...formData,
      title: '',
      amount: '',
    });
    setShowAddExpense(!showAddExpense);
  };

  const renderExpenses = expenses => {
    return expenses.map(expense => {
      const { title, amount, date, _id } = expense;
      return (
        <tr key={_id} className="expense">
          <td>{title}</td>
          <td>${amount}</td>
          <td>{moment(date).format('MMM Do')}</td>
          <td>
            <div
              className="button button-secondary"
              onClick={() => {
                setFormData({
                  title,
                  amount,
                  id: _id,
                });
                setUpdatingExpense(true);
                setShowAddExpense(true);
              }}
            >
              Edit
            </div>
            <div
              className="button button-tertiary"
              onClick={() => {
                removeExpense(_id);
              }}
            >
              Delete
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <section className="expenses">
      <div className="container">
        <div className="expenses__body">
          <h1>Monthly Expenses</h1>
          <p>Because the small things add up</p>
          <MonthPicker />
          <hr />
          {expenses && expenses.length > 0 ? (
            <Fragment>
              <table>
                <tbody>
                  <tr>
                    <th>Expense</th>
                    <th>Cost</th>
                    <th>Day</th>
                  </tr>
                  {expenses && renderExpenses(expenses)}
                </tbody>
              </table>
              <h1>{getCurrentMonth()} Expenses</h1>

              <p>${numberWithCommas(getTotalSum(expenses).toFixed(2))}</p>
              <div className="monthly-expenses__button">
                {showAddExpense ? (
                  <Fragment>
                    <form autoComplete="off">
                      <div className="form-section">
                        <label htmlFor="title">Title</label>
                        <input
                          id="title"
                          name="title"
                          value={title}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-section">
                        <label htmlFor="amount">Cost</label>
                        <input
                          id="amout"
                          name="amount"
                          value={amount}
                          onChange={onChange}
                        />
                      </div>

                      <div className="form-section-calendar">
                        <label>Date</label>
                        <SingleDatePicker
                          date={formData.date}
                          onDateChange={onDateChange}
                          focused={calendarFocused}
                          onFocusChange={onFocusChange}
                          numberOfMonths={1}
                          id={uuid.v4()}
                          isOutsideRange={() => false}
                        />
                      </div>
                    </form>
                    {updatingExpense ? (
                      <Fragment>
                        <div
                          className="button button-secondary"
                          onClick={() => {
                            updateExpense({ ...formData });
                            setFormData({
                              ...formData,
                              title: '',
                              amount: '',
                            });
                            setUpdatingExpense(false);
                            setShowAddExpense(false);
                          }}
                        >
                          Update
                        </div>
                        <div
                          className="button button-tertiary"
                          onClick={() => {
                            setUpdatingExpense(false);
                            setFormData({
                              ...formData,
                              title: '',
                              amount: '',
                            });
                          }}
                        >
                          Cancel
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div
                          className="button button-success"
                          onClick={onSubmit}
                        >
                          Add
                        </div>
                        <div
                          onClick={() => setShowAddExpense(!showAddExpense)}
                          className="button button-tertiary"
                        >
                          Cancel
                        </div>
                      </Fragment>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <div
                      onClick={() => setShowAddExpense(!showAddExpense)}
                      className="button button-success"
                    >
                      Add Expense
                    </div>
                  </Fragment>
                )}
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <p>You do not have any bills yet. Add your first bills</p>
              <div className="monthly-expenses__button">
                <form autoComplete="off">
                  <div className="form-section">
                    <label htmlFor="title">Title</label>
                    <input
                      id="title"
                      name="title"
                      value={title}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-section">
                    <label htmlFor="amount">Cost</label>
                    <input
                      id="amout"
                      name="amount"
                      value={amount}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-section-calendar">
                    <label>Date</label>
                    <SingleDatePicker
                      date={formData.date}
                      onDateChange={onDateChange}
                      focused={calendarFocused}
                      onFocusChange={onFocusChange}
                      numberOfMonths={1}
                      id={uuid.v4()}
                      isOutsideRange={() => false}
                    />
                  </div>
                </form>

                <div className="button button-success" onClick={onSubmit}>
                  Add
                </div>
              </div>
            </Fragment>
          )}
          <MonthPicker />
        </div>
      </div>
    </section>
  );
};

Expenses.propTypes = {
  expense: PropTypes.object.isRequired,
  getExpenses: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  expense: state.expense,
});

const mapDispatchToProps = {
  getExpenses,
  addExpense,
  removeExpense,
  updateExpense,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Expenses);
