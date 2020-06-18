import { connected } from './../middleware/connected-middleware';
import { EventService } from './../services/event.service';
import { Application, Router, Request, Response } from 'express';
import { commonController } from '../core/comon.controller';

export const EventController = (app: Application) => {

  const eventService = new EventService();
  let router = Router();

  router.use(connected());

  router.get('/kulteur/:id', async (req: Request, res: Response) => {
    res.send(await eventService.getByIdEventKulteur(Number(req.params.id)));
  });

  router.get('/site/:id', async (req: Request, res: Response) => {
    res.send(await eventService.getByIdEventSite(Number(req.params.id)));
  });

  router.get('/workshops', async (req: Request, res: Response) => {
    res.send(await eventService.getWorkshopsEvent());
  });

  router = commonController(eventService, router);

  app.use('/events', router);
};
