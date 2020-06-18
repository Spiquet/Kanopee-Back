import { getCustomRepository } from 'typeorm';
import { ParticipationRepository } from './../repository/participation.repository';
import { AbstractService } from '../core/abstract.service';

export class ParticipationService extends AbstractService {
  protected repository = getCustomRepository(ParticipationRepository);
}
