import { Link } from 'react-router-dom';

const TeaserLink = ({ to, image, children }) => {
  return (
    <Link to={to} className="block bg-white p-4 rounded-lg shadow hover:bg-primary-light transition">
      <span className="image block bg-cover bg-center h-32 w-full rounded-lg" style={{ backgroundImage: `url(${image})` }}></span>
      <div className="text-center mt-2 text-primary">{children}</div>
    </Link>
  );
};

export default TeaserLink;