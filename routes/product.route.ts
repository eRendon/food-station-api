import { ProductController } from '../controllers/product.controller'
import { Router } from 'express'
import authenticateToken from '../middlewares/auth.middleware'
export function ProductRoutes(productController: ProductController): Router {
  const router = Router();

  router.get('/',  productController.getAll.bind(productController));
  router.get('/:id',  productController.getById.bind(productController));
  router.post('/', authenticateToken, productController.create.bind(productController));
  router.put('/:id', authenticateToken, productController.update.bind(productController));
  router.delete('/:id', authenticateToken, productController.delete.bind(productController));

  return router;
}
