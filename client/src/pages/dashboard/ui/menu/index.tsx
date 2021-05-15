import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styled';

import PlusIcon from 'assets/icons/plus.svg';
import { setGoalFocus } from 'actions/goal';
import { Goal } from '../../types';

type Props = {
  goals: Goal[];
  loading: boolean;
  goalFocus: number;
};

const Menu: FC<Props> = ({ goals, loading, goalFocus }) => {
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

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
