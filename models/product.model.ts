import { DataTypes, Model, Sequelize } from 'sequelize';
import { IProductAttributes } from '../interfaces/IProduct'

export interface IProductInstance extends Model<IProductAttributes>, IProductAttributes {}
class Product extends Model<IProductAttributes> implements IProductAttributes {
  public  category!: string
  public description!: string
  public quantity?: number
  public title!: string
  public rating?: { count: number; rate: number };
  public price!: number
  public image!: string
  public id?: number
}

export function initProductModel (sequelize: Sequelize): void {
  Product.init({
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rating: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Products'
  })
}

export default Product
