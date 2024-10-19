// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import ImageUpload from './components/ImageUpload'; // Import the new ImageUpload component
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
  
      <Navbar />
      
      <Home/>
      <Footer/>
    </>
  );
}

export default App;



// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './Layout';
// import Home from './Home'; // Your Home component
// import About from './About'; // Your About component

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} /> {/* This will render Home at the root */}
//           <Route path="about" element={<About />} /> {/* This will render About at /about */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;

