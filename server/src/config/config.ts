import * as dotenv from "dotenv";

dotenv.config();

const PORT: number | undefined = Number(process.env.SERVER_PORT) || 5000;
const DEV_MODE: string | undefined = process.env.NODE_ENV;

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || "";
const MONGO_PROJECT_NAME: string = process.env.MONGO_PROJECT_NAME || "";
const MONGO_DATABASE: string = process.env.MONGO_DATABASE || "";
const MONGO_URI: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_PROJECT_NAME}.iljrou4.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;

export { PORT, DEV_MODE, MONGO_URI };
