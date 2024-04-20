import { UserAttributes } from '../interfaces/IUser'
import { DataTypes, Model, Optional, Sequelize } from 'sequelize'

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
export interface IUserInstance extends Model<UserAttributes>, UserAttributes {}
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public rol!: number

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initUserModel(sequelize: Sequelize): void {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      rol: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'users',
      sequelize, // Necesitas pasar la conexión sequelize como segundo argumento
    }
  );
}

export default User
