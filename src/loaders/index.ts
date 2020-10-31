import expressLoader from './express';
import typeormLoader from './typeorm';
import { Application } from 'express';

export default async (app: Application) => {
	await expressLoader(app);
	console.log('Express Intialized');
	await typeormLoader();
	console.log('Typeorm Intialized');

};
