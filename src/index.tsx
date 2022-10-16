// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// React 18 implementation
const container = document.querySelector('#root');
const root = createRoot(container!);
root.render(
  // Commenting this out as React 18's new StrictMode causes double renders.
  // See https://stackoverflow.com/questions/72489140/react-18-strict-mode-causing-component-to-render-twice
  // <StrictMode>
  <App />
  // </StrictMode>
);
