import { Link } from 'react-router-dom';

const TeaserLink = ({ to, image, title, description }) => {
    return (
        <Link to={to} className="block bg-white p-4 rounded-lg shadow hover:bg-primary-light transition no-underline mb-6 md:mb-0 mx-2">
            <div className="image-wrapper h-32 w-full rounded-lg overflow-hidden flex justify-center items-center mb-4">
                <img src={image} alt={title} className=" h-1/2 object-contain" />
            </div>
            <div className="text-center">
                <h3 className="text-primary text-hero-subtitle-mobile md:text-hero-subtitle-desktop mb-2">{title}</h3>
                <p className="text-text-secondary text-body-mobile md:text-body-desktop">{description}</p>
            </div>
        </Link>
    );
};

export default TeaserLink;