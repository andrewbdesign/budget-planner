import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getDreams,
  addDream,
  updateDream,
  removeDream,
} from '../../../actions/dream';

const Dreams = ({
  dream: { dreams },
  getDreams,
  addDream,
  updateDream,
  removeDream,
}) => {
  const [dreamItem, setDreamItem] = useState({
    title: '',
    achieved: false,
  });
  const [isUpdatingDream, setIsUpdatingDream] = useState(false);

  const renderDreamList = items => {
    return items.map((item, index) => (
      <li key={index} className={item.achieved ? 'achieved' : ''}>
        {item.title}{' '}
        <span
          className="button button-secondary"
          onClick={() => {
            setIsUpdatingDream(true);
            editDream(item);
          }}
        >
          Edit
        </span>
        <span
          className="button button-tertiary"
          onClick={() => {
            removeDream(item._id);
          }}
        >
          Delete
        </span>{' '}
      </li>
    ));
  };

  const editDream = item => {
    setDreamItem({
      title: item.title,
      achieved: item.achieved,
      id: item._id,
    });
  };

  useEffect(() => {
    getDreams();
  }, [getDreams]);

  const onChange = e => {
    setDreamItem({
      ...dreamItem,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCheckbox = e => {
    setDreamItem({
      ...dreamItem,
      achieved: e.currentTarget.checked,
    });
  };

  const onSubmit = () => {
    addDream(dreamItem);
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
            {dreams && dreams.length > 0 ? (
              <Fragment>
                <ol>{renderDreamList(dreams)}</ol>
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
                <span className="label-title">Dream</span>
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
                {isUpdatingDream ? (
                  <Fragment>
                    <div
                      className="button button-primary"
                      onClick={() => {
                        updateDream({
                          ...dreamItem,
                          title: dreamItem.title,
                          achieved: dreamItem.achieved,
                        });
                        setIsUpdatingDream(false);
                        setDreamItem({ title: '', achieved: false });
                      }}
                    >
                      Update Dream
                    </div>
                    <div
                      className="button button-secondary"
                      onClick={() => {
                        setDreamItem({ title: '', achieved: false });
                        setIsUpdatingDream(false);
                      }}
                    >
                      Cancel
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    <div className="button button-primary" onClick={onSubmit}>
                      Add Dream
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
  dream: PropTypes.object.isRequired,
  getDreams: PropTypes.func.isRequired,
  addDream: PropTypes.func.isRequired,
  updateDream: PropTypes.func.isRequired,
  removeDream: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dream: state.dream,
});

const mapDispatchToProps = {
  getDreams,
  addDream,
  updateDream,
  removeDream,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dreams);
