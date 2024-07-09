// src/App.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Depositing from './components/depositing/depositing';
import Withdrawing from './components/withdrawing/withdrawing';
import './App.css';

function App() {
    return (
        <Router>
            <div>
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
                <Routes>
                    <Route path="/depositing" element={<Depositing />} />
                    <Route path="/withdrawing" element={<Withdrawing />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
