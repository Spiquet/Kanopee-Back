import { User } from './user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Participation {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(
        type => User,
        user => user.participations)
    user!: User;

    @ManyToOne(
        type => Event,
        event => event.particpations)
    event!: Event;

}
