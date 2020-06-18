import { connected } from './../middleware/connected-middleware';
import { SiteService } from './../services/site.service';
import { Application, Router } from 'express';
import { commonController } from '../core/comon.controller';

export const SiteController = (app: Application) => {

  const siteService = new SiteService();
  let router = Router();

  router.use(connected());
  router = commonController(siteService);

  app.use('/sites', router);

};
