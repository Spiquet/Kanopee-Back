import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Event } from './event.entity';

@Entity('atelier')
export class Atelier {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  duration!: string;

  @Column()
  userSupport!: string;

  @Column()
  kulteurSupport!: string;

  @Column()
  link1!: string;

  @Column()
  link2!: string;

  @Column({nullable: true})
  link3!: string;

  @Column({nullable: true})
  link4!: string;

  @Column({nullable: true})
  link5!: string;

  @Column({nullable: true})
  link6!: string;

  @OneToMany(
    type => Event,
    event => event.atelier)
    events!: Event[];

}
