import { Link } from 'react-router-dom';
import bcp_logo from '../assets/bcp.png';
import bcverde_logo from '../assets/logo_bcverde.jpeg';


const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-end">
        <div className="flex items-center" style={{ maxHeight: '2rem' }} >
          <Link to="/" className="logo" title="INICIO">
            <img src={bcp_logo} alt="LABEL 2020" className="w-32 h-32 mr-2 object-contain"/>
          </Link>
        </div>
        <div className="slogan text-xl">
          <img src={bcverde_logo} alt="LABEL 2020" className="mr-2 object-contain" style={{ maxHeight: '2rem' }}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
