import { environnment } from './../environments/environment';
import { Token } from './../models/entity/token.entity';
import { User } from './../models/entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { getCustomRepository } from 'typeorm';
import { hash, verify } from 'argon2';
import { sign } from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
import { TokenService } from './token.service';
import { UserService } from './user.service';

export class AuthService {

  private tokenService: TokenService;
  private repository: UserRepository;
  private userService: UserService;
  constructor() {
    this.repository = getCustomRepository(UserRepository);
    this.tokenService = new TokenService();
    this.userService = new UserService();
  }

  // Crypte le password
  async signup(user: User) {
    user.password = await hash(user.password); // argon2
    delete user.role;
    user = this.repository.create(user); // Initialisation d'un objet user

    user = await this.repository.save(user);

    const tokenString = randomBytes(12).toString('hex'); // character string
    await this.nodemailer(tokenString, user);

    const token = new Token(); // Real Token Object
    token.user = user;
    token.value = tokenString;
    // token.expiration = new Date(getTime() + 1000 * 60 * 60 * 24 * 2);

    this.tokenService.create(token);
  }

  async signin(email: string, password: string) {

    const error = new Error('Invalid credentials');

    const user = await this.repository.findOne({ where: { email } });

    // tslint:disable-next-line: whitespace
    if (!user?.isActive) {
      throw new Error('NOT_ACTIVE');
    }

    if (!user) { // if not a user
      throw error;
    }
    // Verification of the correlation between password and password retrieved in entry
    const isPasswordValid = await verify(user.password, password);

    if (!isPasswordValid) {
      throw error;
    }

    // payload construction
    const payload = { id: user.id, email: user.email, role: user.role };

    // Variable environments
    const secret1 = environnment.JWT_SECRET;
    if (!secret1) {
      throw new Error('Servor not correctly configured'); // For the start of production  : if Variable environments not set
    }
    const token = sign(payload, secret1); // id username and role in signin (NO de password)
    return { token, user };
  }

  async confirmation(tokenStr: string) { // string of characters
    const token = await this.tokenService.getByValue(tokenStr); // retrieves the token associated with the value tokenStr (string)
    if (!token) {
      throw new Error('Lien invalide');
    }

    await this.userService.userActivation(token.user); // we call userActivation method to activate an account
  }

  // NODEMAILER
  private async nodemailer(token: string, user: User) {
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
        from: environnment.EMAIL, // sender address //
        to: user.email, // list of receivers
        subject: 'Activation link', // Subject line
        html: `<b><a href=${environnment.confirmationUrl + token}>
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

  }

}
