import { Section, Container } from 'shared';
import Modal from './components/modal/Modal/Modal';
import { useModal } from 'context';

const App = () => {
  const { modalContent, setModalContent } = useModal();
  return (
    <>
      <Section>
        <Container>
          <button
            type="button"
            onClick={() => {
              setModalContent(<p>Hello Dolly</p>);
            }}
          >
            Hello
          </button>
        </Container>
      </Section>
      {modalContent && <Modal>{modalContent}</Modal>}
    </>
  );
};
export default App;
