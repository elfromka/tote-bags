import express, { Request, Response } from "express";
import { DEV_MODE, PORT } from "./config/config";
import connectToMongoDB from "./config/db";
import products from "./data/products";

connectToMongoDB();

const router = express();

// only JSON requests, and not caring about if these are nested or not
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// API healthcheck
router.get("/api/ping", (request: Request, response: Response) => {
    response.status(200).json({ message: "PONG" });
});

// Products
// - GET all products
router.get("/api/products", (request: Request, response: Response) => {
    response.status(200).json(products);
});

// - GET one product
router.get("/api/products/:id", (request: Request, response: Response) => {
    const product = products.find((p) => p._id === request.params.id);

    response.status(200).json(product);
});

router.listen(PORT, () => {
    console.log(`Server running ${DEV_MODE} on port ${PORT}`);
});
