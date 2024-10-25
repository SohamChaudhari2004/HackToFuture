import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import Conversion from './components/Conversion';
import ConvertToJPG from './components/ConvertToJPG';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar with links */}
        <Navbar />

        {/* Defining Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/convertion' element={<Conversion/>} />
          <Route path='/convert-jpg' element={<ConvertToJPG/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
