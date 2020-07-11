import { User } from '../models/entity/user.entity';
import { environnment } from '../environments/environment';
import { ContactService } from '../services/contact.service';
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
import { AuthService } from '../services/auth.service';
import express, { Application, Request, Response, Router } from 'express';
import { info } from 'console';
import { userInfo } from 'os';

export const MailController = (app: Application) => {

  // const router = Router();

  const mailRouter: Router = express.Router();
  const contactService = new ContactService();

  mailRouter.get('/',  (req: Request, res: Response) => {
    res.send('Test Send mail');
  }),

  mailRouter.post('/email', async (req: Request, res: Response) => {

    // let user = req.body;
    let senderName = req.body.firstName;
    let senderEmail = req.body.email;
    let messageSubject = req.body.objet;
    let messageText = req.body.message;

    try {

      senderName = await contactService.nodemailer(senderName);
      senderEmail = await contactService.nodemailer(senderEmail);
      messageSubject = await contactService.nodemailer(messageSubject);
      messageText = await contactService.nodemailer(messageText);
      res.send(senderName);
      res.send(senderEmail);
      res.send(messageSubject);
      res.send(messageText);
     } catch (error) {

      res.status(400).send('Mail problème');
     }
  }),
  app.use('/contact', mailRouter);
};

