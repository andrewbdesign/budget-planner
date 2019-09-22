import React from 'react';

const MonthlyExpenses = () => {
  const bills = [
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

  const dailyBreakdown = bill => {
    const res = parseInt(bill);
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
          <td>${bill.cost}</td>
          <td>${dailyBreakdown(bill.cost)}</td>
          <td>{bill.date}</td>
        </tr>
      );
    });
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
          <table>
            <tbody>
              <tr>
                <th>Expense</th>
                <th>Cost</th>
                <th>Day</th>
                <th>Due</th>
              </tr>
            </tbody>
            {renderBills()}
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

export default MonthlyExpenses;
