import React from 'react';

const expenses = [
  {
    title: 'Rent 1/2',
    cost: '400',
    date: '1st',
    paid: true,
  },
  {
    title: 'iCloud Storage',
    cost: '4.49',
    date: '6th',
    paid: true,
  },
  {
    title: 'Boxing 1/2',
    cost: '88.00',
    date: '11th',
    paid: true,
  },
  {
    title: 'Netflix',
    cost: '13.99',
    date: '11th',
    paid: false,
  },
  {
    title: 'Spotify',
    cost: '17.99',
    date: '14th',
    paid: false,
  },
  {
    title: 'Github',
    cost: '9.45',
    date: '18th',
    paid: false,
  },
  {
    title: 'Boxing 2/2',
    cost: '88.00',
    date: '26th',
    paid: false,
  },
  {
    title: 'Phone Bill',
    cost: '134.70',
    date: '23th',
    paid: false,
  },
  {
    title: 'Rent 2/2',
    cost: '400.00',
    date: '28th',
    paid: false,
  },
];

const renderExpenses = () => {
  return expenses.map((expense, index) => {
    return (
      <tr key={index} className={'expense ' + (expense.paid && 'paid')}>
        <td>{expense.title}</td>
        <td>${expense.cost}</td>
        <td>{expense.date}</td>
      </tr>
    );
  });
};

const Expenses = () => {
  return (
    <section className="expenses">
      <div className="container">
        <div className="expenses__body">
          <h1>Monthly Expenses</h1>
          <p>Because the small things add up</p>
          <hr />
          <table>
            <tbody>
              <tr>
                <th>Expense</th>
                <th>Cost</th>
                <th>Day</th>
              </tr>
              {renderExpenses()}
            </tbody>
          </table>
          <h1>Total Bills amount</h1>
          <p>$1,156.62 / month</p>
          <div className="monthly-expenses__button">
            <a href="https://www.google.com" className="button button-success">
              Add expense
            </a>
            <a href="https://www.google.com" className="button button-warning">
              Remove expense
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expenses;
