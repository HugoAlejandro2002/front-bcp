import { Link } from 'react-router-dom';
import bcp_logo from '../assets/bcp.png';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-end">
        <div className="flex items-center">
          <Link to="/" className="logo" title="INICIO">
            <img src={bcp_logo} alt="LABEL 2020" className="w-20 h-20 mr-2 object-contain" style={{ maxHeight: '2rem' }} />
          </Link>
        </div>
        <div className="slogan text-xl">
          <span className="h2">BCVERDE</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
