import React from 'react';
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router, Routes, Route, useLocation
} from 'react-router-dom';
import App from './App';
import './index.css';
import Dashboard from './pages/Dashboard';
import SendTransaction from './pages/SendTransaction/index';
import { Provider } from 'react-redux';
import { store } from './state/store'

const base = "/React-app"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Routes>
          <Route path={base + "/"} element={<Dashboard />}/>
          <Route path={base + "/send-transaction"} element={<SendTransaction />}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
