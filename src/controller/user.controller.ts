import { connected } from './../middleware/connected-middleware';
import { UserService } from './../services/user.service';
import { Application, Router, Request, Response } from 'express';
import { commonController } from '../core/comon.controller';

export const UserController = (app: Application) => {
  const userService = new UserService();
  let router = Router();

  router.use(connected());

  router.get('/kulteur', async (req: Request, res: Response) => {
    res.send(await userService.getKulteur());
  });

  router.get('/role', async (req: Request, res: Response) => {
    res.send(await userService.getKulteur());
  });

  // Sur l'URL "me" dans "users", on récupère l'utilisateur associé à l'ID qu'il y a dans le Token
  router.get('/me', async (req: Request, res: Response) => {
    let user;
    console.log((req as any).user);

    try {
      user = await userService.getById((req as any).user.id);
    } catch (error) {
    console.log(error);
    }

    if (!user) {
      res.status(404).send('Aucun utilisateur trouvé pour ce token');
    }
    res.send(user);
  });

  router = commonController(userService, router);

  app.use('/users', router);
};
