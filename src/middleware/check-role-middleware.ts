import { UserRole } from '../entity/user.entity';
import { Response, Request, NextFunction } from 'express';

export const checkRole = (roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = (req as any).user.role;
    if (roles.includes(userRole)) {
      next();
    } else {
      res.sendStatus(400);
    }
  };
};
