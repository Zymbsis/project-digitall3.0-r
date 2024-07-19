import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { ModalProvider } from 'context';
import { PersistGate } from 'redux-persist/integration/react';
import { TourProvider } from '@reactour/tour';
import { tourSteps } from 'helpers/tourSteps';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/project-digitall3.0-r">
          <ModalProvider>
            <TourProvider steps={tourSteps}>
              <App />
            </TourProvider>
          </ModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
