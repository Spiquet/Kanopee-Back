import { connected } from './../middleware/connected-middleware';
import { environnment } from '../environments/environment';
import express, { Application, Request, Response, Router } from 'express';
import { AuthService } from '../services/auth.service';
import jwt from 'express-jwt';

export const AuthController = (app: Application) => {
  const authRouter: Router = express.Router();
  const authService = new AuthService();

  authRouter.get('/', (req: Request, res: Response) => {
    res.send('Protected Routes');
  }),
  authRouter.post('/signup', async (req: Request, res: Response) => {
    let user = req.body;
    try {
      user = await authService.signup(user);
      res.send(user);
    } catch (error) {
      res.status(409).send('L\'utilisateur existe déjà');
    }
  }),
  authRouter.get('/confirmation/:token', async (req: Request, res: Response) => {
    const tokenStr = req.params.token;
    try {
      await authService.confirmation(tokenStr);
      // Route de la redirection : res.redirect('http://localhost:4200/');
    } catch (error) {
      res.status(400).send('Lien invalide');
    }
    await authService.confirmation(tokenStr);
  }),
  authRouter.post('/signin', async (req: Request, res: Response) => {
    const userB = req.body;
    try {
      const { token, user } = await authService.signin(userB.email, userB.password);
      res.set('access-control-expose-headers', 'JWT-TOKEN');
      res.set('JWT-TOKEN', token); // Set du header
      res.send(user);
    } catch (error) {
      console.log(error);

      if (error.message === 'NOT_ACTIVE') {
        res.status(400).send('Le compte n\'est pas activé, vérifiez vos spams ');
      }
      res.status(409).send('Informations érronnées');
    }
  }),
  app.use('/auth', authRouter);

};
