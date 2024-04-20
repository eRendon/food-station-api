import { Sequelize } from 'sequelize'
import { initProductModel } from '../models/product.model'
import { initUserModel } from '../models/user.model'

const sequelizeApp = new Sequelize({
  dialect: 'postgres',
  database: 'station-food',
  username: 'postgres',
  password: '050287',
  host: 'localhost',
  port: 5432
});

initProductModel(sequelizeApp)
initUserModel(sequelizeApp)
export default sequelizeApp
