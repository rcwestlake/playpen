import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated'
import MessagesContainer from './containers/MessagesContainer'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './components/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

const messageListener = new MessagesContainer()
messageListener.startListeningForMessages()