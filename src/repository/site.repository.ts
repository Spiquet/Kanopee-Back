import { Site } from '../entity/site.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Site)
export class SiteRepository extends Repository<Site> {}
