import { Event } from '../models/entity/event.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Event)
export class EventRepository extends Repository<Event> { }
