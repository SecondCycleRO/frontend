import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
  role: 'buyer' | 'seller' | 'admin';
}

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const register = async (credentials: RegisterCredentials): Promise<void> => {
    setLoading(true);
    setError(null);
    setIsRegistered(false);

    try {
      await axiosInstance.post('/users/register', credentials);
      setIsRegistered(true);
    } catch (error: unknown) {
      setIsRegistered(false);
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<{ message: string }>;
        if (err.response) {
          if (typeof err.response.data === 'string') {
            setError(err.response.data);
          } else if (err.response.data && 'message' in err.response.data) {
            setError(
              err.response.data.message ||
                'Failed to register. Please try again.',
            );
          } else {
            setError('Failed to register. Please try again.');
          }
        } else if (err.request) {
          setError('No response received. Please try again.');
        } else {
          setError('An error occurred. Please try again.');
        }
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, isRegistered };
};
