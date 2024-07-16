export const formatDate = (date) => {
    const format = { month: 'long', year: 'numeric'};
    const data = new Intl.DateTimeFormat('en-US', format).format(date)
    const [month, year] = data.split(' ');
    return `${month}, ${year}`
  };