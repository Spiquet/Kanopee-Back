import { EventRole } from '../entity/event.entity';
import { EventRepository } from '../repository/event.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class EventService extends AbstractService {
  protected repository = getCustomRepository(EventRepository);

  getByIdEventKulteur(id: number) {
    return this.repository.find({ where: { user: id }, relations: ['user', 'atelier', 'site'] });
  }

  getByIdEventSite(id: number) {
    return this.repository.find({ where: { site:  id }, relations: ['site', 'atelier', 'user'] });
  }

  getWorkshopsEvent() {
    return this.repository.find({ where : { eventType: EventRole.ATELIER }, relations: ['atelier', 'site'] });
  }

  public getAll() {
    return this.repository.find({relations: ['particpations']});
  }
}
