export const environnment = {
	JWT_SECRET: 'JDJDJDJJDJKLKQSJLKDJKLJQSLKJS', // process.env.SECRET,
	API_DB_USER: 'root', // process.env.USER,
	API_DB_HOST: process.env.HOST,
	API_DB_PASSWORD: 'free', // process.env.PASSWORD,
	// API_DB_PORT: process.env.PORT,
	DB_DATABASE: 'kanopee-dev', // process.env.DB_NAME,
	upload: '/uploads',
	mailHost: 'smtp.ethereal.email',
	mailPort: 587,
	EMAIL: '"Kanopée Koncept" <kanopee@contact.com>',
	confirmationUrl: 'http://localhost:3000/auth/confirmation/',
	websiteUrl: 'http://localhost:4200',
};
