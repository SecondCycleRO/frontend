import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const Container = styled.div`
  padding: 2rem;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ImageCarousel = styled.div`
  flex: 3;
  /* Carousel styling here, you can use a package like 'react-slick' */
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const Sidebar = styled(Paper)`
  flex: 1;
  padding: 2rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const AddToCartButton = styled.button`
  margin-top: 1rem;
`;

export const DescriptionSection = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 4px;
`;
