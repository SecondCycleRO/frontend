import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../../types/api';
import {
  FormCard,
  InputBox,
  Title,
  ButtonBox,
  MainCard,
  StyledLink,
  Label,
} from '../SignUp/SignUp.styled';
import { UserContext } from '../../context/UserContext';
import BlueLogo from '../../assets/svg/BlueLogo';
import Navbar from '../../components/Navbar/Navbar';
import { useLogin } from '../../hooks/useLogin';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userContext = useContext(UserContext);
  const { login, loading, error } = useLogin();

  useEffect(() => {
    if (error !== null) {
      toast.error(error);
    }
  }, [error]);

  const renderInput = (isPassword = false) => {
    if (isPassword) {
      return (
        <div className="InputWrapper">
          <Label htmlFor="username">Password</Label>
          <InputBox
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            type="password"
          />
        </div>
      );
    }
    return (
      <div className="InputWrapper">
        <Label htmlFor="username">Email</Label>

        <InputBox
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          type="text"
        />
      </div>
    );
  };

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const token = await login({ email, password });
      if (typeof token !== 'string') {
        return;
      }

      const decoded = jwtDecode(token) as DecodedToken;
      if (!decoded) {
        throw new Error('Failed to decode token.');
      }

      const validRoles = ['buyer', 'seller', 'admin'];
      //@ts-ignore
      if (!validRoles.includes(decoded.role)) {
        throw new Error('Invalid user role.');
      }

      if (userContext) {
        userContext.setUser({
          email: decoded.email!,
          username: decoded.username!,
          role: decoded.role as 'buyer' | 'seller' | 'admin',
        });
        userContext.isAuthenticated = true;
      }

      toast.success('Login successful. Redirecting...');
      setTimeout(() => navigate('/browse'), 1000);
    } catch (err) {
      let errorMessage = 'An unexpected error occurred.';
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      toast.error(errorMessage);
    }
  }

  return (
    <>
      <Navbar />
      <MainCard>
        <FormCard onSubmit={handleLogin}>
          <BlueLogo />
          <Title>Login</Title>
          <div className="InputWrapper">{renderInput(false)}</div>
          <div className="InputWrapper">{renderInput(true)}</div>
          <br />
          <ButtonBox type="submit" disabled={loading}>
            {loading ? (
              <TailSpin color="#00BFFF" height={20} width={20} />
            ) : (
              'Continue'
            )}
          </ButtonBox>
          <br />

          <StyledLink to="/signup">Don&apos;t have an account?</StyledLink>
        </FormCard>
      </MainCard>
    </>
  );
}
