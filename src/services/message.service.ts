import { Site } from './../models/entity/site.entity';
import { MessageRepository } from './../repository/message.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
import { MessageRole } from '../models/entity/messageRole';
import { User } from '../models/entity/user.entity';

export class MessageService extends AbstractService {
  protected repository = getCustomRepository(MessageRepository);

  getMessages(user: User) {
    if (user.role === 'user') {
      return this.getMessagesBySiteId(user.site.id);
    } else if (user.role === 'admin' || user.role === 'kulteur') {
      return this.getAllMessages();
    }
  }

  getAllMessages() {
    return this.repository.find({ where: { role: MessageRole.MESSAGE }, relations: ['site', 'user'], order: { createdAt: 'DESC' } });
  }

  // getMessagesBySite(currentSite: Site) {
  //   return this.repository.find({ where: { site: currentSite } });
  // }

  getMessagesBySiteId(SiteId: number) {
    return this.repository.find({ where: { site: { id: SiteId } }, relations: ['site', 'user'], order: { createdAt: 'DESC' } });
  }

  getAllQuestions() {
    return this.repository.find({ where: { role: MessageRole.QUESTION } });
  }
}
