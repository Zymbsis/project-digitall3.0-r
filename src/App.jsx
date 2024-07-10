import { createPortal } from 'react-dom';
import { Section, Container } from 'shared';

const App = () => {
  return (
    <Section>
      <Container>
        <button
          type="button"
          onClick={() => {
            return createPortal(
              <div
                style={{
                  backgroundColor: 'red',
                  width: '100%',
                  height: '100%',
                }}
              >
                Hello
              </div>,
              document.querySelector('#modal-root')
            );
          }}
        >
          Test Button
        </button>
      </Container>
    </Section>
  );
};
export default App;
