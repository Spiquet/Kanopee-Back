import bodyParser from 'body-parser';
import cors from 'cors';
import { Application, static as staticExpress } from 'express';

require('dotenv').config();

export default async (app: Application) => {
	app.get('/status', (req, res) => {
		res.status(200).end();
	});
	app.head('/status', (req, res) => {
		res.status(200).end();
	});
	// TODO CHECK PATH.DELIMITER FOR THIS USE
	app.use('/uploads', staticExpress(__dirname + '/../../uploads'));
	app.enable('trust proxy');

	app.use(cors());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	return app;
};
