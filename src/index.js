import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import './index.css';

import { makeStore } from './store/index';

const store = makeStore();

store.subscribe(() => {
    const {images: { favorites, favoritesID}} = store.getState()

    localStorage.setItem('favorites', JSON.stringify(favorites))
    localStorage.setItem('favoritesID', JSON.stringify(favoritesID))
})


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
