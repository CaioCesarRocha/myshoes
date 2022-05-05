import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextMyListProvider } from './contexts/context_MyListProducts'; 
import {ContextListProductsProvider } from './contexts/context_ListProducts';

//IMPORTS NECESSÁRIOS PARA FAZER O REDUX(STORE) FUNCIONAR EM TODA APP
import {Provider} from 'react-redux';
import {store} from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <ContextListProductsProvider> 
        <ContextMyListProvider>
            <App />
        </ContextMyListProvider>
      </ContextListProductsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



