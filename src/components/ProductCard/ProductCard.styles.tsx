import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';

export const StyledCard = styled(Card)`
  width: 15rem;
  height: 100%;
  margin: 0.5rem;
  box-shadow: 3;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const NameTypography = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AddToCartButton = styled('button')`
  background-color: white;
  color: black;
  width: 80%;
  font-weight: bold;
  border-radius: 20px;
  border: 1px solid black;
  align-self: center;
  margin-top: auto;
  padding: 10px 20px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;
