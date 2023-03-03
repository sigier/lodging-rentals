import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';


import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';

const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={theStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     
    </Provider>
    
  </React.StrictMode>
);
