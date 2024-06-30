import RenderStars from './RenderStars';

const ProductTable = ({ products, type, message }) => {
  return (
    <section className="product-table-section bg-background-light py-8">
      <div className="container mx-auto">
        <div className="table-header text-center mb-8">
          <h2 className="text-primary-dark text-hero-title-mobile md:text-hero-title-desktop font-bold">{type}</h2>
        </div>
        <div className="table-wrapper overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-primary-dark tracking-wider">Características</th>
                {products.map((product, index) => (
                  <th key={index} className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-primary-dark tracking-wider">
                    <div className="flex flex-col items-center">
                      <img className="h-20 w-20 md:h-40 md:w-40 object-contain mb-2" src={product.image} alt={product.modelIdentifier} />
                      <div>
                        <div className="text-xs md:text-sm leading-5 font-medium text-gray-900">{product.modelIdentifier}</div>
                        <div className="text-xs md:text-sm leading-5 text-gray-500">{product.providerName}</div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Coste de funcionamiento</td>
                {products.map((product, index) => (
                  <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.consumption}</td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Costo (Bs.)</td>
                {products.map((product, index) => (
                  <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.cost}</td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Volumen interno</td>
                {products.map((product, index) => (
                  <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.volume}</td>
                ))}
              </tr>
              { products[0].waterConsumption &&
                <tr>
                  <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Consumo de agua</td>
                  {products.map((product, index) => (
                    <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">{product.waterConsumption}</td>
                  ))}
                </tr>
              }
              <tr>
                <td className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm">Calificación</td>
                {products.map((product, index) => (
                  <td key={index} className="px-6 py-4 border-b border-gray-300 text-center text-xs md:text-sm"><RenderStars rating={product.ranking} /></td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {message && (
          <div className="message-section mt-8 text-center bg-white p-4 rounded-lg">
            <h3 className="text-primary font-bold text-hero-title-mobile md:text-hero-title-desktop mb-2">Recomendación</h3>
            <ul className="list-disc list-inside text-left">
              {message.map((msg, index) => (
                <li key={index} className="text-text-secondary text-body-mobile md:text-body-desktop">{msg}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTable;