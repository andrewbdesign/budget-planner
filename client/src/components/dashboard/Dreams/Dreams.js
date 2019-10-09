import React, { useState, Fragment } from 'react';

const renderDreamList = items => {
  return items.map((item, index) => (
    <li key={index}>
      {item.title} <span>x</span> | <span>edit</span>
    </li>
  ));
};

const Dreams = () => {
  const [dreamItem, setDreamItem] = useState({
    title: '',
    achieved: false,
  });

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

  const havingList = [];
  const beingListEditMode = false;

  return (
    <section className="dreams">
      <div className="container">
        <div className="dreams__container">
          <div className="having">
            <h1>Dreams</h1>
            <p>In 6 months I dream of having:</p>
            <hr />
            {havingList ? (
              <Fragment>
                <p>You do not have any list things</p>
              </Fragment>
            ) : (
              <Fragment>
                <ol>{renderDreamList(havingList)}</ol>
              </Fragment>
            )}
          </div>
          <div className="form-section">
            {beingListEditMode ? (
              <Fragment>
                <input />
                <div className="button">Add</div>
                <div
                  className="button"
                  // onClick={() => setBeingListEditMode(false)}
                >
                  Cancel
                </div>
              </Fragment>
            ) : (
              <Fragment>
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
                    <div className="button button-primary">Add Goal</div>
                    <div
                      className="button button-secondary"
                      onClick={() =>
                        setDreamItem({ title: '', achieved: false })
                      }
                    >
                      Cancel
                    </div>
                  </div>
                </form>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dreams;
