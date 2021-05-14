import styled from 'styled-components';

export const Section = styled.section`
  background: linear-gradient(
    45deg,
    #6e2bd3,
    #6e2bd3 0,
    #b73587 48%,
    #fe7077 87%,
    #fe7077 0,
    #ffc18e
  );
`;

// .overview__heading {

//   span {
//     color: $white;
//   }

//   p {
//     font-size: 1.3rem;
//   }
// }

/* 
@import '../../../styles/variables/_breakpoints.scss';
@import '../../../styles/variables/_gradients.scss';
@import '../../../styles/variables/_colours.scss';

.dashboard {
  background: $mainGradient;

  h1 {
    font-size: 1.5rem;
  }
}

.goals__section {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.goals-menu::-webkit-scrollbar {
  display: none;
}

.goals-menu {
  margin-bottom: 20px;
  overflow-x: scroll;
  white-space: nowrap;


  .goal-item {
    box-sizing: content-box;
    display: inline-block;
    padding: 20px;
    font-size: 1.6rem;
    position: relative;
    left: -1px;
    cursor: pointer;
    background: #fff;
    color: #212121;
    text-decoration: none;
    border-left: 1px solid #dadada;
    border-right: 1px solid transparent;

    &:hover {
      background: #1d263d;
      color: #fff;
      border-right: 1px solid $navy;
      border-left: 1px solid $navy;
    }
  }

  .goal-item:first-child {
    border-radius: 5px 0 0 5px;
    border-left: 1px solid transparent;
  }

  .goal-item:last-child {
    border-radius: 0 5px 5px 0;
    border-right: 1px solid transparent;
    padding-right: 40px;

    img {
      border-radius: 50%;
      background: #dadada;
      width: 20px;
      position: absolute;
      right: 10px;
      padding: 3px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }

  .goal-item.active {
    background: $navy;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    color: #fff;
  }
}

.welcome-animation {
  width: 350px;
  margin: 0 auto 30px;
  ;
}

.income {
  transition: filter .2s ease-in-out;
}

.income.blur {
  filter: blur(3px);
}

.income.show {
  filter: blur(0);
}

.overview {

  .overview__section {
    width: 300px;
  }

  .overview__user {
    width: 100%;
  }
}

.dashboard__body {
  display: flex;
  flex-direction: column;
  width: 100%;

  .overview__body {
    height: 270px;
    margin-bottom: 0;
  }

  .dashboard__chart {
    width: 100%;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .dashboard__summary {
    width: 100%;
  }
}

.chart__container {
  padding: 20px 0;
  width: 100% !important;
  position: relative;
}

@media screen and (min-width: 560px) {
  .overview {
    .overview__stats {
      column-count: 2;
    }
  }
}

@media screen and (min-width: 760px) {
  .overview {
    .overview__stats {
      column-count: 3;
    }
  }

  .dashboard__body {
    flex-direction: row;

    .dashboard__chart {
      width: 30%;
      margin-bottom: 0;
    }

    .dashboard__summary {
      width: 70%;
    }
  }
}
*/
