import { Sequelize } from 'sequelize'
import { initProductModel } from '../models/product.model'
import { initUserModel } from '../models/user.model'
import pg from 'pg'

const sequelizeApp = new Sequelize('postgresql://eRendon:5Z6jlIQSRmdg@ep-crimson-truth-a5whwe7j.us-east-2.aws.neon.tech/food-station?sslmode=require', {
  dialectModule: pg
})

initProductModel(sequelizeApp)
initUserModel(sequelizeApp)
export default sequelizeApp
