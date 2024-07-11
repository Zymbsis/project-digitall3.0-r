import { Section, Container, Icon, Button } from 'shared';
import Modal from './components/modal/Modal/Modal';
import { useModal } from 'context';

const App = () => {
  const { modalContent, setModalContent } = useModal();
  return (
    <>
      <Section>
        <Container>
          <Button
            onClick={() => {
              setModalContent(<p>Hello Dolly</p>);
            }}
          >
            Hello
          </Button>
        </Container>
      </Section>
      {modalContent && <Modal>{modalContent}</Modal>}
    </>
  );
};
export default App;
