export const parsedTime = time => {
  let [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  hours = hours < 10 ? `${hours}` : hours;
  return `${hours}:${minutes} ${period}`;
};
