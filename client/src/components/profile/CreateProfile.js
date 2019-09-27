import React, { useState } from 'react';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    goal: '',
    cost: '',
    savings: '',
  });

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log({ formData });
  };

  return (
    <section className="create-profile">
      <div className="container">
        <h1>Profile setup</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="goal">What is your goal</label>
          <input id="goal" name="goal" onChange={onChange} />
          <label htmlFor="cost">How much will it cost</label>
          <input id="cost" name="cost" onChange={onChange} />
          <label htmlFor="savings">How much have you saved</label>
          <input id="savings" name="savings" onChange={onChange} />
          <button>Save</button>
        </form>
      </div>
    </section>
  );
};

export default CreateProfile;
