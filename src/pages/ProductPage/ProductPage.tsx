import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from 'src/components/CarouselItem/CarouselItem';
import {
  Container,
  TopSection,
  ImageCarousel,
  Image,
  Sidebar,
  AddToCartButton,
  DescriptionSection,
  LoaderContainer,
} from './ProductPage.styled';
import { CircularProgress, Typography, Button } from '@mui/material';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, loading, error } = useProduct(productId || '');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  if (!productId) {
    return <Container>Product not found</Container>;
  }

  return (
    <Container>
      {/* <Navbar /> */}
      {loading ? (
        <LoaderContainer>
          <CircularProgress />
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
              <Button variant="contained" color="primary" size="large">
                Add to Cart
              </Button>
            </Sidebar>
          </TopSection>
          <DescriptionSection>
            <Typography variant="body1">{product.description}</Typography>
          </DescriptionSection>
        </>
      ) : (
        <Typography>Product not found</Typography>
      )}
    </Container>
  );
};

export default ProductPage;
