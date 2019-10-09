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
}) => {
  const { savingCommitment, savingFrequency } = profile;
  return (
    <div className="dashboard__summary">
      <div className="overview__heading">
        <h1>
          Your <span>Summary</span>
        </h1>
      </div>
      <div className="overview__body">
        <h2>You will get your goal in 3.5 months</h2>
        <p>
          Current savings plan: ${numberWithCommas(savingCommitment)}/
          {savingFrequency}
        </p>
        <br />
        <p>Monthly Income: $****.**</p>
        <p>Monthly Bills: ${bills ? getTotalSum(bills) : 0}</p>
        <p>Money left: $0.00</p>
        <br />
        <h2>
          This month you have spent ${expenses ? getTotalSum(expenses) : 0}
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
};

Summary.propTypes = {
  profile: PropTypes.object.isRequired,
  bill: PropTypes.object.isRequired,
  expense: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  bill: state.bill,
  expense: state.expense,
});

export default connect(mapStateToProps)(Summary);
