import { environnment } from '../environments/environment';
import { Token } from '../entity/token.entity';
import { User } from '../entity/user.entity';
import { createConnection } from 'typeorm';
import { Atelier } from '../entity/atelier.entity';
import { Event } from '../entity/event.entity';
import { Message } from '../entity/message.entity';
import { Participation } from '../entity/participation.entity';
import { Response } from '../entity/response.entity';
import { Site } from '../entity/site.entity';

export default async () => {

	let retries = 5
	while (retries) {
		try {

			await createConnection();
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
