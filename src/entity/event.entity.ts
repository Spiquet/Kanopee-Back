import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Atelier } from './atelier.entity';
import { Site} from './site.entity';
import { Participation } from './participation.entity';

export enum EventRole {
  ATELIER = 'Atelier',
  CULTURE = 'Culture-entretien',
  DISTRIBUTION = 'Distribution',
}

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
      type: 'enum',
      enum: EventRole,
      default: EventRole.ATELIER,
    })
    eventType!: EventRole;

    @Column({ type: 'timestamp'})
    startAt!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    endAt!: Date;

    @Column()
    color!: string;

    @Column({ nullable: true })
    description!: string;

    @ManyToOne(
        type => User,
        user => user.events)
    user!: User;

    @ManyToOne(
      type => Atelier,
      atelier => atelier.events, {cascade: true, onDelete: 'CASCADE'})
      @JoinColumn()
    atelier!: Atelier;

    @ManyToOne(
        type => Site,
        site => site.events)
    site!: Site;

    @OneToMany(
        type => Participation,
        participation => participation.event)
    particpations!: Participation;

}
