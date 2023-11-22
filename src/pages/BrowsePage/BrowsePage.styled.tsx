import styled from '@emotion/styled';
import { secondaryColor } from 'src/const';

export const Container = styled.section`
  padding-top: 6.25rem;
  margin-bottom: 3rem;
`;

export const Label = styled.header`
  background: var(--secondary-color, ${secondaryColor});
  width: 100%;
  display: block;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    color: #000000;
    margin: 0.5rem 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    span {
      font-weight: 400;
      font-size: 0.8em;
    }
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: clamp(0.875rem, 2vw, 1.25rem);
    color: #000000;
    margin: 0.25rem 0;
    opacity: 0.85;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 0;
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
