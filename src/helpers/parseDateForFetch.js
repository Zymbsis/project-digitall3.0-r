export const parseMonthForFetch = selectedDate => {
  const year = selectedDate.getFullYear();
  const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
  return `${year}-${month}`;
};
