import { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';
import resultData from '../data/results.js';
import AdditionalInfo from '../components/AditionalInfo.jsx';

const IntroduzcaElModelo = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [bestChoise, setBestChoise] = useState('');


  const handleFormSubmit = (data) => {
    const key = `${data.providerName} ${data.modelIdentifier}`;
    const result = resultData[key];
    if (result) {
      setProducts(result.products);
      setType(result.type);
      setMessage(result.products.find(product => product.message)?.message || '');
      setBestChoise(result.products.find(product => product.advice)?.advice || '');
    }
  };

  return (
    <>
      <ProductForm onSubmit={handleFormSubmit} />
      {products.length > 0 && (
        <>
          <ProductTable products={products} type={type} message={message} advice={bestChoise} />
          <AdditionalInfo products={products} />
        </>
      )}
    </>
  );
};

export default IntroduzcaElModelo;