import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SendTransaction from './pages/SendTransaction/index';

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

function App() {
  const base = '/React-app';

  return (
    <Router>
      <Sidebar />
      <Navbar />
      <div className="app">
        <Routes>
          <Route path={base + '/'} element={<Dashboard />}/>
          <Route path={base + '/send-transaction'} element={<SendTransaction />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
