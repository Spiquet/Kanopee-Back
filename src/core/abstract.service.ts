import { Repository, ObjectLiteral } from 'typeorm';
export abstract class AbstractService {

  protected abstract repository: Repository<ObjectLiteral>;

  getAll() {
    return this.repository.find();
  }

  getById(id: number) {
    const getId = this.repository.findOne(id);
    if (!getId) {
      throw new Error(`l'objet d'id ${id} n'existe pas `);
    }
    return getId;
  }

  async add(element: any) {
    element = await this.repository.create(element);
    return this.repository.save(element);
  }

  async update(idElement: number, element: ObjectLiteral) {
    const one = await this.repository.findOne(idElement);
    if (!one) {
      throw new Error(`l'objet d'id ${idElement} n'existe pas `);
    }
    this.repository.merge(one, element);
    return this.repository.save(one , element);

  }

  delete(id: number) {
    return this.repository.delete(id);
  }
}
