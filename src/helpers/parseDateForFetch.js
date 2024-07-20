export const parseMonthForFetch = selectedDate => {
  const year = selectedDate.getFullYear();
  const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
  return `${year}-${month}`;
};

export const parseDayForFetch = selectedDate => {
  const month = parseMonthForFetch(selectedDate);
  const day = selectedDate.getDate().toString().padStart(2, '0');
  return `${month}-${day}`;
};
