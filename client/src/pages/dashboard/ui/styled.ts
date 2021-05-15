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

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

/*

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
