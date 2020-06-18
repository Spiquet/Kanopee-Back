import { SiteRepository } from './../repository/site.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class SiteService extends AbstractService {
  protected repository = getCustomRepository(SiteRepository);
}

