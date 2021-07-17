require('dotenv').config();

 export const environnment = {
 	JWT_SECRET: process.env.JWT_SECRET,
 	API_DB_USER: process.env.API_DB_USER,
 	API_DB_HOST: process.env.API_DB_HOST,
 	API_DB_PASSWORD: process.env.API_DB_PASSWORD,
 	API_DB_PORT: process.env.API_DB_PORT,
 	DB_DATABASE:  process.env.DB_DATABASE,
 	upload: process.env.UPLOAD,
	mailHost: 'smtp.ethereal.email',
	mailPort: 587,
	EMAIL: process.env.EMAIL,
 	confirmation_Url: process.env.CONFIRMATION_URL,
 	web_site_url: process.env.WEBSITEURL,
 };
