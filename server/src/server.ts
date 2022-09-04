import express, { Request, Response } from "express";
import { DEV_MODE, PORT } from "./config/config";
import connectToMongoDB from "./config/db";
import productRoutes from "./routes/product.routes";

connectToMongoDB();

const app = express();

// only JSON requests, and not caring about if these are nested or not
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API healthcheck route
app.get("/api/ping", (request: Request, response: Response) => {
    response.status(200).json({ message: "PONG" });
});

// Product routes
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server running ${DEV_MODE} on port ${PORT}`);
});
