import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { useCart } from 'src/context/CartContext';
import { ICartItem } from 'src/types/interfaces';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from 'src/components/CarouselItem/CarouselItem';
import TechnicalSpecifications from 'src/components/TechnicalSpecifications/TechnicalSpecifications';
import {
  Container,
  TopSection,
  ImageCarousel,
  Sidebar,
  DescriptionSection,
  LoaderContainer,
  AddToCartButton,
} from './ProductPage.styled';
import { Typography } from '@mui/material';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, loading, error } = useProduct(productId || '');

  const { dispatch } = useCart();

  const handleAddToCart = () => {
    if (product) {
      const item: ICartItem = {
        id: product._id,
        name: product.title,
        price: product.price,
        imageUrl: product.imageUrl[0],
      };
      dispatch({ type: 'ADD_ITEM', payload: item });
      toast.success('Item added to cart');
    } else {
      toast.error('Error: Product is not available.');
    }
  };

  if (!productId) {
    return (
      <>
        <Navbar />
        <Container>Product not found</Container>;
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        {loading ? (
          <LoaderContainer>
            <TailSpin color="#00BFFF" height={80} width={80} />
          </LoaderContainer>
        ) : error ? (
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        ) : product ? (
          <>
            <TopSection>
              <ImageCarousel>
                <Carousel>
                  {product.imageUrl.map((image, index) => (
                    <CarouselItem
                      key={index}
                      image={image}
                      altText={product.title}
                    />
                  ))}
                </Carousel>
              </ImageCarousel>
              <Sidebar>
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="h5">${product.price}</Typography>
                <Typography variant="subtitle1">
                  Condition: {product.condition}
                </Typography>
                <AddToCartButton onClick={handleAddToCart}>
                  Add to Cart
                </AddToCartButton>
              </Sidebar>
            </TopSection>
            <DescriptionSection>
              <Typography fontWeight="bold" variant="h4">
                Description
              </Typography>
              <Typography variant="body1">{product.description}</Typography>
            </DescriptionSection>
            <TechnicalSpecifications />
          </>
        ) : (
          <Typography>Product not found</Typography>
        )}
      </Container>
    </>
  );
};

export default ProductPage;
