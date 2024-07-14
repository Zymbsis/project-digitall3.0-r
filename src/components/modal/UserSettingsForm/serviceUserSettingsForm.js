import * as yup from 'yup';

export const yupValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(40, 'Must be max 40 characters or less')
    .required('Username is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  weight: yup.number().max(150, 'Are you shure this is correct weight?'),
  activeHours: yup.number().max(9, 'Must not be more then 9 hours'),
  dailyNorma: yup.number().max(15, 'Must not be more then 15 liters'),
});
