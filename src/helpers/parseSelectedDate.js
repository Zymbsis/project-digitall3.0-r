export const parseSelectedDay = (selectedDate, currentDate) => {
  if (selectedDate === null || selectedDate === currentDate) return;

  const [year, month, day] = selectedDate.split('-');
  const newFormatDay = new Date(year, month - 1, day);
  const monthName = newFormatDay.toLocaleString('en-US', { month: 'long' });
  const dayOfMonth = newFormatDay.getDate();
  const parsedDate = `${dayOfMonth}, ${monthName}`;
  return parsedDate;
};

export const parseSelectedMonth = selectedDate => {
  const format = { month: 'long', year: 'numeric' };
  const data = new Intl.DateTimeFormat('en-US', format).format(selectedDate);
  const [month, year] = data.split(' ');
  return `${month}, ${year}`;
};
