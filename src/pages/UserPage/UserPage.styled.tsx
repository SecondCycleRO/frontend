import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MainContainer = styled.div`
  display: flex;
`;

export const LeftSideMenu = styled.ul`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  width: 25vw;
  height: 100vh;
  background-color: grey;
  font-size: large;
  font-weight: bold;
  font-family: Roboto, sans-serif;
`;

export const ListMember = styled.li`
  margin: 20px;
  font-size: large;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  list-style-type: none;
  cursor: pointer;
  color: black;

  /* Remove link styles */
  a {
    text-decoration: none;
  }
`;
export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #00a9e0;
  text-decoration: none;
  margin-top: 2rem;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:visited {
    color: #00a9e0;
  }

  &:hover,
  &:focus {
    color: #008ac4;
    text-decoration: underline;
    transform: translateY(-2px);
  }
`;

export const ListMenu = styled.label`
  /* font-size: large;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  margin: 100px; */
`;

export const UserPhoto = styled.div`
  margin: 50px 0px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UsernameContainer = styled.span`
  padding-right: 60px;
  font-size: large;
  font-weight: bold;
  font-family: Roboto, sans-serif;
`;

export const RigthContainer = styled.label`
  width: 75vw;
  height: 100vh;
  background-color: whitesmoke;
`;

export const RigthContainerMain = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
