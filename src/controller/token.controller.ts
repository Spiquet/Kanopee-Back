import { SiteService } from './../services/site.service';
import { Application } from 'express';
import { commonController } from '../core/comon.controller';

export const SiteController = (app: Application) => {

  const siteService = new SiteService();
  const router = commonController(siteService);

  app.use('/sites', router);

};
