import { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [providerName, setProviderName] = useState('');
  const [modelIdentifier, setModelIdentifier] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ providerName, modelIdentifier });
  };

  return (
    <section className="product-form-section bg-background-light py-8">
      <div className="container mx-auto">
        <div className="form-header text-center mb-8">
          <h2 className="text-primary-dark text-hero-title-mobile md:text-hero-title-desktop font-bold">Introduzca el Modelo</h2>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-text-primary font-bold mb-2" htmlFor="providerName">
              Nombre del fabricante
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="providerName"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-text-primary font-bold mb-2" htmlFor="modelIdentifier">
              Identificador de modelo
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="modelIdentifier"
              value={modelIdentifier}
              onChange={(e) => setModelIdentifier(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <button
              type="submit"
              className="px-4 py-2 mb-2 md:mb-0 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition"
            >
              Cargar datos del producto
            </button>
            <button
              type="reset"
              className="px-4 py-2 bg-secondary text-white font-semibold rounded hover:bg-secondary-dark transition"
              onClick={() => {
                setProviderName('');
                setModelIdentifier('');
              }}
            >
              Restablecer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductForm;
