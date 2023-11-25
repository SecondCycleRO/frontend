import styled from '@emotion/styled';
import { secondaryColor } from '../../const';

export const Container = styled.div`
  margin-top: 10vh;
  min-height: 50vh;
  display: flex;
  gap: 35vh;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15cm;
  position: relative;
`;

export const HowItWorksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: max-content;
  padding: 25px;
  margin-right: 15vw;
  align-self: flex-end;

  h2 {
    font-weight: 1000;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem !important;
  }

  span {
    margin-bottom: 12px;
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    svg {
      width: 25px;
    }
  }
`;

export const RightSubContainer = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: max-content;
  padding: 25px;
  background: ${secondaryColor};
  width: 45%;
  border-radius: 5px 0 0 5px;

  h2 {
    font-weight: 1000;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem !important;
    margin: 5px;
  }
  span {
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const LeftSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: max-content;
  padding: 25px;
  background: ${secondaryColor};
  width: 45%;
  border-radius: 0 5px 5px 0;
  h2 {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem !important;
    margin: 5px;
  }
  span {
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const BikerAnimationContainer = styled.div<{
  scrollPosition: number;
  points: number[];
}>`
  position: sticky;
  top: 50px;
  height: 2px;
  transition: 1.2s;
  left: ${(props) => (props.scrollPosition >= props.points[1] ? '55%' : 0)};
  max-width: 50vw;
  svg {
    max-width: 100%;
    #hooman,
    #ground {
      transition: 0.2s;
      opacity: ${(props) => {
        return props.scrollPosition >= props.points[0] ? 0 : 1;
      }};
    }
    #bike {
      transition: 0.5s;
      transform-box: fill-box;
      transform-origin: center;
      transform: scaleX(
        ${(props) => (props.scrollPosition >= props.points[0] ? 1.3 : 1)}
      );
    }

    #bike_body {
      transition: 0.4s;
      transform-box: fill-box;
      transform-origin: center;
      transform: scale(
        ${(props) => (props.scrollPosition >= props.points[2] ? '.8' : 1)}
      );
    }

    #ghidon {
      transition: 0.4s;
      transform-box: fill-box;
      transform-origin: center;
      transform: translate(
        ${(props) =>
          props.scrollPosition >= props.points[2] ? '10px, -10px' : 0}
      );
    }

    #shitz {
      transition: 0.4s;
      transform-box: fill-box;
      transform-origin: center;
      transform: translate(
        ${(props) =>
          props.scrollPosition >= props.points[2] ? '-10px, -10px' : 0}
      );
    }

    #roata_stg {
      transition: 0.4s;
      transform-box: fill-box;
      transform-origin: center;
      transform: translate(
        ${(props) =>
          props.scrollPosition >= props.points[2] ? '-10px, +10px' : 0}
      );
    }

    #roata_dr {
      transition: 0.4s;
      transform-box: fill-box;
      transform-origin: center;
      transform: translate(
        ${(props) =>
          props.scrollPosition >= props.points[2] ? '+10px, +10px' : 0}
      );
    }
  }
`;
