import styled from '@emotion/styled';
import { secondaryColor } from 'src/const';

export const Container = styled.section`
  padding-top: 6.25rem;
  margin-bottom: 3rem;
`;

export const Label = styled.header`
  background: var(--secondary-color, ${secondaryColor});
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0 0.3125rem 0.3125rem 0;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    transition: color 0.3s ease;
  }
  span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: clamp(0.75rem, 1.5vw, 1rem);
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
