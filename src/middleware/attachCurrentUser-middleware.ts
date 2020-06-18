import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repository/user.repository';
import { getCustomRepository } from 'typeorm';
// Ce middleware traduit remplace valeur de JSON du JWT par le getById du user en base de données
// Cette étape permet en particulier de récupérer le rôle actualisé du User
// Le résultat du JWT récupère simplement le payload à savoir : id, usernamen email
export const attachCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = getCustomRepository(UserRepository);
  const user = (req as any).user;

  (req as any).user = await userRepository.findOne({ where: {id: user.id}, relations: ['site'] });

  if (!(req as any).user) {
    return res.status(401).end('User not found');
  } else {
    return next();
  }
};
