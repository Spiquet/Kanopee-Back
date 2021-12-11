import { connected } from './../middleware/connected-middleware';
import { attachCurrentUser } from './../middleware/attachCurrentUser-middleware';
import { AbstractService } from './abstract.service';
import express, { Request, Response, Router } from 'express';
import { checkRole } from '../middleware/check-role-middleware';
import { UserRole } from '../entity/user.entity';

export const commonController = (service: AbstractService, commonRouter = Router()) => {

  commonRouter.use(connected());
  commonRouter.use(attachCurrentUser);

  commonRouter.get(
    '/',
    checkRole([ UserRole.ADMIN, UserRole.KULTEUR, UserRole.USER ]),
    async (req: Request, res: Response) => {
      res.send(await service.getAll());
    },
    );

  commonRouter.get(
      '/:id',
      checkRole([ UserRole.ADMIN, UserRole.KULTEUR, UserRole.USER ]),
      async (req: Request, res: Response) => {
        res.send(await service.getById(Number(req.params.id)));
      },
  );


  commonRouter.post('/', checkRole([UserRole.ADMIN, UserRole.USER]), async (req: Request, res: Response) => {
    res.send(await service.add(req.body));
  });

  commonRouter.put('/:id', checkRole([UserRole.ADMIN, UserRole.USER]), async (req: Request, res: Response) => {
    const obj = await service.update(parseInt(req.params.id, 10), req.body);
    res.send(obj);
  });
  commonRouter.delete('/:id', checkRole([UserRole.ADMIN, UserRole.USER]), async (req: Request, res: Response) => {
    await service.delete(parseInt(req.params.id, 10));
    res.sendStatus(204);
  });

  return commonRouter;
    };
