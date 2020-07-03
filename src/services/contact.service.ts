import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
import { User } from './../models/entity/user.entity';
import { error } from 'console';
import { environnment } from './../environments/environment';
import { getCustomRepository } from 'typeorm';

export class ContactService {

  constructor() {

  }

// NODEMAILER
public async nodemailer(user: User) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = createTransport({
    host: environnment.mailHost,
    port: environnment.mailPort,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  try {

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: user.email, // sender address // Mettre adresse client
      to: user.email , // list of receivers
      subject: 'Activation link', // Subject line
      html: `<b><a href=${environnment.confirmationUrl}>
      Activation link </a>
      </b>`, // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.error(error);

  }

}}
