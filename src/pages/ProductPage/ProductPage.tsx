import React from 'react';
import { useParams } from 'react-router-dom';
// import { useProduct } from 'src/hooks/useProduct';

const ProductPage = () => {
  const { productId } = useParams();
  // const { product, loading, error } = useProduct(productId);

  return <div>{productId}</div>;
};

export default ProductPage;
