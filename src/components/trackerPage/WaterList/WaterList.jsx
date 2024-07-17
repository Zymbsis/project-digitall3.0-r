import css from './WaterList.module.css';
import WaterItem from '../WaterItem/WaterItem';
// import { useSelector } from 'react-redux';
// import { selectDailyIntake } from '../../../redux/water/selectors';

const WaterList = () => {
  // const filteredIntake = useSelector(selectDailyIntake);

  const testFilteredIntake = {
    status: 200,
    message: 'Successfully found water portions for selected date.',
    data: {
      date: '2024-07-01',
      portions: [
        {
          _id: '65e4decdd286b30065d54af9',
          time: '12:30:00',
          date: '2025-03-01',
          volume: 150,
          userId: '65e4decdd286b30065d54af1',
          createdAt: '2024-07-01T18:49:47.392Z',
          updatedAt: '2024-07-01T18:49:47.392Z',
        },
        {
          _id: '65e4decdd286b30065d54af6',
          time: '12:45:00',
          date: '2025-03-01',
          volume: 250,
          userId: '65e4decdd286b30065d54af1',
          createdAt: '2024-07-01T18:49:47.392Z',
          updatedAt: '2024-07-01T18:49:47.392Z',
        },
        {
          _id: '65e4decdd286b30066234af0',
          time: '9:30:00',
          date: '2025-03-01',
          volume: 350,
          userId: '65e4decdd286b30065d54af1',
          createdAt: '2024-07-01T18:49:47.392Z',
          updatedAt: '2024-07-01T18:49:47.392Z',
        },
      ],
      completionRate: 0.65,
    },
  };

  return (
    <div className={css.waterListWrap}>
      <ul className={css.waterList}>
        {Array.isArray(testFilteredIntake.data.portions) &&
          testFilteredIntake.data.portions.length === 0 && (
            <li>
              <p className={css.paragraph}>
                There are no daily water intakes here yet.
              </p>
            </li>
          )}
        {Array.isArray(testFilteredIntake.data.portions) &&
          testFilteredIntake.data.portions.map(water => {
            return (
              <li key={water.id} className={css.waterItem}>
                <WaterItem water={water} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default WaterList;
