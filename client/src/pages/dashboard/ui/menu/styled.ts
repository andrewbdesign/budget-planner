import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Menu = styled.nav`
  margin-bottom: 20px;
  overflow-x: scroll;
  white-space: nowrap;
`;

export const GoalItem = styled.div<{ isActive: boolean }>`
  box-sizing: content-box;
  display: inline-block;
  padding: 20px;
  font-size: 1.6rem;
  position: relative;
  left: -1px;
  cursor: pointer;
  background: ${props => (props.isActive ? '#1d263d' : '#fff')};
  color: ${props => (props.isActive ? '#fff' : '#212121')};
  text-decoration: none;
  border-left: 1px solid
    ${props => (props.isActive ? 'transparent' : '#dadada')};
  border-right: 1px solid transparent;

  :hover {
    background: #171e30;
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
    border-left: 1px solid transparent;
  }
`;

export const AddGoalItem = styled(Link)`
  box-sizing: content-box;
  display: inline-block;
  font-size: 1.6rem;
  position: relative;
  left: -1px;
  cursor: pointer;
  color: #fff;
  background: #263149;
  text-decoration: none;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-radius: 0 5px 5px 0;
  padding: 20px;
  padding-right: 40px;

  &:hover {
    background: #171e30;
    color: #fff;
    border-right: 1px solid #1d263d;
    border-left: 1px solid #1d263d;
  }
`;

export const PlusIcon = styled.img`
  border-radius: 50%;
  background: #dadada;
  width: 20px;
  position: absolute;
  right: 10px;
  padding: 3px;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;
