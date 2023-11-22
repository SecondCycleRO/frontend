import React from 'react';
import { useProducts } from 'src/hooks/useProducts';
import { TailSpin } from 'react-loader-spinner';
import Navbar from '../../components/Navbar/Navbar';
import { ProductCard } from 'src/components/ProductCard/ProductCard';
import {
  Container,
  Label,
  ProductsContainer,
  LoaderContainer,
} from './BrowsePage.styled';

export default function BrowsePage() {
  const { products, loading, error } = useProducts();

  const renderContent = () => {
    if (loading) {
      return (
        <LoaderContainer>
          <TailSpin color="#00BFFF" height={80} width={80} />
        </LoaderContainer>
      );
    }

    if (error) {
      return (
        <LoaderContainer>
          <h3>No items found, please try again!</h3>
        </LoaderContainer>
      );
    }

    return (
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            name={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </ProductsContainer>
    );
  };

  return (
    <Container>
      <Navbar />
      <Label>
        <p>We insure</p>
        <h2>
          QUALITY <span>and</span> MAINTAINABILITY
        </h2>
        <p>for the bikes that we sell</p>
      </Label>
      {renderContent()}
    </Container>
  );
}
