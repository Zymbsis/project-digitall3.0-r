import { Container, Logo, Section } from 'shared';
import { WaterDetailedInfo, WaterMainInfo } from 'components';
import React from 'react';
import { useTour } from '@reactour/tour';

const TrackerPage = () => {
  const { setIsOpen } = useTour();
  const fuck = () => {
    setIsOpen(true);
    console.log(setIsOpen);
  };

  return (
    <div>
      <button onClick={fuck}>Start Tour</button>{' '}
      {/* Add a button to start the tour */}
      <Section>
        <Container>
          <Logo className="tour-logo" />
          <WaterMainInfo />
          <WaterDetailedInfo className="WaterDetailedInfo" />
        </Container>
      </Section>
    </div>
  );
};

export default TrackerPage;
