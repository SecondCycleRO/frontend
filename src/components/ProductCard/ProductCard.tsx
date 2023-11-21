import React from 'react';
import { useCart, CartContext } from 'src/context/CartContext';
import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import {
  StyledCard,
  NameTypography,
  AddToCartButton
} from './ProductCard.styles';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageUrl
}) => {
  const displayImage = imageUrl[0];
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const item = { name, price, imageUrl };
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <StyledCard>
      <CardMedia component="img" height="140" image={displayImage} alt={name} />
      <CardContent>
        <NameTypography gutterBottom variant="h5">
          {name}
        </NameTypography>
        <Typography variant="body2" color="text.secondary">
          {`${price} EUR`}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <AddToCartButton onClick={handleAddToCart}>Add to cart</AddToCartButton>
      </CardActions>
    </StyledCard>
  );
};
