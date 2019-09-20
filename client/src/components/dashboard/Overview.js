import React from 'react'

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview__heading">
        <h1>Your <span>Overview</span></h1>
        <p>Welcome to your savings overview</p>
      </div>
      <div className="overview__body">

        <div className="overview__user">
          <h2>Hello, Andrew</h2>
          <p>Today is Saturday<br/>September 13, 2019</p>
        </div>

        <div className="overview__container">
          <div className="overview__section">
            <h3>Target goal</h3>
            <p>$20,000</p>
          </div>

          <div className="overview__section">
            <h3>Current savings</h3>
            <p>$11,000</p>
          </div>

          <div className="overview__section">
            <h3>Difference</h3>
            <p>$9,000</p>
          </div>

          <div className="overview__section">
            <h3>Current balance</h3>
            <p>$2555.19</p>
          </div>

          <div className="overview__section">
            <h3>Daily Limit</h3>
            <p>$142.91</p>
          </div>

          <div className="overview__section">
            <h3>September Expenses</h3>
            <p>$20</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Overview
