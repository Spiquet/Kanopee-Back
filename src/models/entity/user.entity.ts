import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  Index,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { Site } from './site.entity';
import { Response } from './response.entity';
import { Message } from './message.entity';
import { Participation } from './participation.entity';
import { Event } from './event.entity';

export enum UserRole {
  GHOST = 'ghost',
  USER = 'user',
  KULTEUR = 'kulteur',
  ADMIN = 'admin',
}
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @CreateDateColumn()
  birth_date!: Date;

  @Column()
  home!: string;

  @Column()
  password!: string;

  @Column()
  tel!: string;

  @Index({ unique: true })
  @Column()
  email!: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GHOST,
  })
  role?: UserRole;

  @Column({ nullable: true })
  avatar!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @CreateDateColumn()
  updateAt!: Date;

  @Column({ default: false })
  isActive!: boolean;

  @ManyToOne(
    type => Site,
    site => site.users, { eager: true})
    site!: Site;

  @OneToMany(
    type => Message,
    message => message.user)
    messages!: Message[];

  @OneToMany(
    type => Participation,
    participation => participation.user, { cascade: true, onDelete: 'CASCADE'})
    @JoinColumn()
    participations!: Participation[];

  @OneToMany(
    type => Event,
    event => event.user)
  events!: Event[];

  @OneToMany(
    type => Response,
    response => response.user, {cascade: true, onDelete: 'CASCADE'})
    @JoinColumn()
    responses!: Response[];

  constructor(input: User) {
    Object.assign(this, input);
  }

}
