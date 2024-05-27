import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot API
import App from './App';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render: Render the App component into the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);