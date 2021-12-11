import { UserRepository } from './../repository/user.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
import { User, UserRole } from '../entity/user.entity';

export class UserService extends AbstractService {
  protected repository = getCustomRepository(UserRepository);

  getById(id: number) {
    const getId = this.repository.findOne(id, { relations: ['site'] });
    if (!getId) {
      throw new Error(`L'utilisateur d'id ${id} n'existe pas `);
    }
    return getId;
  }

  async userActivation(user: User) {
    user.isActive = true;
    await this.repository.update(user.id, user);
  }

  getKulteur() {
    return this.repository.find({ where: { role: UserRole.KULTEUR } });
  }
}
