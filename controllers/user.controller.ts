import { Request, Response } from 'express';
import { UserAttributes } from '../interfaces/IUser'
import jwt from 'jsonwebtoken';
import secretKey from '../const/secretKey'
import bcrypt from 'bcrypt';

export interface IUserDeclarations {
  findUserByUsername(username: string): Promise<UserAttributes | null>
  create({ username, password, email, rol }: UserAttributes): Promise<UserAttributes>
}

export class UserController {

  constructor (private readonly userRepository: IUserDeclarations) {}
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { username, password, email, rol } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await this.userRepository.create({ username, password: hashedPassword, email, rol });
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async login(req: Request, res: Response): Promise<any> {
    try {
      const { email, password } = req.body;
      const user = await this.userRepository.findUserByUsername(email);

      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      const token = jwt.sign({ userId: user!.id }, secretKey, { expiresIn: '24h' });
      const responseData = {
        username: user?.username,
        email: user?.email,
        id: user?.id,
        rol: user?.rol,
        token
      }
      res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

