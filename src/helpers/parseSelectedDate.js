import { TODAY } from '../constants';

export const parseSelectedDate = selectedDate => {
  if (selectedDate === null || selectedDate === TODAY) return;

  const [year, month, day] = selectedDate.split('-');
  const newFormatDay = new Date(year, month - 1, day);
  const monthName = newFormatDay.toLocaleString('en-US', { month: 'long' });
  const dayOfMonth = newFormatDay.getDate();
  const parsedDate = `${dayOfMonth}, ${monthName}`;
  return parsedDate;
};
