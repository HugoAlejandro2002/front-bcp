const HeroContent = () => {
    return (
        <div className="text-center text-white p-8 bg-white bg-opacity-50 rounded-lg max-w-screen-lg mx-auto">
            <h1 className="text-hero-title-mobile md:text-hero-title-desktop font-bold mb-4">Banco de Crédito de Bolivia</h1>
            <h2 className="text-hero-subtitle-mobile md:text-hero-subtitle-desktop mb-4">Selecciona el mejor electrodoméstico ahorrando en tus recursos</h2>
            <p className="text-body-mobile md:text-body-desktop mb-6">Calcula los costes, compara los dispositivos - toma la decisión correcta</p>
            <a href="#learn-more" className="inline-block px-6 py-3 bg-secondary text-white font-semibold rounded hover:bg-secondary-dark transition">
                Así es como funciona →
            </a>
        </div>
    );
};

export default HeroContent;