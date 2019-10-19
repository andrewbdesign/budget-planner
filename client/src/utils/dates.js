import moment from 'moment';

export const getCurrentMonth = () => {
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var now = new Date();
  return months[now.getMonth()];
};

export const getMonthRange = () => {
  const monthFocus = moment();
  const startOfMonth = moment(
    monthFocus.startOf('month').format('YYYY-MM-DD hh:mm'),
  ).toISOString();
  const endOfMonth = moment(
    monthFocus.endOf('month').format('YYYY-MM-DD hh:mm'),
  ).toISOString();
  const monthRange = {
    startOfMonth,
    endOfMonth,
  };
  return monthRange;
};
