import React from 'react';

const Summary = () => {
  return (
    <div className="dashboard__summary">
      <div className="overview__heading">
        <h1>
          Your <span>Summary</span>
        </h1>
      </div>
      <div className="overview__body">
        <h2>You will get your goal in 3.5 months</h2>
        <p>Current savings plan: $2,000/month</p>
        <br />
        <p>Monthly Income: $****.**</p>
        <p>Monthly Bills: $1,156.62</p>
        <p>Money left: $2,538.58</p>
        <br />
        <h2>This month you have spent $0.00</h2>
        <p>You have $538.58 left to spend til next pay.</p>
        <p>Which means your daily limit is <span>$59.84.</span></p>
        <br/>
        <h2>Days till next pay: 9</h2>
        <p>If save $2000/month, you will have: $538.58 left.</p>
      </div>
    </div>
  );
};

export default Summary;
