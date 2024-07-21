export const tourSteps = [
  {
    selector: '.tour-logo',
    content: 'Welcome to the AquaTrack page!',
  },
  {
    selector: '.tour-user-info',
    content: 'Here you can view and edit basic information on your profile.',
  },
  {
    selector: '.tour-water-main-info',
    content:
      'Basic information about your daily water consumption is available here.',
  },
  {
    selector: '.tour-add-water',
    content: 'Click on the button to add more water to your stats.',
  },
  {
    selector: '.tour-daily-progress',
    content:
      'Here you can view and edit detailed information about the water consumed per day.',
  },
  {
    selector: '.tour-month-progress',
    content:
      'Detailed information about the water consumed for the month is available here.',
  },
];

export const tourStyles = {
  popover: base => ({
    ...base,
    '--reactour-accent': '#87d28d',
    borderRadius: '20px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    textAlign: 'center',
    backgroundColor: '#f0eff4',
  }),

  badge: base => ({
    ...base,
    right: 'auto',
    left: '-0.8125em',
  }),
  controls: base => ({
    ...base,
    marginTop: 100,
  }),
  content: base => ({ ...base, padding: '15px' }),
  arrow: base => ({ ...base, color: '#87d28d' }),
  close: base => ({
    ...base,
    left: 'auto',
    right: 15,
    top: 15,
    width: '10px',
    height: '10px',
    color: '#87d28d',
  }),
};
