import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateGoal, getGoal } from '../../actions/goal';
import PropTypes from 'prop-types';

// Icons
import Target from '../../assets/icons/target.svg';
import Money from '../../assets/icons/money.svg';
import Wallet from '../../assets/icons/wallet.svg';

const EditGoal = ({
  getGoal,
  goal: { goal, loading },
  updateGoal,
  history,
  match,
}) => {
  useEffect(() => {
    getGoal(match.params.id);

    if (goal) {
      setFormData({
        id: loading || !match.params.id ? '' : match.params.id,
        goalTitle: loading || !goal.goalTitle ? '' : goal.goalTitle,
        goalTarget: loading || !goal.goalTarget ? '' : goal.goalTarget,
        totalSaved: loading || !goal.totalSaved ? '' : goal.totalSaved,
        savingFrequency:
          loading || !goal.savingFrequency ? '' : goal.savingFrequency,
        savingCommitment:
          loading || !goal.savingCommitment ? '' : goal.savingCommitment,
        achieved: false,
      });
    }
  }, [loading]);

  const [formData, setFormData] = useState({
    goalTitle: '',
    goalTarget: '',
    totalSaved: '',
    savingFrequency: '',
    savingCommitment: '',
  });

  const [saveBy, setSaveBy] = useState('date');

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    // console.log('formData', formData);
    updateGoal(formData, history);
    // updateGoal(formData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="edit-goal">
      <div className="container">
        <div className="edit-goal__container">
          <h1 className="edit-goal__heading">Update setup</h1>
          <h2 className="edit-goal__heading">I want to:</h2>
          <div className={`question first-section save-by-${saveBy}`}>
            <div onClick={() => setSaveBy('date')}>
              See how much I need to save
            </div>
            <div onClick={() => setSaveBy('duration')}>
              See how long it will take to save
            </div>
          </div>
          <div className="question second-section">
            <div>
              <label htmlFor="goal-target">I want to save up</label>
              <img className="icon-money" src={Money} alt="" />
              <span className="dollar-prefix">$</span>
              <input
                id="goal-target"
                name="goalTarget"
                value={formData.goalTarget}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="total-saved">So far I have saved</label>
              <img className="icon-wallet" src={Wallet} alt="" />
              <span className="dollar-prefix">$</span>
              <input
                id="total-saved"
                name="totalSaved"
                value={formData.totalSaved}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="goal-title">Because my goal is to get </label>
              <img className="icon-target" src={Target} alt="" />
              <input
                id="goal-title"
                name="goalTitle"
                value={formData.goalTitle}
                onChange={e => {
                  onChange(e);
                }}
              />
            </div>
          </div>
          <div className="question third-section">
            <div>
              <label htmlFor="saving-commitment">I will be saving</label>${' '}
              <input
                id="saving-commitment"
                name="savingCommitment"
                value={formData.savingCommitment}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="saving-frequency">Every</label>
              <select
                id="saving-frequency"
                name="savingFrequency"
                value={formData.savingFrequency}
                onChange={onChange}
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option default value="fortnight">
                  Fortnight
                </option>
                <option value="month">Month</option>
              </select>
              <button className="button" onClick={onSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

EditGoal.propTypes = {
  updateGoal: PropTypes.func.isRequired,
  getGoal: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  goal: state.goal,
});

const mapDispatchToProps = {
  updateGoal,
  getGoal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(EditGoal));
