import React from 'react';
import { useProducts } from 'src/hooks/useProducts';
import { TailSpin } from 'react-loader-spinner';
import Navbar from '../../components/Navbar/Navbar';
import { ProductCard } from 'src/components/ProductCard/ProductCard';
import {
  Container,
  Label,
  ProductsContainer,
  LoaderContainer
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
          <p>No items found, please try again!</p>
        </LoaderContainer>
      );
    }

    return (
      <ProductsContainer>
        {products.map((product, index) => (
          <ProductCard
            key={index}
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
        <span>we insure</span>
        <h2>
          QUALITY <span>and</span> MAINTAINABILITY
        </h2>
        <span>for the bikes that we sell</span>
      </Label>
      {renderContent()}
    </Container>
  );
}
