import React from 'react';
import {Switch, Route }  from 'react-router-dom';
import NavBar from './utility/NavBar/NavBar';
import Home from './pages/Home/Home';



const App = () => (
  <>
     <NavBar/>
     <Switch>
        <Route exact path='/' component={Home} ></Route>
      </Switch>
  </>

)


export default App;
