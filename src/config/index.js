import fs from 'fs';
import path from 'node:path';
import dotenv from 'dotenv';

const fullPath = path.resolve('.', 'src/config', `.env.${process.env.NODE_ENV}`)

if (fs.existsSync(fullPath)) {
  dotenv.config({
    path : fullPath
  });
} else {
  throw Error(`Configuration upload failed: ${fullPath} doesn't exist`);
}

export default {
  NODE_ENV: process.env.NODE_ENV,
  NODE_APP_PORT: process.env.NODE_APP_PORT,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_NAME: process.env.DATABASE_NAME,
};