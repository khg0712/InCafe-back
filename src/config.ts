import { config } from 'dotenv';

config();

const port = process.env.PORT as string;
const mongoUri = process.env.MONGO_URI as string;

export { port, mongoUri };
