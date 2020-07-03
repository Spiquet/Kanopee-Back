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
import { MailController } from './controller/contact.controller';

async function startServer() {

  const app = express();

  await loaders(app);

  UserController(app);
  MessageController(app);
  AteliersController(app);
  EventController(app);
  ResponseController(app);
  SiteController(app);
  AuthController(app);
  MailController(app);

  app.listen(3000, () => console.log('Express server  is running'));

}

startServer();
