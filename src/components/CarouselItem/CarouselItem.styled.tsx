import { Paper } from '@mui/material';
import styled from '@emotion/styled';

export const ImageContainer = styled(Paper)`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;
