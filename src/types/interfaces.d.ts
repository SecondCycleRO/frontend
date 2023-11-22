export interface IUser {
  username: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
}

export interface ITransaction {
  productId: string;
  sellerId: string;
  buyerId: string;
  transactionType: 'sale' | 'rent';
  transactionDate: Date;
  price: number;
}

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: 'bicycle' | 'scooter';
  condition: 'new' | 'used';
  imageUrl: string[];
}

interface ICartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}
