import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-bp.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__container">
          <div className="logo-section">
            <img className="logo-footer" src={Logo} alt="BudgetPlanner logo" />
            <p>
              BudgetPlanner is an online tool to help you calculate your budget
              from a month-to-month basis. {new Date().getFullYear()}
            </p>
          </div>

          <div className="footer-links">
            <h2>Important links</h2>
            <Link to="/register">About</Link>
            <Link to="/register">Contact</Link>
            <Link to="/register">Links</Link>
            <Link to="/register">Inspiration</Link>
          </div>

          <div className="footer-links">
            <h2>Important links</h2>
            <Link to="/register">About</Link>
            <Link to="/register">Contact</Link>
            <Link to="/register">Links</Link>
            <Link to="/register">Inspiration</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
