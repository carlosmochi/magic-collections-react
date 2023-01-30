import logo from './logo.svg';
import './App.css';

import Navbar from './pages/Navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
   <Router>
      <Navbar/>
   </Router>
  );
}

export default App;
