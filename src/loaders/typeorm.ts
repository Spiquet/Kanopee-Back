import { environnment } from '../environments/environment';
import { Token } from './../models/entity/token.entity';
import { User } from './../models/entity/user.entity';
import { createConnection } from 'typeorm';
import { Atelier } from './../models/entity/atelier.entity';
import { Event } from '../models/entity/event.entity';
import { Message } from '../models/entity/message.entity';
import { Participation } from '../models/entity/participation.entity';
import { Response } from '../models/entity/response.entity';
import { Site } from '../models/entity/site.entity';

export default async () => {

	let retries = 5
	while (retries) {
		try {

			await createConnection({
				type: 'mysql',
				username: environnment.API_DB_USER,
				password: environnment.API_DB_PASSWORD,
				database: environnment.DB_DATABASE,
				entities: [Atelier, Event,  Message, Participation, Response, Site, Token, User],

				synchronize: true
			});
			break

		}
		catch (err) {
			console.log(err);
			retries -= 1;
			console.log(`retries left: ${retries}`);
			// wait 5 seconds
			await new Promise(res => setTimeout(res, 5000));
		}
	}
};
