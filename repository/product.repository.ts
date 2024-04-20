import { IDeclarations } from '../interfaces/IDeclarations'
import Product, { IProductInstance } from '../models/product.model'
import { IProductAttributes } from '../interfaces/IProduct'

export class SequelizeProductRepository implements IDeclarations<IProductInstance> {

  async findAll(): Promise<IProductInstance[]> {
    return Product.findAll();
  }

  async findById(id: number): Promise<IProductInstance | null> {
    return Product.findByPk(id);
  }

  async create(product: IProductAttributes): Promise<IProductInstance> {
    return Product.create(product);
  }

  async update(id: number, product: Partial<IProductAttributes>): Promise<IProductInstance | null> {
    const existingProduct = await this.findById(id);
    if (existingProduct) {
      return existingProduct.update(product);
    }
    return null;
  }

  async delete(id: number): Promise<boolean> {
    const existingProduct = await this.findById(id);
    if (existingProduct) {
      await existingProduct.destroy();
      return true;
    }
    return false;
  }
}
