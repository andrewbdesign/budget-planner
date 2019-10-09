import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getGoals,
  addGoal,
  updateGoal,
  removeGoal,
} from '../../../actions/goal';

const Dreams = ({
  goal: { goals },
  getGoals,
  addGoal,
  updateGoal,
  removeGoal,
}) => {
  const [dreamItem, setDreamItem] = useState({
    title: '',
    achieved: false,
  });
  const [isUpdatingGoal, setIsUpdatingGoal] = useState(false);

  const renderDreamList = items => {
    return items.map((item, index) => (
      <li key={index} className={item.achieved ? 'achieved' : ''}>
        {item.title}{' '}
        <span
          className="button button-secondary"
          onClick={() => {
            setIsUpdatingGoal(true);
            console.log('isUpdatingGoal', isUpdatingGoal);
            editGoal(item);
          }}
        >
          Edit
        </span>
        <span
          className="button button-tertiary"
          onClick={() => {
            removeGoal(item._id);
          }}
        >
          Delete
        </span>{' '}
      </li>
    ));
  };

  const editGoal = item => {
    setDreamItem({
      title: item.title,
      achieved: item.achieved,
      id: item._id,
    });
  };

  useEffect(() => {
    getGoals();
  }, [getGoals]);

  const onChange = e => {
    setDreamItem({
      ...dreamItem,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCheckbox = e => {
    // console.log('e.currentTarget.checked', e.currentTarget.checked);
    setDreamItem({
      ...dreamItem,
      achieved: e.currentTarget.checked,
    });
  };

  const onSubmit = () => {
    addGoal(dreamItem);
    setDreamItem({ title: '', achieved: false });
  };

  return (
    <section className="dreams">
      <div className="container">
        <div className="dreams__container">
          <div className="having">
            <h1>Dreams</h1>
            <p>In 6 months I dream of having:</p>
            <hr />
            {goals && goals.length > 0 ? (
              <Fragment>
                <ol>{renderDreamList(goals)}</ol>
              </Fragment>
            ) : (
              <Fragment>
                <p>
                  Your list is empty. Please add to your wish list of things you
                  want.
                </p>
              </Fragment>
            )}
          </div>
          <div className="form-section">
            <form className="dreams-form" autoComplete="off">
              <label>
                <span className="label-title">Goal</span>
                <input
                  type="text"
                  name="title"
                  value={dreamItem.title}
                  onChange={onChange}
                />
              </label>
              <label className="label-checkbox">
                <span className="label-title">Completed</span>
                <input
                  type="checkbox"
                  name="achieved"
                  onChange={e => onChangeCheckbox(e)}
                />
              </label>
              <div className="button-group">
                {isUpdatingGoal ? (
                  <Fragment>
                    <div
                      className="button button-primary"
                      onClick={() => {
                        updateGoal({
                          ...dreamItem,
                          title: dreamItem.title,
                          achieved: dreamItem.achieved,
                        });
                        setIsUpdatingGoal(false);
                        setDreamItem({ title: '', achieved: false });
                      }}
                    >
                      Update Goal
                    </div>
                    <div
                      className="button button-secondary"
                      onClick={() => {
                        setDreamItem({ title: '', achieved: false });
                        setIsUpdatingGoal(false);
                      }}
                    >
                      Cancel
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    <div className="button button-primary" onClick={onSubmit}>
                      Add Goal
                    </div>
                    <div
                      className="button button-secondary"
                      onClick={() =>
                        setDreamItem({ title: '', achieved: false })
                      }
                    >
                      Cancel
                    </div>
                  </Fragment>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Dreams.propTypes = {
  goal: PropTypes.object.isRequired,
  getGoals: PropTypes.func.isRequired,
  addGoal: PropTypes.func.isRequired,
  updateGoal: PropTypes.func.isRequired,
  removeGoal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  goal: state.goal,
});

const mapDispatchToProps = {
  getGoals,
  addGoal,
  updateGoal,
  removeGoal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dreams);
