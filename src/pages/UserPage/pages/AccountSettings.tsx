import React, { useState } from 'react';
import { FormCard, InputBox } from '../../SignUp/SignUp.styled';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { Button } from '@mui/material';
import axios from 'axios';
import axiosInstance from '../../../api/axiosInstance';

export default function AccountSettings() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const userData = useContext(UserContext);

  const handleSubmit = async () => {
    const updatedUser = {
      username,
      email,
      phoneNumber,
    };

    try {
      // const response = await axios.put('http://localhost:3010/api/users/profile',, updatedUser);
      const response = await axiosInstance.put('/users/profile', updatedUser);
      console.log('User updated successfully:', response);
      console.log(response);
      // userData?.setUser(response);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const renderInput = (inputCase: string) => {
    switch (inputCase) {
      case 'username': {
        return (
          <InputBox
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(event.target.value)
            }
            placeholder="New Username"
            type="string"
          />
        );
      }
      case 'email': {
        return (
          <InputBox
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            placeholder="New Email"
            type="text"
          />
        );
      }
      case 'phoneNumber': {
        return (
          <InputBox
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPhoneNumber(event.target.value)
            }
            placeholder="New Phone Number"
            type="text"
          />
        );
      }
      default: {
        return null;
      }
    }
  };
  console.log(userData);
  return (
    <>
      {userData && userData.isAuthenticated && (
        <>
          <div>Settings</div>
          <FormCard>
            <div className="InputWrapper">{renderInput('username')}</div>
            <div className="InputWrapper">{renderInput('email')}</div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Confirm
            </Button>
          </FormCard>
        </>
      )}
    </>
  );
}
