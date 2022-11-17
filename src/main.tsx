import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router, Routes, Route, useLocation
} from 'react-router-dom';
import App from './App'
import './index.css'
import Dashboard from './pages/Dashboard';
import SendTransaction from './pages/SendTransaction/index'

const base = "/React-app"

// const router = createBrowserRouter([
//   {
//     path: base + "/",
//     element: SendTransaction,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path={base + "/"} element={<Dashboard />}/>
        <Route path={base + "/send-transaction"} element={<SendTransaction />}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
