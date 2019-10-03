import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  ' Free Sign Up',
  'Simple to use',
  'Track progress',
  'No Ads',
  'No Credit Card',
  'It is Free',
  'Smarter habits',
  'Financial confidence',
  'No Spam',
  'Goal setting',
  'No strict rules',
  'Short term goals',
];

const renderList = () =>
  features.map((feature, index) => <li key={index}>{feature}</li>);

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__container">
          <h1 className="features__heading">Features</h1>
          <p className="features__copy">Here is what you will get</p>

          <div className="features-group__container">
            <ul className="features__group">{renderList()}</ul>
          </div>
        </div>
        <div className="cta-section">
          <Link to="/register" className="button button-signup">
            Join now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
