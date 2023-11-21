import styled from '@emotion/styled';
import { secondaryColor } from 'src/const';

export const PageContainer = styled.div`
  background: white;
`;

export const HeroSection = styled.div`
  width: 88vw;
  height: max-content;
  margin-left: 6vw;
  height: 130vh;
`;

export const HeroTitle = styled.h2<{
  spacing: number;
  translateY: number;
}>`
  font-family: 'Acme', sans-serif;
  font-weight: bolder;
  font-size: 50px;
  letter-spacing: ${(props) => props.spacing}px;
  color: white;
  position: absolute;
  bottom: 125px;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%) translateY(-${(props) => props.translateY}%);
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -15px;
    width: 130%;
    height: 3px;
    background: linear-gradient(to right, white, transparent);
  }
`;

export const ParallaxContainer = styled.div<{
  brightness: number;
  leavesScale: number;
  hoomanScale: number;
  hoomanTranslate: number;
}>`
  position: sticky;
  top: 50px;
  border-radius: 5px;

  overflow: hidden;

  img {
    /* transition: 50ms; */
    border-radius: 5px;
  }

  #hooman {
    width: 100%;
    object-fit: fit;
    transform: scale(${(props) => props.hoomanScale})
      translateY(${(props) => props.hoomanTranslate}%);
    z-index: 1;
    filter: grayscale(15%) brightness(${(props) => props.brightness}%);
  }

  #leaves {
    width: 100%;
    position: absolute;
    object-fit: fit;
    transform: scale(${(props) => props.leavesScale});
    transform-origin: bottom;
    bottom: 0;
    left: 0;
    z-index: 5;
  }
`;

export const Header = styled.div`
  position: absolute;
  top: 2cm;
  left: 10%;
  z-index: 3;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  a {
    background: none;
    color: white;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 20px;
    transition: opacity 0.2s;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const LabelsContainer = styled.div`
  width: max-content;
  margin-right: 10%;
  float: right;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  color: white;
  h1 {
    font-size: 4.5rem;
  }

  span {
    margin-bottom: 12px;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    svg {
      width: 25px;
    }
  }
`;

export const Stripe = styled.div`
  width: 100%;
  height: 150px;
  background: ${secondaryColor};
  margin-bottom: 2cm;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
  }
`;
