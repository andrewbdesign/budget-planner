import React from 'react';

const being = [
  {
    title: 'cook',
    achieved: true,
  },
  {
    title: 'cook',
    achieved: true,
  },
  {
    title: 'cook',
    achieved: true,
  },
  {
    title: 'cook',
    achieved: true,
  },
  {
    title: 'cook',
    achieved: true,
  },
];

const doing = [
  {
    title: 'cook',
    achieved: true,
  },
  {
    title: 'cook',
    achieved: true,
  },
  {
    title: 'cook',
    achieved: true,
  },
  {
    title: 'cook',
    achieved: true,
  },
  {
    title: 'cook',
    achieved: true,
  },
];

const having = [
  {
    title: 'car',
    achieved: true,
  },
  {
    title: 'computer',
    achieved: true,
  },
  {
    title: 'guitar',
    achieved: true,
  },
  {
    title: 'shoes',
    achieved: true,
  },
  {
    title: 'house',
    achieved: true,
  },
];

const renderDreamList = items => {
  return items.map((item, index) => <li key={index}>{item.title}</li>);
};

const Dreams = () => {
  return (
    <section className="dreams">
      <div className="container">
        <h1>Dreams</h1>
        <p>In 6 months I dream of:</p>
        <div className="dreams__container">
          <div className="being">
            <h2>Being</h2>
            <ol>{renderDreamList(being)}</ol>
          </div>
          <div className="doing">
            <h2>Doing</h2>
            <ol>{renderDreamList(doing)}</ol>
          </div>
          <div className="having">
            <h2>Having</h2>
            <ol>{renderDreamList(having)}</ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dreams;
