import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot
import Login from './App'; // Update the import path
import Welcome from './Welcome'; // Import the Welcome component

const root = document.getElementById('root');

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

const rootInstance = createRoot(root);
rootInstance.render(<App />);
