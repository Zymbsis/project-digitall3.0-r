import * as yup from 'yup';

export const userSettingsFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(40, 'Must be max 40 characters or less')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  email: yup
    .string()
    .max(40, 'Must be max 40 characters or less')
    .email()
    .required('Email is required'),
  weight: yup.number().max(150, 'Must not be more then 150 kg'),
  activeHours: yup.number().max(12, 'Must not be more then 12 hours'),
  dailyNorma: yup.number().max(10, 'Must not be more then 10 liters'),
});
