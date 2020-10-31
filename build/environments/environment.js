"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environnment = {
    JWT_SECRET: 'JDJDJDJJDJKLKQSJLKDJKLJQSLKJS',
    API_DB_USER: 'root',
    API_DB_HOST: process.env.HOST,
    API_DB_PASSWORD: 'free',
    // API_DB_PORT: process.env.PORT,
    DB_DATABASE: 'kanopee-dev',
    upload: '/uploads',
    mailHost: 'smtp.ethereal.email',
    mailPort: 587,
    EMAIL: '"Kanopée Koncept" <kanopee@contact.com>',
    confirmationUrl: 'http://localhost:3000/auth/confirmation/',
    websiteUrl: 'http://localhost:4200',
};
