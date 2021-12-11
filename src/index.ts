import 'reflect-metadata';
import express from 'express';
import loaders from './loaders';
import { UserController } from './controller/user.controller';
import { AteliersController } from './controller/ateliers.controller';
import { MessageController } from './controller/message.controller';
import { SiteController } from './controller/site.controller';
import { ResponseController } from './controller/response.controller';
import { EventController } from './controller/event.controller';
import { AuthController } from './controller/auth.controller';

async function startServer() {

  const app = express();

  
  await loaders(app);
  console.log('Nous sommes ici')
  
  // AteliersController(app);
  // EventController(app);
  // MessageController(app);
  // ResponseController(app);
  // SiteController(app);
  // AuthController(app);
  // UserController(app);

  app.listen(3000, () => console.log('Express server  is running'));

}

startServer();
