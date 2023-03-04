import React from 'react';
import { Routes,  Route}  from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './utility/NavBar/NavBar';



const App = () => (
  <Routes>
    <Route path='/' element={<NavBar/>} ></Route>
    <Route exact path='/' element={<Home/>} ></Route>
  </Routes>
)






export default App;
