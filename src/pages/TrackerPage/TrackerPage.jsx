import { Container, Section } from 'shared';
import { WaterMainInfo, WaterDetailedInfo } from 'components';
// import css from './TrackerPage.module.css';

const TrackerPage = () => {
  return (
    <Section>
      <Container>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Container>
    </Section>
  );
};

export default TrackerPage;
