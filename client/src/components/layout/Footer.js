import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2>Budget Planner</h2>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
