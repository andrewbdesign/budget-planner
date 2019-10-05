import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="call-to-action__container">
          <h1>So. What are you waiting for?</h1>
          <p>Your dreams are waiting</p>
          <Link to="/register" className="button button-primary">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
