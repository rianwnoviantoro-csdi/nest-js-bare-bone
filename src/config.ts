import 'dotenv/config';

export const config = {
  port: Number(process.env.APP_PORT) || 3000,
  database: {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  jwt: {
    tokenSecret: process.env.JWT_TOKEN_SECRET,
    tokenExpire: process.env.JWT_TOKEN_EXPIRE,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpire: process.env.JWT_REFRESH_EXPIRE,
  },
};
