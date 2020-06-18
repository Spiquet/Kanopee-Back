import { ResponseRepository } from '../repository/response.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class ResponseService extends AbstractService {
  protected repository = getCustomRepository(ResponseRepository);
}

