import { environnment } from './../environments/environment';
import { AtelierRepository } from '../repository/atelier.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
import { Atelier } from '../entity/atelier.entity';

export class AtelierService extends AbstractService {
  protected repository = getCustomRepository(AtelierRepository);

  private setupAtelier(atelier: Atelier, files: Express.Multer.File[]) {

    if (files[0]) {
      atelier.userSupport = 'uploads/' + files[0].filename;
    }
    if (files[1]) {
      atelier.kulteurSupport = 'uploads/' + files[1].filename;
    }

    return atelier;
  }

  public create(atelier: Atelier, files: Express.Multer.File[]) {

    this.add(this.setupAtelier(atelier, files));

  }
  public updateFile(atelier: Atelier, files: Express.Multer.File[]) {
    atelier = this.setupAtelier(atelier, files);
    this.update(atelier.id, atelier);
  }


}
