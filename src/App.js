import './App.css';

import Navbar from './layout/Navbar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Container from './layout/Container'
import Home from './pages/Home';

function App() {
  return (
   <Router>
      <Navbar/>
      <Container customClass="main_component">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Container>
      <Footer/>
   </Router>
  );
}

export default App;
