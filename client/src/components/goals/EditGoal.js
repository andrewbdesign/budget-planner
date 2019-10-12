import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateGoal, getGoal } from '../../actions/goal';
import PropTypes from 'prop-types';
import Loader from '../layout/Loader';

// Icons
import Target from '../../assets/icons/target.svg';
import Money from '../../assets/icons/money.svg';
import Wallet from '../../assets/icons/wallet.svg';

const EditGoal = ({
  getGoal,
  currentGoal: { goal, loading },
  updateGoal,
  history,
  match: {
    params: { id },
  },
}) => {
  const [formData, setFormData] = useState({
    goalTitle: '',
    goalTarget: '',
    totalSaved: '',
    savingFrequency: '',
    savingCommitment: '',
  });

  const [saveBy, setSaveBy] = useState('date');

  useEffect(() => {
    getGoal(id);

    if (goal !== null) {
      setFormData({
        id: loading || !id ? '' : id,
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
  }, [loading, id, getGoal]);

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const {
      id,
      goalTitle,
      goalTarget,
      totalSaved,
      savingFrequency,
      savingCommitment,
      achieved,
    } = formData;

    const newFormData = {};
    if (id) newFormData.id = id;
    if (goalTitle) newFormData.goalTitle = goalTitle;
    if (goalTarget) newFormData.goalTarget = parseFloat(goalTarget);
    if (totalSaved) newFormData.totalSaved = parseFloat(totalSaved);
    if (savingFrequency) newFormData.savingFrequency = savingFrequency;
    if (savingCommitment)
      newFormData.savingCommitment = parseFloat(savingCommitment);
    newFormData.achieved = achieved;

    updateGoal(newFormData, history);
    getGoal(id);
  };

  if (loading) {
    return <Loader />;
  }

  const firstQuestions = (
    <Fragment>
      <div className={`question first-section save-by-${saveBy}`}>
        <div onClick={() => setSaveBy('date')}>See how much I need to save</div>
        <div onClick={() => setSaveBy('duration')}>
          See how long it will take to save
        </div>
      </div>
    </Fragment>
  );

  const secondQuestions = (
    <Fragment>
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
            onChange={onChange}
          />
        </div>
      </div>
    </Fragment>
  );

  const thirdQuestions = (
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
  );

  return (
    <section className="edit-goal">
      <div className="container">
        <div className="edit-goal__container">
          <h1 className="edit-goal__heading">Update goal</h1>

          {goal !== null && (
            <Fragment>
              {goal.goalTitle && goal.goalTitle.length > 0 && (
                <Fragment>
                  <h1>{goal.goalTitle}</h1>
                </Fragment>
              )}
              {firstQuestions}
              {secondQuestions}
              {thirdQuestions}
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

EditGoal.propTypes = {
  updateGoal: PropTypes.func.isRequired,
  getGoal: PropTypes.func.isRequired,
  currentGoal: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentGoal: state.goal,
});

const mapDispatchToProps = {
  updateGoal,
  getGoal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(EditGoal));
