import { IDeclarations } from '../interfaces/IDeclarations'
import { IProductAttributes } from '../interfaces/IProduct'
import { Request, Response } from 'express';
import { IProductInstance } from '../models/product.model'

export class ProductController {
  constructor(private readonly productRepository: IDeclarations<IProductInstance>) {}

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.productRepository.findAll();
      await res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const product = await this.productRepository.findById(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      console.log(req)
      const productData: IProductAttributes = req.body;
      const product = await this.productRepository.create(<IProductInstance>productData);
      res.status(201).json(product);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const productData: Partial<IProductAttributes> = req.body;
      const product = await this.productRepository.update(id, productData);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await this.productRepository.delete(id);
      if (success) {
        const products = await this.productRepository.findAll();
        res.status(200).json(products);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
