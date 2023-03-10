import React from 'react';
import {Switch, Route }  from 'react-router-dom';
import NavBar from './utility/NavBar/NavBar';
import Home from './pages/Home/Home';
import FullVenue from './pages/FullVenue/FullVenue';



const App = () => (
  <>
     <NavBar/>
     <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route exact path='/venue/:id' component={FullVenue}></Route>
      </Switch>
  </>

)


export default App;
