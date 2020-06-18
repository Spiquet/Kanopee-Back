import { Token } from './../models/entity/token.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Token)
export class TokenRepository extends Repository<Token> { }
