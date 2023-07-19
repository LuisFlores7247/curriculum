import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <AppRouter></AppRouter>
  </BrowserRouter>
  </>
);
