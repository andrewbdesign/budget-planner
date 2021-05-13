import { Register } from 'pages/register';
import Login from 'components/auth/Login/Login';
import CreateProfile from 'components/profile/CreateProfile';
import EditProfile from 'components/profile/EditProfile';
import Profile from 'components/profile/Profile/Profile';
import Dashboard from 'components/dashboard/Dashboard';
import Expenses from 'components/dashboard/Expenses/Expenses';
import Goals from 'components/goals/Goals/Goals';
import CreateGoal from 'components/goals/CreateGoal';
import EditGoal from 'components/goals/EditGoal';
import MonthlyBills from 'components/dashboard/MonthlyBills/MonthlyBills';

type Route = {
  path: string;
  exact?: boolean;
  component: any;
};

export const ROUTES: Route[] = [
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
];

export const PRIVATE_ROUTES: Route[] = [
  {
    path: '/dasboard',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/create-profile',
    exact: true,
    component: CreateProfile,
  },
  {
    path: '/edit-profile',
    exact: true,
    component: EditProfile,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '/monthly-bills',
    exact: true,
    component: MonthlyBills,
  },
  {
    path: '/expenses',
    exact: true,
    component: Expenses,
  },
  {
    path: '/goals',
    exact: true,
    component: Goals,
  },
  {
    path: '/create-goal',
    exact: true,
    component: CreateGoal,
  },
  {
    path: '/edit-goal/:id',
    exact: true,
    component: EditGoal,
  },
];
