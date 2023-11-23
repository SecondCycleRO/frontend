import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const Container = styled.div`
  padding: 2rem;
  margin-top: 4rem;
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
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const ImageCarousel = styled.div`
  flex: 3;
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
  justify-content: center;
  height: 30rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  .MuiTypography-h4 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 600;
  }

  .MuiTypography-h5 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .MuiTypography-subtitle1 {
    color: #666;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const AddToCartButton = styled.button`
  background-color: white;
  color: black;
  width: 100%;
  font-weight: bold;
  border-radius: 2rem;
  border: 1px solid black;
  align-self: center;
  margin-top: auto;
  padding: 1rem 2rem;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.3s,
    box-shadow 0.2s,
    transform 0.2s;

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

export const DescriptionSection = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
`;
