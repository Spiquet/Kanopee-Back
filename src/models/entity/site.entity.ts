import { Message } from './message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Event } from './event.entity';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  status!: string;

  @Column()
  code!: string;

  @Column()
  city!: string;

  @Column()
  address!: string;

  @Column()
  postcode!: string;

  @Column()
  name!: string;

  @OneToMany(
    type => User,
    user => user.site, { cascade: true, onDelete: 'CASCADE'})
    @JoinColumn()
    users!: User[];

  @OneToMany(
    type => Event,
    event => event.site)
    events!: Event[];

  @OneToMany(
    type => Message,
    message => message.site)
    messages!: Message[];
}
