import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { IProduct } from '../types/interfaces';

export const useProduct = (productId: string) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get<IProduct>(
          `/products/${productId}`,
        );
        setProduct(response.data);
      } catch (err) {
        setError('Failed to fetch the product.');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return { product, loading, error };
};
