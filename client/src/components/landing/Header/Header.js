import React from 'react';
import { Link } from 'react-router-dom';
import { Lottie } from 'ui/elements';

import 'components/landing/Header/Header.scss';

const lottieLaptop = require('assets/lotties/ecommerce.json');

const Header = () => (
  <section className="header">
    <div className="container">
      <div>
        <h1>Dream cost calculator</h1>
        <p>
          A simple way to start managing your money and create the most
          realistic goals of your dreams!
        </p>
        <Link className="header-button button" to="/register">
          Learn how
        </Link>
      </div>
      <Lottie animationData={lottieLaptop} name="laptop" />
    </div>
  </section>
);

export default Header;
