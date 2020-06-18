import { connected } from './../middleware/connected-middleware';
import { ResponseService } from './../services/response.service';
import { Application, Router } from 'express';
import { commonController } from '../core/comon.controller';

export const ResponseController = (app: Application) => {

  const responseService = new ResponseService();
  let router = Router();

  router.use(connected());

  router = commonController(responseService, router);

  app.use('/responses', router);

};
