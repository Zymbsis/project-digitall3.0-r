import * as yup from 'yup';

export const waterFormSchema = yup
  .object({
    timeInput: yup
      .string()
      .matches(
        /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
        'invalid time format. Must be "HH:MM"'
      )
      .required('Time is required'),
    waterInput: yup
      .number('the minimum is 50ml')
      .min(50, 'the minimum is 50ml')
      .max(1000)
      .required('amount is required'),
  })
  .required();
