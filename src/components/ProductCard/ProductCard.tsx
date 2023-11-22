import React from 'react';
import { useCart } from 'src/context/CartContext';
import { ICartItem } from 'src/types/interfaces';
import { CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import {
  StyledCard,
  NameTypography,
  AddToCartButton,
} from './ProductCard.styles';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string[];
  onCardClick?: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  onCardClick,
}) => {
  const displayImage = imageUrl[0];
  const { dispatch } = useCart();

  const handleCardClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onCardClick?.(id);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    const item: ICartItem = { id, name, price, imageUrl: displayImage };
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <StyledCard onClick={handleCardClick}>
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
        <AddToCartButton onClick={(event) => handleAddToCart(event)}>
          Add to cart
        </AddToCartButton>
      </CardActions>
    </StyledCard>
  );
};
