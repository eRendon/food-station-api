import { NextFunction, Request, Response } from 'express'
import jwt, { VerifyErrors } from 'jsonwebtoken';
import secretKey from '../const/secretKey'

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
const authenticateToken = (req: Request, res: Response, Next: NextFunction): Response | void => {
  const authHeader = req.headers['authorization']

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token de autenticación no proporcionado o en formato incorrecto' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token de autenticación inválido'})
    }
    req.user = user
    Next()
  })
}

export default authenticateToken;
