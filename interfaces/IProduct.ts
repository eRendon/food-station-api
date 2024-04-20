export interface Rating {
  count: number;
  rate: number;
}

export interface IProductAttributes {
  id?: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating?: Rating;
  title: string;
  quantity?: number;
}
