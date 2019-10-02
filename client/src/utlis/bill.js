export const totalSum = bills => {
  let sum = 0;
  bills.forEach(bill => {
    sum += parseFloat(bill.amount);
  });
  return sum;
};
