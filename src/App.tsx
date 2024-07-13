// src/App.js
import { BrowserRouter as Router, Route, Routes, NavLink  } from 'react-router-dom';
import Depositing from './components/Depositing/Depositing';
import Withdrawing from './components/Withdrawing/Withdrawing';
import './App.css';
import MoneyDisplay from './MoneyDisplay';

function App() {
    return (
        <Router>
            <div>
                <h1>ATM Machine</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink  to="/depositing" className={({ isActive }) => isActive ? "active-link" : undefined}>Depositing</NavLink >
                        </li>
                        <li>
                            <NavLink  to="/withdrawing" className={({ isActive }) => isActive ? "active-link" : undefined}>Withdrawing</NavLink >
                        </li>
                    </ul>
                </nav>
                <MoneyDisplay />
                <Routes>
                    <Route path="/depositing" element={<Depositing />} />
                    <Route path="/withdrawing" element={<Withdrawing />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
