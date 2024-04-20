import { IProductInstance } from '../models/product.model'
import { IProductAttributes } from './IProduct'

export interface IDeclarations<T> {
  findAll(): Promise<IProductInstance[]>;
  findById(id: number): Promise<T | null>;
  create(product: T): Promise<T>;
  update(id: number, product: Partial<T>): Promise<T | null>;
  delete(id: number): Promise<boolean>;
}
