import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';
import { Message } from './message.entity';
import {User} from './user.entity';

@Entity()
export class Response {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @Column()
    imgUrl!: string;

    @ManyToOne(
        type => Message,
        message => message.responses)
    message!: Message;

    @ManyToOne(
        type => User,
        user => user.responses)
    user!: User;

}
