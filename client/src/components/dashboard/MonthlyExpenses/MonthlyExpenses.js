import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBills, addBill } from '../../../actions/bill';
import { numberWithCommas } from '../../../utlis/numberFormatter';

const MonthlyExpenses = ({ getBills, bills: { bills }, addBill }) => {
  useEffect(() => {
    getBills();
  });

  const [showAddBill, setShowAddBill] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: Date.now(),
    paid: false,
  });

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
    console.log('formData', formData);
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
    return bills.map((bill, index) => {
      return (
        <tr key={index} className={'bill ' + (bill.paid && 'paid')}>
          <td>{bill.title}</td>
          <td>${bill.amount}</td>
          <td>${dailyBreakdown(bill.amount)}</td>
          <td>{bill.date}</td>
        </tr>
      );
    });
  };

  const calculateMonthlyBillsCost = () => {
    let sum = 0;
    bills.forEach(bill => {
      sum += parseFloat(bill.amount);
    });
    return sum;
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
          {bills ? (
            <Fragment>
              <table>
                <tbody>
                  <tr>
                    <th>Expense</th>
                    <th>Cost</th>
                    <th>Day</th>
                    <th>Due</th>
                  </tr>
                  {renderBills()}
                </tbody>
              </table>
              <h1>Total Bills amount</h1>
              <p>${numberWithCommas(calculateMonthlyBillsCost())} / month</p>
            </Fragment>
          ) : (
            <Fragment>
              You do not have any bills yet. Click here to get started
            </Fragment>
          )}

          <div className="monthly-expenses__button">
            {showAddBill ? (
              <Fragment>
                <form onSubmit={onSubmit} autocomplete="off">
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
                  <div>
                    <label htmlFor="paid">Completed</label>
                    <input
                      type="checkbox"
                      checked={paid}
                      onChange={onChangeCheckbox}
                    ></input>
                  </div>
                  <div>
                    <button>Add</button>
                  </div>
                </form>
                <div
                  onClick={() => setShowAddBill(!showAddBill)}
                  className="button button-success"
                >
                  Finish
                </div>
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
        </div>
      </div>
    </section>
  );
};

MonthlyExpenses.propTypes = {
  getBills: PropTypes.func.isRequired,
  addBill: PropTypes.func.isRequired,
  bills: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  bills: state.bill,
});

const mapDispatchToProps = {
  getBills,
  addBill,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MonthlyExpenses);
