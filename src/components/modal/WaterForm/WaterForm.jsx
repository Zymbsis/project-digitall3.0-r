import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import TimeInput from './TimeInput';
import WaterInput from './WaterInput';
import { Button } from '../../../shared';
import { useModal } from '../../../context';
import { useDispatch } from 'react-redux';
import {
  addWaterIntake,
  updateWaterIntake,
} from '../../../redux/water/operations';
import css from './WaterForm.module.css';

// import { useDispatch } from "react-redux";
const schema = yup.object().shape({
  amount: yup.number().min(1).max(5000).required('Amount is required'),
  time: yup
    .string()
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format')
    .required('Time is required'),
});

const WaterForm = ({
  time,
  setTime,
  value,
  setValue,
  type = 'add',
  id,
  date,
}) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const { handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: value,
      time: time,
    },
  });

  const onSubmit = (data, e) => {
    // try {
    //   if (type === "add") {
    //     await dispatch(addWaterIntake(data)).unwrap();
    //   } else {
    //     await dispatch(
    //       editWaterIntake({ id: initialData.id, ...data })
    //     ).unwrap();
    //   }
    //   onClose();
    // } catch (error) {
    //   // Handle error and show notification
    //   console.error("Error:", error);
    // }
    // setTime(data.time);
    // setValue(data.amount);

    type === 'add'
      ? dispatch(addWaterIntake({ date: date, time: time, volume: value }))
      : dispatch(updateWaterIntake({ _id: id, time: time, value: value }));
    console.log({ time: time, value: value });

    closeModal(e);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <TimeInput time={time} setTime={setTime} />
      <WaterInput value={value} setValue={setValue} />
      <Button
        disabled={!time || !value}
        className={css.saveButton}
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export default WaterForm;
