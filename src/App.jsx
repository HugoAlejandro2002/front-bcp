
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './index.css';
import Header from './components/Header';
import IntroduzcaElModelo from './pages/IntroduzcaElModelo';
import EscaneeElCodigoQR from './pages/EscaneeElCodigoQR';
import CalcularElCoste from './pages/CalcularElCoste';
import GuiaDeLasEtiquetas from './pages/GuiaDeLasEtiquetas';


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduzca-el-modelo" element={<IntroduzcaElModelo />} />
        <Route path="/escanee-el-codigo-qr" element={<EscaneeElCodigoQR />} />
        <Route path="/calcular-el-coste" element={<CalcularElCoste />} />
        <Route path="/guia-de-las-etiquetas" element={<GuiaDeLasEtiquetas />} />
      </Routes>
    </Router>
  );
}

export default App;
