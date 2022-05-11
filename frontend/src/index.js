import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Auth from './pages/auth/Auth';
import Signin from './pages/auth/signin/Signin';
import Empty from './components/layout/navigation/Empty';
import Signup from './pages/auth/signup/Signup';
import App from './pages/app';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      {/* Controller Route */}
      <Routes>
        <Route path="/" element={<Empty />}>
          <Route index element={<App />} />
        </Route>

        {/* Auth routes */}
        <Route path="/auth" element={<Empty />}>
          <Route index element={<Auth />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
