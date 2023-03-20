import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Spinner from './utility/Spinner/Spinner';
import App from './App';
import rootReducer from './reducers/rootReducer';


import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key:'root',
  storage,
  blacklist: ['siteModal']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
 

const theStore = applyMiddleware(reduxPromise)(createStore)(persistedReducer);
const persistor = persistStore(theStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={theStore}> 
      <PersistGate loading={<Spinner/>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    
  </React.StrictMode>
);
