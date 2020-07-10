import { User } from '../models/entity/user.entity';
import { environnment } from '../environments/environment';
import { ContactService } from '../services/contact.service';
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
import { AuthService } from '../services/auth.service';
import express, { Application, Request, Response, Router } from 'express';
import { info } from 'console';

export const MailController = (app: Application) => {

  // const router = Router();

  const mailRouter: Router = express.Router();
  const contactService = new ContactService();

  mailRouter.get('/',  (req: Request, res: Response) => {
    res.send('Test Send mail');
  }),

  mailRouter.post('/email', async (req: Request, res: Response) => {

    let user = req.body;

    try {
      user = await contactService.nodemailer(user);
      res.send(user);
    } catch (error) {

      res.status(400).send('Mail problème');
    }
  }),
  app.use('/contact', mailRouter);
};

