export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductCart {
  id: number;
  name: string;
  brand: string;
  description?: string;
  photo: string;
  price: string;
  createdAt?: string;
  updatedAt?: string;
  qtd?: number;
}
export interface ICard {
  product: IProduct;
}
