import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';

export const StyledCard = styled(Card)`
  width: 15rem;
  height: 100%;
  margin: 0.5rem;
  box-shadow:
    3px 3px 6px rgba(0, 0, 0, 0.16),
    0px 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
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
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.3s,
    box-shadow 0.2s,
    transform 0.2s;

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;
