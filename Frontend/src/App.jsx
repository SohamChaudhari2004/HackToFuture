// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import ImageUpload from './components/ImageUpload'; // Import the new ImageUpload component
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import Home from './components/Home';

function App() {
  return (
    <>
  
      <Navbar />
      <div className="min-h-screen  bg-gray-600 flex items-center justify-center">
        {/* <ImageUpload /> Use the ImageUpload component */}
        <ImageUpload/>
      </div>
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

