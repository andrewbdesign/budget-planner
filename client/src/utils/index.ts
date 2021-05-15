export const getCurrentMonth = () => {
  const months = [
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
  const now = new Date();
  return months[now.getMonth()];
};

// @TODO Set this type properly
export type Bill = {
  amount: number;
  name: string;
};

export const getTotalSum = (bills: Bill[]) => {
  let sum = 0;
  bills.forEach(bill => {
    sum += bill.amount;
  });
  return sum;
};
