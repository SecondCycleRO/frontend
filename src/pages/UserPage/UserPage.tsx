import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router';
import {
  LeftSideMenu,
  ListMember,
  ListMenu,
  RigthContainer,
  MainContainer,
  UserPhoto,
  UsernameContainer,
  RigthContainerMain,
  StyledLink,
  // UsernameContainer
} from './UserPage.styled';
import AccountSettings from './pages/AccountSettings';
import MyPurchases from './pages/MyPurchases';
import { Button } from '@mui/material';

const userData = {
  username: 'test',
  email: 'test@test.ro',
  role: 'buyer',
};

// Placeholder image
const userCirclePhoto = 'https://via.placeholder.com/150';

export const UserPage = () => {
  const user = useContext(UserContext);
  if (user) {
    user.isAuthenticated = true;
  }

  const navigate = useNavigate();
  const handleSignOut = () => {
    if (user) {
      user.setUser(() => ({
        username: userData.username,
        email: userData.email,
        role: 'buyer', // Update the role property to be of type "buyer" | "seller" | "admin"
      }));
      if (user.isAuthenticated) {
        user.isAuthenticated = false;
      }
      navigate('/');
      localStorage.removeItem('token');
      console.log('User signed out', user);
    }
  };

  if (user && user.isAuthenticated) {
    return (
      <>
        <Navbar />

        <MainContainer>
          <LeftSideMenu>
            <UserPhoto>
              <img
                src={userCirclePhoto}
                style={{ borderRadius: '50%', width: '110px', height: '110px' }}
              />
              <UsernameContainer>
                Username: {userData.username}
              </UsernameContainer>
            </UserPhoto>
            <ListMember>
              <StyledLink to="/user/settings">Account Settings</StyledLink>
            </ListMember>
            <ListMember>
              <StyledLink to="/user/purchases">Purchases</StyledLink>
            </ListMember>
            <ListMember>
              <StyledLink to="/login" onClick={() => handleSignOut()}>
                Sign Out
              </StyledLink>
            </ListMember>
          </LeftSideMenu>
          <RigthContainer>
            <RigthContainerMain>
              <h1>Your last purchases</h1>
              <Button>See more</Button>
            </RigthContainerMain>
          </RigthContainer>
        </MainContainer>
      </>
    );
  } else {
    return (
      <>
        <h1>You re not logged in</h1>
        <StyledLink to="/login">Login here</StyledLink>
      </>
    );
  }
};

export default UserPage;
