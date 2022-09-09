import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/ConfigureStore';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <StrictMode>

      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
    ,
  </Router>
  ,
);

ReactDOM.render(<App />, document.getElementById('main-root'));
