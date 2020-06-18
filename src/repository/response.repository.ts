import { Response } from '../models/entity/response.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Response)
export class ResponseRepository extends Repository<Response> {}
