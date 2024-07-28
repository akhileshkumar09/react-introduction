import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import User from './pages/User';
import Home from './pages/Home';
import About from './pages/About'
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <Router>
     <div className='App'>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/user'>User</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/'  element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user' element={<User Name='Akhilesh' age={23}/>}/>
        <Route path='/counter' element={<Counter/>}/>
       
       
      </Routes>
     </div>

    </Router>
    
    
  );
}

export default App;
