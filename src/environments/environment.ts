export const environnment = {
	JWT_SECRET: process.env.SECRET,
	API_DB_USER: process.env.USER,
	API_DB_HOST: process.env.HOST,
	API_DB_PASSWORD: process.env.PASSWORD,
	// API_DB_PORT: process.env.PORT,
	DB_DATABASE: process.env.DB_NAME,
	upload: '/uploads',
	mailHost: 'smtp.ethereal.email',
	mailPort: 587,
	EMAIL: '"Kanopée Koncept" <kanopee@contact.com>',
	confirmationUrl: 'http://localhost:3000/auth/confirmation/',
	websiteUrl: 'http://localhost:4200',
};
