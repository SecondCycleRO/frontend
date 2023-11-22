import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { LoginResponse, ErrorResponse } from 'src/types/api';

interface LoginCredentials {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (
    credentials: LoginCredentials,
  ): Promise<string | void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post<LoginResponse>(
        '/users/login',
        credentials,
      );
      const { token } = response.data;

      localStorage.setItem('token', token);
      setLoading(false);
      return token;
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<ErrorResponse>;
        if (err.response) {
          setError(
            err.response.data.message ||
              'Failed to log in. Please check your credentials.',
          );
        } else if (err.request) {
          setError('No response received. Please try again.');
        } else {
          setError('An error occurred. Please try again.');
        }
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    }
  };

  return { login, loading, error };
};
