export const getDaysArray = selectedDate => {
  const daysCount = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  return Array.from({ length: daysCount }, (_, i) => (i + 1).toString());
};
