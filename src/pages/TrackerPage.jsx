import { Container, Logo, Section } from 'shared';
import { WaterDetailedInfo, WaterMainInfo } from 'components';
import React from 'react';

const TrackerPage = () => {
  return (
    <div>
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
