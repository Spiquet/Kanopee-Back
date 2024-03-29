import { environnment } from '../environments/environment';
import { Token } from './../models/entity/token.entity';
import { User } from './../models/entity/user.entity';
import { createConnection, Connection } from 'typeorm';
import { Atelier } from './../models/entity/atelier.entity';
import { Event } from '../models/entity/event.entity';
import { Message } from '../models/entity/message.entity';
import { Participation } from '../models/entity/participation.entity';
import { Response } from '../models/entity/response.entity';
import { Site } from '../models/entity/site.entity';

export default async () => {
	const connection: Connection = await createConnection({
		type: 'mysql',
		host: environnment.API_DB_HOST,
		port: 1234,
		username: environnment.API_DB_USER,
		password: environnment.API_DB_PASSWORD,
		database: environnment.DB_DATABASE,
		entities: [ Atelier, Site, User, Event, Message, Participation, Response, Token ],

		synchronize: true
	});

	return connection;
};
