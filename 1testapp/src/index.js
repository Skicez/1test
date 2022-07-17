import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
// import Contact from './components/Contact';
import LoginPage from './components/Form';
// import Form from './components/Form';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registration" element={<LoginPage/>} />
      {/* <Route path='/contact' element={<Contact/>}/> */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
