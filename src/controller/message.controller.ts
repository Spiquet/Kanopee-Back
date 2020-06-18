import { UserRole } from './../models/entity/user.entity';
import { connected } from './../middleware/connected-middleware';
import { MessageService } from './../services/message.service';
import { Application, Router, Request, Response } from 'express';
import { commonController } from '../core/comon.controller';
import { checkRole } from '../middleware/check-role-middleware';
import { attachCurrentUser } from '../middleware/attachCurrentUser-middleware';

export const MessageController = (app: Application) => {

  const messageService = new MessageService();
  let router = Router();

  // middleware connected
  router.use(connected());
  router.use(attachCurrentUser);

  router.get('/messages', checkRole([UserRole.ADMIN, UserRole.KULTEUR, UserRole.USER]), async (req: Request, res: Response) => {
    const user = (req as any).user;
    console.log(user);
    res.send(await messageService.getMessages(user));
  });

  router.get('/sites/:id', checkRole([UserRole.ADMIN, UserRole.KULTEUR, UserRole.USER]), async (req: Request, res: Response) => {
    res.send(await messageService.getMessagesBySiteId(Number(req.params.id)));

  });

  router.get('/questions', checkRole([UserRole.ADMIN, UserRole.KULTEUR, UserRole.USER]), async (req: Request, res: Response) => {
    res.send(await messageService.getAllQuestions());
  });

  router.post('/', checkRole([UserRole.ADMIN, UserRole.USER]), async (req: Request, res: Response) => {
    const userSite = (req as any).user?.site;
    if (userSite) {
      req.body.site = userSite;
    }
    res.send(await messageService.add(req.body));
  });

  router = commonController(messageService, router);

  app.use('/discussions', router);

};
