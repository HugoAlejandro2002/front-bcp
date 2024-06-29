import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-end">
        <div className="flex items-center">
          <Link to="/" className="logo" title="INICIO">
            <img src={reactLogo} alt="LABEL 2020" className="w-8 h-8 mr-2 object-contain" />
          </Link>
        </div>
        <div className="slogan text-xl">
          <span className="h2">SCAN & CHECK</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
