import React, { Fragment, useEffect, useState } from 'react';

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

const Expenses = ({
  getExpenses,
  expense: { expenses },
  addExpense,
  updateExpense,
  removeExpense,
}) => {
  const renderExpenses = expenses => {
    return expenses.map(expense => {
      const { title, amount, date, _id } = expense;
      return (
        <tr key={_id} className="expense">
          <td>{title}</td>
          <td>${amount}</td>
          <td>{date}</td>
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

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const [showAddExpense, setShowAddExpense] = useState(false);
  const [updatingExpense, setUpdatingExpense] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: Date.now(),
  });

  const { title, amount } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('expenses formData', formData);
    addExpense(formData);
    setFormData({
      ...formData,
      title: '',
      amount: '',
    });
    setShowAddExpense(!showAddExpense);
  };

  return (
    <section className="expenses">
      <div className="container">
        <div className="expenses__body">
          <h1>Monthly Expenses</h1>
          <p>Because the small things add up</p>
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

              <p>${numberWithCommas(getTotalSum(expenses))}</p>
              <div className="monthly-expenses__button">
                {showAddExpense ? (
                  <Fragment>
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
                      <div>
                        <label htmlFor="amount">Cost</label>
                        <input
                          id="amout"
                          name="amount"
                          value={amount}
                          onChange={onChange}
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
                  <div>
                    <label htmlFor="amount">Cost</label>
                    <input
                      id="amout"
                      name="amount"
                      value={amount}
                      onChange={onChange}
                    />
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
