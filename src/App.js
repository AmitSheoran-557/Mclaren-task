import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/views/Homepage';
import AboutUs from './components/views/AboutUs';
import Features from './components/views/Features';
import Blogs from './components/views/Blogs';
import Partners from './components/views/Partners';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/partner' element={<Partners />} />
          <Route path='/features' element={<Features />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
