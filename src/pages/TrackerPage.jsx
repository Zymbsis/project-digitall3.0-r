import { useEffect } from 'react';
import { Container, Logo, Section } from 'shared';
import { WaterDetailedInfo, WaterMainInfo } from 'components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTour } from '@reactour/tour';
import CustomToast, {
  toastStyles,
} from 'components/trackerPage/CustomToast/CustomToast';

const TrackerPage = () => {
  const { setIsOpen } = useTour();

  const notify = () => {
    toast(<CustomToast setIsOpen={setIsOpen} />, {
      ...toastStyles,
    });
  };

  useEffect(() => {
    notify();
  }, []);

  return (
    <div>
      <Section>
        <Container>
          <Logo className="tour-logo" />
          <WaterMainInfo />
          <WaterDetailedInfo className="WaterDetailedInfo" />
        </Container>
      </Section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default TrackerPage;
