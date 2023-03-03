import React from 'react';
import { Routes,  Route}  from 'react-router-dom';
import Navbar from './utility/Navbar/Navbar';
import Home from './pages/Home/Home';



const App = () => (
  <Routes>
    <Route path='/' element={<Navbar/>} ></Route>
    <Route exact path='/' element={<Home/>} ></Route>
  </Routes>
)






export default App;
