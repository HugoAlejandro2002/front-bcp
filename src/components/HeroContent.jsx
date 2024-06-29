const HeroContent = () => {
    return (
        <div className="text-left text-white p-8 bg-primary bg-opacity-75 rounded-lg max-w-screen-lg mx-auto">
            <h1 className="text-hero-title-mobile md:text-hero-title-desktop font-bold mb-4 relative inline-block">
                <span className="relative z-10">Banco de Crédito de Bolivia</span>
                <span className="absolute inset-0 h-full w-full bg-primary-light opacity-25 -bottom-1 left-0 z-0"></span>
            </h1>
            <h2 className="text-hero-subtitle-mobile md:text-hero-subtitle-desktop mb-4 relative inline-block">
                <span className="relative z-10">Selecciona el mejor electrodoméstico ahorrando en tus recursos</span>
                <span className="absolute inset-0 h-full w-full bg-primary-light opacity-25 -bottom-1 left-0 z-0"></span>
            </h2>
            <p className="text-body-mobile md:text-body-desktop mb-6">Calcula los costes, compara los dispositivos - toma la decisión correcta</p>
            <a href="#learn-more" className="inline-block px-6 py-3 bg-secondary text-black font-semibold rounded hover:bg-secondary-dark transition">
                Así es como funciona →
            </a>
        </div>
    );
};

export default HeroContent;