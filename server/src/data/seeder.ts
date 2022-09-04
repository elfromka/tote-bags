import connectToMongoDB from "./../config/db";
import * as dotenv from "dotenv";
import { users, products } from "./seeds";
import { User, Product, Order } from "../models";

dotenv.config();

connectToMongoDB();

const importData = async (): Promise<void> => {
    try {
        // delete everything that is users, products and orders related before importing new data
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        // insert users
        const createdUsers = await User.insertMany(users);
        // get first user from the seed which will be the admin (my user) to add it to the new products
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return {
                ...product,
                user: adminUser,
            };
        });

        await Product.insertMany(sampleProducts);

        console.info("Import of users and products is finished!");

        // simple exit
        process.exit();
    } catch (error: any) {
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

const eraseData = async (): Promise<void> => {
    try {
        // delete everything that is users, products and orders related
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.info("Remove of users, products and orders is finished!");

        // simple exit
        process.exit();
    } catch (error: any) {
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

if (process.argv[2] === "-import") {
    importData();
}

if (process.argv[2] === "-erase") {
    eraseData();
}
