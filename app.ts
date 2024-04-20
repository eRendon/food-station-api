import express from 'express';
import { SequelizeProductRepository } from './repository/product.repository'
import { ProductController } from './controllers/product.controller'
import { ProductRoutes } from './routes/product.route'
import sequelizeApp from './sequelize/db'
import cors from 'cors'
import bodyParser from 'body-parser'
import { UserRoutes } from './routes/user.route'
import { UserController } from './controllers/user.controller'
import { UserRepository } from './repository/user.repository'

const productRepository = new SequelizeProductRepository();
const userRepository = new UserRepository()
const productController = new ProductController(productRepository);
const userController = new UserController(userRepository)
const app = express();
const port = 3000;

app.use(bodyParser.json())


app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:49204', 'https://food-station.vercel.app']
}));

app.use('/api/products', ProductRoutes(productController));
app.use('/api/users', UserRoutes(userController))
console.log(app.routes)
app.listen(port, () => {
  sequelizeApp.sync({ force: false})
  .then( () => {
    console.log('base de datos sincronizada')
    // sequelizeApp.close()
  }).catch( (e: Error) => {
    console.log('base da datos no sincronizada', e)
    // sequelizeApp.close()
  })
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
