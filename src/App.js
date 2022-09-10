import { Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Home from './components/home/Home';
import Company from './components/item/Company';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company/:name" element={<Company />} />
    </Routes>
  </div>
);

export default App;
