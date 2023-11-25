import React from 'react';
import { ImageContainer, Image } from './CarouselItem.styled';

interface CarouselItemProps {
  image: string;
  altText: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, altText }) => {
  return (
    <ImageContainer>
      <Image src={image} alt={altText} />
    </ImageContainer>
  );
};

export default CarouselItem;
