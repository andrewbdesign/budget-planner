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

  const renderBills = () => {
    return bills.map((bill, index) => {
      return (
        <div key={index} className="bill">
          <p>{bill.title}</p>
          <p>${bill.cost}</p>
          <p>${parseInt(bill.cost) / 30}</p>
          <p>{bill.date}</p>
        </div>
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
          {renderBills()}
        </div>
      </div>
    </section>
  );
};

export default MonthlyExpenses;
