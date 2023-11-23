import React from 'react';
import { Paper } from '@mui/material';
import styled from '@emotion/styled';

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

interface CarouselItemProps {
  image: string;
  altText: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, altText }) => {
  return (
    <Paper>
      <Image src={image} alt={altText} />
    </Paper>
  );
};

export default CarouselItem;
