import { TokenRepository } from './../repository/token.repository';
import { getCustomRepository } from 'typeorm';
import { Token } from '../models/entity/token.entity';

export class TokenService {
  protected repository = getCustomRepository(TokenRepository);

  create(token: Token) {
    // token = this.repository.create(token)!; // Here code redundancy with the auth.service const token = new Token()
    return this.repository.save(token);
  }

  getByValue(value: string) {
    return this.repository.findOne({ value }, { relations: ['user'] });
  }
}
