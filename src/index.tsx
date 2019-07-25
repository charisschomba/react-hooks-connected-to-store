import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import configureStore from '../src/store/store';

const store = configureStore()

const ConnecteToStore = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

ReactDOM.render(<ConnecteToStore />, document.getElementById('root'));
