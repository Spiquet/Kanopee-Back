import { Participation } from '../entity/participation.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Participation)
export class ParticipationRepository extends Repository<Participation> {}
