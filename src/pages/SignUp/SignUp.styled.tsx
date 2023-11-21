import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
  height: 7.5rem;
  width: 5rem;
`;

export const MainCard = styled.div`
  margin-top: 7rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormCard = styled.form`
  font-family: 'Montserrat', sans-serif;
  padding: 2rem 0;
  margin: auto;
  width: 100%;
  max-width: 25rem;
  background-color: #494949;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.5625rem;
`;

export const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  margin: 0.625rem auto;
  font-size: 2rem;
  color: #ffffff;
`;

export const InputBox = styled.input`
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  border-radius: 1.5625rem;
  border: 0.125rem solid #888888; // Lighter border color
  padding: 1rem; // Increased padding
  width: 15.625rem;
  height: 2rem; // Increased height
  margin: 0.9375rem 0;
  background-color: #bcbcbc; // Lighter background
  color: #333333;

  &:focus {
    outline: none;
    border-color: #00a9e0;
    box-shadow: 0 0 0 0.125rem rgba(0, 169, 224, 0.2);
  }
`;

export const ButtonBox = styled.button`
  font-family: 'Montserrat', sans-serif;
  width: 18.375rem;
  height: 3.5rem; // Increased height
  font-size: 1.1rem; // Increased font size
  padding: 0.625rem 1.25rem;
  margin: 1rem 0; // Increased margin
  border-radius: 1.25rem;
  border: 0.125rem solid #494949;
  background-color: #00a9e0;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background-color: #008ac4;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #7da8b3;
    cursor: default;
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

export const DropdownContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  border-radius: 1.5625rem;
  border: 0.125rem solid #888888;
  padding: 1rem;
  width: 15.625rem;
  height: 2rem;
  margin: 0.9375rem 0;
  background-color: #bcbcbc;
  color: #333333;

  select {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #333333;
  }
`;

export const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 1rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
  display: block;
`;
