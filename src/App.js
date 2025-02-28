//DONE
import React from 'react';
import './App.css';
import { AppProvider } from './components/appContext.js';
import Layout from './pages/Layout.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return(
    <div>
      <BrowserRouter>
        <AppProvider>
          <Layout />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
