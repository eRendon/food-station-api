import User from '../models/user.model'
import { IUserDeclarations } from '../controllers/user.controller'
import { UserAttributes } from '../interfaces/IUser'

export class UserRepository implements IUserDeclarations {
  async create({ username, password, email, rol }: UserAttributes): Promise<UserAttributes> {
    try {
      return await User.create({ username, password, email, rol });
    } catch (error) {
      console.log(error)
      throw new Error('Unable to create user');
    }
  }

  async findUserByUsername(email: string, password: string): Promise<UserAttributes | null> {
    try {
      return await User.findOne({ where: { email, password } });
    } catch (error) {
      throw new Error('Unable to find user');
    }
  }

  async findUserById(id: number): Promise<any> {
    try {
      return await User.findByPk(id);
    } catch (error) {
      throw new Error('Unable to find user');
    }
  }
}
