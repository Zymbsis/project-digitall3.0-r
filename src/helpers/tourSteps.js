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
    borderRadius: '15px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    textAlign: 'center',
    backgroundColor: '#f0eff4',
    padding: '25px',
  }),

  badge: base => ({
    ...base,
    right: 'auto',
    left: '-0.8125em',
  }),
  controls: base => ({
    ...base,
    marginTop: 30,
  }),
  content: base => ({
    ...base,
    margin: '10px',
    color: '#323F47',
  }),
  arrow: base => ({ ...base, color: '#87d28d' }),
  close: base => ({
    ...base,
    left: 'auto',
    right: 12,
    top: 12,
    width: '12px',
    height: '12px',
    color: '#87d28d',
  }),
};
