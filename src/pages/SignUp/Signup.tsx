import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { useRegister } from '../../hooks/useRegister';
import {
  FormCard,
  InputBox,
  Title,
  ButtonBox,
  MainCard,
  StyledLink,
  DropdownContainer,
  Label,
} from './SignUp.styled';
import BlueLogo from '../../assets/svg/BlueLogo';
import Navbar from '../../components/Navbar/Navbar';

export default function Signup() {
  const navigate = useNavigate();
  const { register, loading, error, isRegistered } = useRegister();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [selectedRole, setSelectedRole] = useState('buyer');

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (isRegistered) {
      toast.success('Registration successful. Redirecting to login...');
      setTimeout(() => navigate('/login'), 1000);
    }
  }, [error, isRegistered, navigate]);

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match.');
      return;
    }

    if (
      selectedRole !== 'buyer' &&
      selectedRole !== 'seller' &&
      selectedRole !== 'admin'
    ) {
      toast.error('Invalid role selected.');
      return;
    }

    await register({ username, email, password, role: selectedRole });
  };

  const handleRoleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const renderInput = (
    input_type: 'Username' | 'Email' | 'Password' | 'Confirm Password',
  ) => {
    let value: string, onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    const inputName = input_type.toLowerCase().replace(' ', '_');

    switch (inputName) {
      case 'username':
        value = username;
        onChange = (event) => setUsername(event.target.value);
        break;
      case 'email':
        value = email;
        onChange = (event) => setEmail(event.target.value);
        break;
      case 'password':
        value = password;
        onChange = (event) => setPassword(event.target.value);
        break;
      case 'confirm_password':
        value = passwordConfirm;
        onChange = (event) => setPasswordConfirm(event.target.value);
        break;
      default:
        value = '';
        onChange = () => {};
    }

    return (
      <InputBox
        value={value}
        onChange={onChange}
        placeholder={input_type}
        type={input_type.includes('Password') ? 'password' : 'text'}
      />
    );
  };

  return (
    <>
      <Navbar />
      <MainCard>
        <FormCard>
          <BlueLogo />
          <Title>Sign up</Title>
          <div className="InputWrapper">
            <Label htmlFor="username">Username</Label>
            {renderInput('Username')}
          </div>
          <div className="InputWrapper">
            <Label htmlFor="username">Email</Label>
            <div className="InputWrapper">{renderInput('Email')}</div>
          </div>
          <div className="InputWrapper">
            <Label htmlFor="username">Role</Label>
            <DropdownContainer>
              <select value={selectedRole} onChange={handleRoleChange}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </DropdownContainer>
          </div>
          <div className="InputWrapper">
            <Label htmlFor="username">Password</Label>
            <div className="InputWrapper">{renderInput('Password')}</div>
          </div>
          <div className="InputWrapper">
            <Label htmlFor="username">Confirm Password</Label>
            <div className="InputWrapper InputWrapperSpacer"></div>
            {renderInput('Confirm Password')}
          </div>
          <ButtonBox onClick={handleRegister} disabled={loading}>
            {loading ? (
              <TailSpin color="#00BFFF" height={20} width={20} />
            ) : (
              'Continue'
            )}
          </ButtonBox>

          <StyledLink to="/login">Already have an account?</StyledLink>
        </FormCard>
      </MainCard>
    </>
  );
}
