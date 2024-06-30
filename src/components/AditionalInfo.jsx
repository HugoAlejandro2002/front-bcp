import { useState } from "react";

const AdditionalInfo = ({ products }) => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    return (
        <section className="additional-info-section bg-background-light py-8">
            <div className="container mx-auto">
                <div className="info-header text-center mb-8">
                    <h2 className="text-primary-dark text-hero-title-mobile md:text-hero-title-desktop font-bold">Información Adicional</h2>
                </div>
                <div className="text-center my-4">
                    <button onClick={handleToggle} className="bg-primary text-white py-2 px-4 rounded">
                        {showMore ? "Mostrar menos" : "Mostrar más"}
                    </button>
                </div>
                {showMore && (
                    <div className="info-wrapper overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs md:text-sm leading-4 text-primary-dark tracking-wider">Características</th>
                                    {products.map((product, index) => (
                                        <th key={index} className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs md:text-sm leading-4 text-primary-dark tracking-wider">
                                            <div className="text-xs md:text-sm leading-5 font-medium text-gray-900">{product.modelIdentifier}</div>
                                            <div className="text-xs md:text-sm leading-5 text-gray-500">{product.providerName}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Consumo mensual</td>
                                    {products.map((product, index) => (
                                        <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.monthlyConsumption}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Consumo anual</td>
                                    {products.map((product, index) => (
                                        <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.consumption}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Emisiones de CO2 anuales</td>
                                    {products.map((product, index) => (
                                        <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.co2Emissions}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Costo energía mensual</td>
                                    {products.map((product, index) => (
                                        <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.monthlyEnergyCost}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Costo energía anual</td>
                                    {products.map((product, index) => (
                                        <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.annualEnergyCost}</td>
                                    ))}
                                </tr>
                                {
                                    products[0].waterConsumption &&
                                    <tr>
                                        <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Costo agua mensual</td>
                                        {products.map((product, index) => (
                                            <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.monthlyWaterCost}</td>
                                        ))}
                                    </tr>
                                }
                                {
                                    products[0].waterConsumption &&
                                    <tr>
                                        <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Costo agua anual</td>
                                        {products.map((product, index) => (
                                            <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.annualWaterCost}</td>
                                        ))}
                                    </tr>
                                }
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Costo total del producto en 4 años</td>
                                    {products.map((product, index) => (
                                        <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.fourYearTotalCost}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AdditionalInfo;