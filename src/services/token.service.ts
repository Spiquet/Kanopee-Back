import { TokenRepository } from './../repository/token.repository';
import { getCustomRepository } from 'typeorm';
import { Token } from '../entity/token.entity';

export class TokenService {
  protected repository = getCustomRepository(TokenRepository);

  create(token: Token) {
    // token = this.repository.create(token)!; // Ici redondance de code avec le auth.service const token = new Token()
    return this.repository.save(token);
  }

  getByValue(value: string) {
    return this.repository.findOne({ value }, { relations: ['user'] });
  }
}
