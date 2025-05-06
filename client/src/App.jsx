import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Wildlife from './pages/Wildlife';
import Jointeam from './pages/Jointeam';
import Contact from './pages/Contact';
import Program from './pages/Program';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <div className='relative min-h-[100vh] max-w-[screen] mx-auto'>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <div style={{ fontFamily: "Roboto condensed" }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <Route path="" element={<A/>} /> */}
            <Route path="" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wildlife" element={<Wildlife />} />
            <Route path="/jointeam" element={<Jointeam />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/wildlife/:id/:AnimalName" element={<DetailPage />} />
            <Route path="/programs/:num/:ProgramName" element={<DetailPage />} />
            <Route path="/blog/:number/:BlogTitle" element={<DetailPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;