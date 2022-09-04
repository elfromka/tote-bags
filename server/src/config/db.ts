import mongoose from "mongoose";
import { MONGO_URI } from "./config";

const connectToMongoDB = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URI, {
            retryWrites: true,
            w: "majority",
        });

        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        let errorMessage: string = "";

        if (error instanceof Error) errorMessage = error.message;

        if (errorMessage) {
            console.error(`Something went wrong. Error: ${errorMessage}`);
        } else {
            console.error(
                `Something went wrong. No error message was received.`
            );
        }

        // exit with failure because of error
        process.exit(1);
    }
};

export default connectToMongoDB;
