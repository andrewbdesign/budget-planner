import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useGoalStats } from '../../controller';

import * as S from './styled';

import PlusIcon from 'assets/icons/plus.svg';
import { setGoalFocus } from 'actions/goal';

const Menu: FC = () => {
  const dispatch = useDispatch();

  const { goals, goalFocus, isLoadingGoals } = useGoalStats();

  if (isLoadingGoals) {
    return <div>Loading...</div>;
  }

  // @TODO Add default view when there are no goals
  if (goals.length === 0) {
    return <div>You don't have any goals.. Create a new one here</div>;
  }

  return (
    <S.Wrapper>
      <S.Menu>
        {goals.map(({ goalTitle }, index) => {
          const isActive = index === goalFocus;
          return (
            <S.GoalItem
              key={index}
              isActive={isActive}
              onClick={() => dispatch(setGoalFocus(index))}
            >
              {goalTitle}
            </S.GoalItem>
          );
        })}
        <S.AddGoalItem to="/create-goal">
          Add new goal <S.PlusIcon src={PlusIcon} alt="plus icon" />
        </S.AddGoalItem>
      </S.Menu>
    </S.Wrapper>
  );
};

export default Menu;
