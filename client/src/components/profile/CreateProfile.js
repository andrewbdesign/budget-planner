import React, { useState, Fragment } from 'react';

import Target from '../../assets/icons/target.svg';
import Money from '../../assets/icons/money.svg';
import Wallet from '../../assets/icons/wallet.svg';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    monthlyIncome: '', // Optional.
    payDay: '', // Required if monthly income is filled
    currentBankBalance: '', // required
  });

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log('formData', formData);
  };

  const questions = (
    <div className="question second-section">
      <div style={{ opacity: 1 }}>
        <label htmlFor="monthly-income">Every month I make</label>
        <img className="icon-money" src={Money} alt="" />
        <span className="dollar-prefix">$</span>
        <input id="monthly-income" name="monthlyIncome" onChange={onChange} />
      </div>
      <div style={{ opacity: 1 }}>
        <label htmlFor="current-bank-balance">
          In my bank account I have right now
        </label>
        <img className="icon-wallet" src={Wallet} alt="" />
        <span className="dollar-prefix">$</span>
        <input
          id="current-bank-balance"
          name="currentBankBalance"
          onChange={onChange}
        />
      </div>
      <div style={{ opacity: 1 }}>
        <label htmlFor="pay-day">I get paid on</label>
        <img className="icon-target" src={Target} alt="" />
        <input id="pay-day" name="payDay" onChange={onChange} />
      </div>
    </div>
  );

  return (
    <section className="create-profile">
      <div className="container">
        <div className="create-profile__container">
          <h1>Profile setup</h1>
          {questions}
          <div className="answer-section">
            <div className="button budget-plan" onClick={onSubmit}>
              Create our first goal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateProfile;

// import React, { useState, useRef, useEffect, Fragment } from 'react';
// import { TimelineMax, Power1, TweenMax } from 'gsap';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createProfile } from '../../actions/profile';
// import PropTypes from 'prop-types';

// // Icons

// const CreateProfile = ({ createProfile, history }) => {
//   const [formData, setFormData] = useState({
//     goalTitle: '',
//     goalTarget: '',
//     totalSaved: '',
//     // Saving amount
//     savingFrequency: '', // [day, week, fortnight, 3weeks, month]
//     savingCommitment: '', // $100
//     // Saving duration
//     monthlyIncome: '', // Optional.
//     payDay: '', // Required if monthly income is filled
//     currentBankBalance: '', // required
//   });

//   const sectionOneA = useRef(null);
//   const sectionOneB = useRef(null);
//   const sectionOneC = useRef(null);
//   const sectionOneD = useRef(null);
//   const sectionTwo = useRef(null);
//   const sectionThree = useRef(null);

//   const [saveBy, setSaveBy] = useState('');
//   const [showAnswer, setShowAnswer] = useState(false);

//   const onChange = e => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     createProfile(formData, history);
//   };

//   useEffect(() => {
//     const introElements = [
//       sectionOneA.current,
//       sectionOneB.current,
//       sectionOneC.current,
//       sectionOneD.current,
//     ];
//     TweenMax.set(sectionTwo.current.children, { autoAlpha: 0, y: -20 });
//     TweenMax.set(sectionThree.current, { autoAlpha: 0, y: -20 });
//     TweenMax.set(introElements, { y: -20 });
//     const tl = new TimelineMax();
//     tl.staggerTo(
//       introElements,
//       0.8,
//       { autoAlpha: 1, y: 0, ease: Power1.easeOut },
//       '0.2',
//       1,
//     );
//   }, []);

//   const showSecondQuestions = () => {
//     const tl = new TimelineMax();
//     tl.staggerTo(
//       sectionTwo.current.children,
//       0.3,
//       { autoAlpha: 1, y: 0, ease: Power1.easeOut },
//       '0.2',
//       0,
//     );
//   };

//   const showThirdQuestions = () => {
//     const tl = new TimelineMax();
//     tl.to(
//       sectionThree.current,
//       0.3,
//       { autoAlpha: 1, y: 0, ease: Power1.easeOut },
//       '0',
//     );
//   };

//   const onHandleSetSaveBy = type => {
//     showSecondQuestions();
//     setSaveBy(type);
//   };

//   const result = () => {
//     const {
//       goalTarget,
//       totalSaved,
//       savingCommitment,
//       savingFrequency,
//     } = formData;
//     const amountLeftToSave = parseFloat(goalTarget) - parseFloat(totalSaved);
//     const numberOfPayments = Math.ceil(
//       amountLeftToSave / parseInt(savingCommitment),
//     );

//     let daysLeft, monthsLeft, yearsLeft, remainingMonths;
//     switch (savingFrequency) {
//       case 'day':
//         daysLeft = numberOfPayments;
//         break;
//       case 'week':
//         daysLeft = numberOfPayments * 7;
//         break;
//       case 'fortnight':
//         daysLeft = numberOfPayments * 14;
//         break;
//       case 'month':
//         daysLeft = numberOfPayments * 30;
//         break;
//       default:
//         daysLeft = numberOfPayments;
//     }

//     let answer;
//     // START
//     if (daysLeft < 30) {
//       daysLeft === 1 ? (answer = '1 day') : (answer = daysLeft + ' days');
//     } else if (daysLeft >= 30) {
//       monthsLeft = Math.ceil(daysLeft / 30);
//       if (monthsLeft === 1) {
//         answer = '1 month';
//       } else if (monthsLeft < 12) {
//         answer = monthsLeft + ' months';
//       } else {
//         yearsLeft = Math.floor(monthsLeft / 12);
//         remainingMonths = monthsLeft % 12;
//         if (yearsLeft === 1) {
//           answer = '1 year';
//         } else {
//           answer = yearsLeft + ' years';
//         }
//         if (remainingMonths) {
//           answer += ' and ' + remainingMonths + ' months';
//         }
//       }
//     }
//     // END
//     return answer;
//   };

//   return (
//     <section className="create-profile">
//       <div className="container">
//         <div className="create-profile__container">
//           <h1 className="create-profile__heading" ref={sectionOneA}>
//             Profile setup
//           </h1>
//           <h2 className="create-profile__heading" ref={sectionOneB}>
//             I want to:
//           </h2>

//           <div className={`question first-section save-by-${saveBy}`}>
//             <div ref={sectionOneC} onClick={() => onHandleSetSaveBy('date')}>
//               See how much I need to save
//             </div>
//             <div
//               ref={sectionOneD}
//               onClick={() => onHandleSetSaveBy('duration')}
//             >
//               See how long it will take to save
//             </div>
//           </div>

// <div ref={sectionTwo} className="question second-section">
//   <div>
//     <label htmlFor="goal-target">I want to save up</label>
//     <img className="icon-money" src={Money} alt="" />
//     <span className="dollar-prefix">$</span>
//     <input id="goal-target" name="goalTarget" onChange={onChange} />
//   </div>
//   <div>
//     <label htmlFor="total-saved">So far I have saved</label>
//     <img className="icon-wallet" src={Wallet} alt="" />
//     <span className="dollar-prefix">$</span>
//     <input id="total-saved" name="totalSaved" onChange={onChange} />
//   </div>
//   <div>
//     <label htmlFor="goal-title">Because my goal is to get </label>
//     <img className="icon-target" src={Target} alt="" />
//     <input
//       id="goal-title"
//       name="goalTitle"
//       onChange={e => {
//         onChange(e);
//         showThirdQuestions();
//       }}
//     />
//   </div>
// </div>

//           <div ref={sectionThree} className="question third-section">
//             <div>
//               <label htmlFor="saving-commitment">I will be saving</label>${' '}
//               <input
//                 id="saving-commitment"
//                 name="savingCommitment"
//                 onChange={onChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="saving-frequency">Every</label>
//               <select
//                 id="saving-frequency"
//                 name="savingFrequency"
//                 onChange={onChange}
//               >
//                 <option value="day">Day</option>
//                 <option value="week">Week</option>
//                 <option default value="fortnight">
//                   Fortnight
//                 </option>
//                 <option value="month">Month</option>
//               </select>
//               <button className="button" onClick={() => setShowAnswer(true)}>
//                 Calculate
//               </button>
//             </div>
//           </div>
//           {showAnswer && (
//             <Fragment>
//               <div className="answer-section">
//                 <p>
//                   You will get your {formData.goalTitle} in {result()}.
//                 </p>
//                 <div className="button budget-plan" onClick={onSubmit}>
//                   Confirm budget plan
//                 </div>
//               </div>
//             </Fragment>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// CreateProfile.propTypes = {
//   createProfile: PropTypes.func.isRequired,
// };

// const mapStateToProps = null;

// const mapDispatchToProps = {
//   createProfile,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(withRouter(CreateProfile));
