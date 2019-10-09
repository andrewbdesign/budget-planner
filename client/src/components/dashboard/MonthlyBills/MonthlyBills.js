import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getBills,
  addBill,
  removeBill,
  updateBill,
} from '../../../actions/bill';
import { numberWithCommas } from '../../../utils/numberFormatter';
import { getTotalSum } from '../../../utils/bill';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import uuid from 'uuid';

const MonthlyExpenses = ({
  getBills,
  bills: { bills },
  addBill,
  removeBill,
  updateBill,
}) => {
  useEffect(() => {
    getBills();
  }, [getBills]);

  const [showAddBill, setShowAddBill] = useState(false);
  const [updatingBill, setUpdatingBill] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: moment(),
    paid: false,
  });

  const [calendarFocused, setCalendarFocused] = useState(false);

  const { title, amount, paid } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCheckbox = e => {
    setFormData({
      ...formData,
      paid: e.currentTarget.checked,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addBill(formData);
    setFormData({
      ...formData,
      title: '',
      amount: '',
      paid: false,
    });
    setShowAddBill(!showAddBill);
  };

  const dailyBreakdown = bill => {
    const res = parseFloat(bill);
    return (res / getDaysInMonth()).toFixed(2);
  };

  const getDaysInMonth = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    return new Date(year, month, 0).getDate();
  };

  const renderBills = () => {
    return bills.map(bill => {
      const { _id, paid, title, amount, date } = bill;
      return (
        <tr
          key={_id}
          className={'bill ' + (paid && 'paid')}
          // onClick={() => {
          //   updateBill({
          //     title,
          //     amount,
          //     paid: !paid,
          //     id: _id,
          //   });
          // }}
        >
          <td>{title}</td>
          <td>${amount}</td>
          <td>${dailyBreakdown(amount)}</td>
          <td>{moment(date).format('MMM Do')}</td>
          <td>
            <div
              className="button button-secondary"
              onClick={() => {
                setFormData({
                  title,
                  amount,
                  paid,
                  id: _id,
                });
                setUpdatingBill(true);
                setShowAddBill(true);
              }}
            >
              Edit
            </div>
            <div
              className="button button-tertiary"
              onClick={() => {
                removeBill(_id);
              }}
            >
              Delete
            </div>
          </td>
        </tr>
      );
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

  return (
    <section className="monthly-expenses">
      <div className="container">
        <div className="monthly-expenses__body">
          <h1>Monthly Bills</h1>
          <p>
            This is all your expenses broken down to cost per day and when it is
            debited from your account
          </p>
          <hr />
          {bills && bills.length > 0 ? (
            <Fragment>
              <table>
                <tbody>
                  <tr>
                    <th>Expense</th>
                    <th>Cost</th>
                    <th>Day</th>
                    <th>Due</th>
                    <th>Modify</th>
                  </tr>
                  {renderBills()}
                </tbody>
              </table>
              <h1>Total Bills amount</h1>
              <p>${numberWithCommas(getTotalSum(bills))} / month</p>

              <div className="monthly-expenses__button">
                {showAddBill ? (
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

                      <div>
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

                      <div className="form-section">
                        <label htmlFor="paid">Completed</label>
                        <input
                          type="checkbox"
                          checked={paid}
                          onChange={onChangeCheckbox}
                        ></input>
                      </div>
                    </form>
                    {updatingBill ? (
                      <Fragment>
                        <div
                          className="button button-secondary"
                          onClick={() => {
                            updateBill({ ...formData });
                            setFormData({
                              ...formData,
                              title: '',
                              amount: '',
                              paid: false,
                            });
                            setUpdatingBill(false);
                            setShowAddBill(false);
                          }}
                        >
                          Update
                        </div>
                        <div
                          className="button button-tertiary"
                          onClick={() => {
                            setUpdatingBill(false);
                            setFormData({
                              ...formData,
                              title: '',
                              amount: '',
                              paid: false,
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
                          onClick={() => setShowAddBill(!showAddBill)}
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
                      onClick={() => setShowAddBill(!showAddBill)}
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
              <p>You do not have any bills yet. Add your first bill</p>
              <div className="monthly-expenses__button">
                <form autoComplete="off">
                  <div>
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
                  <div className="form-section">
                    <label htmlFor="paid">Completed</label>
                    <input
                      type="checkbox"
                      checked={paid}
                      onChange={onChangeCheckbox}
                    ></input>
                  </div>
                </form>

                <div className="button button-success" onClick={onSubmit}>
                  Add
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

MonthlyExpenses.propTypes = {
  getBills: PropTypes.func.isRequired,
  addBill: PropTypes.func.isRequired,
  bills: PropTypes.object.isRequired,
  removeBill: PropTypes.func.isRequired,
  updateBill: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bills: state.bill,
});

const mapDispatchToProps = {
  getBills,
  addBill,
  removeBill,
  updateBill,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MonthlyExpenses);
