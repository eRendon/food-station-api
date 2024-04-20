import { UserController } from '../controllers/user.controller'
import { Router } from 'express'

export function UserRoutes(userController: UserController): Router {
  const router = Router()
  router.post('/register', userController.register.bind(userController))
  router.post('/login', userController.login.bind(userController))

  return router
}
