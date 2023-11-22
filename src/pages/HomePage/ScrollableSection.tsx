import React, { useEffect, useState } from 'react';
import {
  RightSubContainer,
  Container,
  HowItWorksContainer,
  LeftSubContainer,
  BikerAnimationContainer,
} from './ScrollableSection.styles';
import SmallBlueBike from '../../assets/svg/SmallBlueBike';
import SmallBlueRocket from '../../assets/svg/SmallBlueRocket';
import SmallBlueCircleArrow from '../../assets/svg/SmallBlueCircleArrow';
import BikerWithBike from '../../assets/svg/BikerWithBike';

export default function ScrollableSection() {
  const [scroll, setScroll] = useState(0);
  const [points, setPoints] = useState([0, 0, 0]);

  const MoE = -1 * (window.innerHeight / 1.4); //margin of error

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });

    const bikeElem = document.getElementById('reconditioned-bike-text');
    const useBikeElem = document.getElementById('use-bike-text');
    const fixItElem = document.getElementById('fix-it-text');

    setPoints([
      bikeElem!.getBoundingClientRect().y +
        (window.pageYOffset || bikeElem!.scrollTop) +
        MoE,
      useBikeElem!.getBoundingClientRect().y +
        (window.pageYOffset || useBikeElem!.scrollTop) +
        MoE,
      fixItElem!.getBoundingClientRect().y +
        (window.pageYOffset || fixItElem!.scrollTop) +
        MoE,
    ]);
  }, []);

  return (
    <Container>
      <BikerAnimationContainer scrollPosition={scroll} points={points}>
        <BikerWithBike />
      </BikerAnimationContainer>

      <HowItWorksContainer>
        <h2>How it works</h2>
        <span>
          <SmallBlueBike /> buy a bike
        </span>
        <span>
          <SmallBlueRocket /> sell a bike
        </span>
        <span>
          <SmallBlueCircleArrow /> rent a bike
        </span>
      </HowItWorksContainer>

      <RightSubContainer>
        <h2 id="reconditioned-bike-text">Buy a reconditioned bike</h2>
        <span>Safe, quick and easy.</span>
      </RightSubContainer>

      <LeftSubContainer>
        <h2 id="use-bike-text">Use the bike</h2>
        <span>as you like 💫</span>
      </LeftSubContainer>

      <LeftSubContainer>
        <h2 id="fix-it-text">And</h2>
        <span>if anything goes wrong</span>
        <h2>we fix it</h2>
        <span>for free, of course ❤️</span>
      </LeftSubContainer>
    </Container>
  );
}
