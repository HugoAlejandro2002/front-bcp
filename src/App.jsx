
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalculationPage from './pages/CalculationPage';
import './index.css';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calcular-el-coste" element={<CalculationPage />} />

      </Routes>
    </Router>
  );
}

export default App;
