import { multerMiddleWare } from '../middleware/atelier-Multer';
import { AtelierService } from './../services/atelier.service';
import { Application, Request, Response, NextFunction, Handler, Router } from 'express';
import { commonController } from '../core/comon.controller';
import { checkRole } from '../middleware/check-role-middleware';
import { UserRole } from '../entity/user.entity';
import { connected } from '../middleware/connected-middleware';

export const AteliersController = (app: Application) => {

  const atelierService = new AtelierService();
  let router = Router();

  // middleware connected
  router.use(connected());

  router.post('/file', checkRole([UserRole.ADMIN]), multerMiddleWare(), async (req: Request, res: Response, next: NextFunction) => {

      const files = req.files as {[fieldname: string]: Express.Multer.File[]; };
      if (!files) {
          const error = new Error('Please upload a file');
          res.sendStatus(400);
          console.info('');
          return next(error);
        }
      res.send(await atelierService.create(req.body, [files?.userSupport[0] , files?.kulteurSupport[0]]));
  });

  router.put('/fileupload/:id', checkRole([UserRole.ADMIN]), multerMiddleWare(), (req: Request, res: Response, next: Handler) => {
    const files = req.files as { [fieldname: string]: Express.Multer.File[]; };
    // tslint:disable-next-line: whitespace
    res.send(atelierService.updateFile(req.body, [files?.userSupport[0], files?.kulteurSupport[0] ]));
  });

  router = commonController(atelierService, router);
  app.use('/ateliers', router);
};
