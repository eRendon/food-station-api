import { ProductController } from '../controllers/product.controller'
import { Router } from 'express'

export function ProductRoutes(productController: ProductController): Router {
  const router = Router();

  router.get('/', productController.getAll.bind(productController));
  router.get('/:id', productController.getById.bind(productController));
  router.post('/', productController.create.bind(productController));
  router.put('/:id', productController.update.bind(productController));
  router.delete('/:id', productController.delete.bind(productController));

  return router;
}
