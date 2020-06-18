import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Site } from './site.entity';
import { User } from './user.entity';
import { Response } from './response.entity';
import { MessageRole } from './messageRole';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({
    type: 'enum',
    enum: MessageRole,
  })
  role!: MessageRole;

  @ManyToOne(
    type => User,
    user => user.messages, { cascade: true, onDelete: 'CASCADE'})
    @JoinColumn()
    user!: User;

  @ManyToOne(
    type => Site,
    site => site.messages)
  site!: Site;

  @OneToMany(
    type => Response,
    response => response.message)
  responses!: Response[];

}
