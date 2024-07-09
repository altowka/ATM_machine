// src/App.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
                            <Link to="/depositing">Depositing</Link>
                        </li>
                        <li>
                            <Link to="/withdrawing">Withdrawing</Link>
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
