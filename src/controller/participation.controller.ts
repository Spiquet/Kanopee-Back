import { commonController } from './../core/comon.controller';
import { Application } from 'express';
import { ParticipationService } from './../services/participation.service';

export const ParticipationController = (app: Application) => {

  const participationService = new ParticipationService();
  const router = commonController(participationService);

  app.use('/participations', router);

};
