import TeaserLink from './TeaserLink';

const TeaserSection = () => {
    return (
        <section className="teaser-section bg-background-light py-8">
            <div className="container mx-auto">
                <div className="teaser-header text-center mb-8">
                    <h2 className="text-primary-dark text-hero-title-mobile md:text-hero-title-desktop font-bold">Obtenga los datos del producto</h2>
                </div>
                <div className="teaser-list-wrapper flex flex-col md:flex-row justify-between items-stretch">
                    <TeaserLink
                        to="/introduzca-el-modelo"
                        image="https://tool.label2020.eu/var/site/storage/images/_aliases/full/6/8/3/5/1125386-1-ger-DE/image-keyboard.png"
                        title="Introduzca la marca y el modelo"
                        description="Obtenga los datos del producto ingresando la marca y el modelo del electrodoméstico."
                    />
                    <TeaserLink
                        to="/escanee-el-codigo-qr"
                        image="https://tool.label2020.eu/var/site/storage/images/_aliases/full/2/9/3/5/1125392-1-ger-DE/image-scan-qr.png"
                        title="Escanee el código QR de la etiqueta energética"
                        description="Obtenga los datos del producto escaneando el código QR de la etiqueta energética."
                    />
                    <TeaserLink
                        to="/calcular-el-coste"
                        image="https://tool.label2020.eu/var/site/storage/images/_aliases/full/3/8/3/5/1125383-1-ger-DE/image-calc.png"
                        title="Costes Reales de los productos"
                        description="Calcule los costes reales de los productos para tomar decisiones informadas."
                    />
                    <TeaserLink
                        to="/guia-de-las-etiquetas"
                        image="https://tool.label2020.eu/var/site/storage/images/_aliases/full/9/8/3/5/1125389-1-ger-DE/image-label.png"
                        title="Su guía de la etiqueta energética"
                        description="Aprenda cómo interpretar la etiqueta energética de los productos."
                    />
                </div>
            </div>
        </section>

    );
};

export default TeaserSection;
