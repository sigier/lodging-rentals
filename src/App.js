import React, { Suspense, lazy } from 'react';
import {Switch, Route }  from 'react-router-dom';
import NavBar from './utility/NavBar/NavBar';
import  Home from './pages/Home/Home';
 import { BrowserRouter } from 'react-router-dom';
import Modal from './utility/Modal/Modal';
import Spinner from './utility/Spinner/Spinner';

const FullVenue  = lazy(() => import('./pages/FullVenue/FullVenue'));


const App = () => (
  <BrowserRouter>
   <Suspense fallback={Spinner}>
     <NavBar/>
     <Modal/>    
     <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/venue/:id" component={FullVenue}></Route>
      </Switch>
    </Suspense>
  </BrowserRouter>

)


export default App;
