import { Atelier } from '../models/entity/atelier.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Atelier)
export class AtelierRepository extends Repository<Atelier> { }
