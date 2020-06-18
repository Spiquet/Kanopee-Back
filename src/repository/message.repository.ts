import { Message } from './../models/entity/message.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {}
