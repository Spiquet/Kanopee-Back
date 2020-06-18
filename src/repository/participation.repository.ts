import { Participation } from './../models/entity/participation.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Participation)
export class ParticipationRepository extends Repository<Participation> {}
