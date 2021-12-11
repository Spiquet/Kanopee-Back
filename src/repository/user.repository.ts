import { User } from '../entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  findByName(firstName: string, lastName: string) {
    return this.findOne({ firstName, lastName });
  }

  async findByEmail(email: string) {
    return this.findOne({email});

  }
}
