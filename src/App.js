import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/views/Homepage';
import AboutUs from './components/views/AboutUs';
import Partner from './components/views/Partner';
import Features from './components/views/Features';
import Blogs from './components/views/Blogs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/menu1' element={<AboutUs />} />
          <Route path='/menu2' element={<Partner />} />
          <Route path='/menu3' element={<Features />} />
          <Route path='/menu4' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
