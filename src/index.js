import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {DataLayerProvider} from './components/DataLayer'
import reducer, { initialState } from './components/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataLayerProvider initialState={initialState} reducer={reducer}>
      <App />
    </DataLayerProvider>
  </React.StrictMode>
);
