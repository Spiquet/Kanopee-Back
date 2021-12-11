import { User } from './user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Token {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  value!: string;

  @CreateDateColumn()
  expiration!: Date;

  @OneToOne(type => User, { cascade: true, onDelete: 'CASCADE'})
  @JoinColumn()
  user!: User;

}
