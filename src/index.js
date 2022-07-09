import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import {store,persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
      <React.StrictMode>
        <ScrollToTop/>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
           <App />
       </PersistGate>
       </Provider>
      </React.StrictMode>
  </BrowserRouter>
);