import dotenv from "dotenv";

dotenv.config();

const PORT: number | string | undefined = process.env.SERVER_PORT || 5000;
const DEV_MODE: string | undefined = process.env.NODE_ENV;

export { PORT, DEV_MODE };
