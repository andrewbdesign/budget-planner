import React from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Helpers
import { numberWithCommas } from '../../../utils/numberFormatter';
import { getTotalSum } from '../../../utils/bill';

const Summary = ({
  profile: { profile },
  bill: { bills },
  expense: { expenses },
  goal: { goals, goalFocus },
}) => {
  const getTimeLeft = (
    goalTarget,
    totalSaved,
    savingCommitment,
    savingFrequency,
  ) => {
    const amountLeftToSave = parseFloat(goalTarget) - parseFloat(totalSaved);
    const numberOfPayments = Math.ceil(
      amountLeftToSave / parseInt(savingCommitment),
    );

    let daysLeft, monthsLeft, yearsLeft, remainingMonths;
    switch (savingFrequency) {
      case 'day':
        daysLeft = numberOfPayments;
        break;
      case 'week':
        daysLeft = numberOfPayments * 7;
        break;
      case 'fortnight':
        daysLeft = numberOfPayments * 14;
        break;
      case 'month':
        daysLeft = numberOfPayments * 30;
        break;
      default:
        daysLeft = numberOfPayments;
    }

    let answer;
    // START
    if (daysLeft < 30) {
      daysLeft === 1 ? (answer = '1 day') : (answer = daysLeft + ' days');
    } else if (daysLeft >= 30) {
      monthsLeft = Math.ceil(daysLeft / 30);
      if (monthsLeft === 1) {
        answer = '1 month';
      } else if (monthsLeft < 12) {
        answer = monthsLeft + ' months';
      } else {
        yearsLeft = Math.floor(monthsLeft / 12);
        remainingMonths = monthsLeft % 12;
        if (yearsLeft === 1) {
          answer = '1 year';
        } else {
          answer = yearsLeft + ' years';
        }
        if (remainingMonths) {
          answer += ' and ' + remainingMonths + ' months';
        }
      }
    }
    // END
    return answer;
  };

  if (goals.length > 0) {
    console.log('goals', goals);
    const { goalTarget, totalSaved, savingCommitment, savingFrequency } = goals[
      goalFocus
    ];
    return (
      <div className="dashboard__summary">
        <div className="overview__heading">
          <h1>
            Your <span>Summary</span>
          </h1>
        </div>
        <div className="overview__body">
          <h2></h2>
          <h2>
            You will get your goal in{' '}
            {getTimeLeft(
              goalTarget,
              totalSaved,
              savingCommitment,
              savingFrequency,
            )}
            .
          </h2>
          <p>
            Current savings plan: ${numberWithCommas(savingCommitment)}/
            {savingFrequency}
          </p>
          <br />
          <p>Monthly Income: $****.**</p>
          <p>Monthly Bills: ${bills ? getTotalSum(bills).toFixed(2) : 0}</p>
          <p>Money left: $0.00</p>
          <br />
          <h2>
            This month you have spent $
            {expenses ? getTotalSum(expenses).toFixed(2) : 0}
          </h2>
          <p>You have $0.00 left to spend til next pay.</p>
          <p>
            Which means your daily limit is <span>$0.00</span>.
          </p>
          <br />
          <h2>Days till next pay: 30</h2>
          <p>
            If save ${numberWithCommas(savingCommitment)}/{savingFrequency}, you
            will have: $0.00 left.
          </p>
        </div>
      </div>
    );
  }
  return <div></div>;
};

Summary.propTypes = {
  profile: PropTypes.object.isRequired,
  goal: PropTypes.object.isRequired,
  bill: PropTypes.object.isRequired,
  expense: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  bill: state.bill,
  expense: state.expense,
  goal: state.goal,
});

export default connect(mapStateToProps)(Summary);
