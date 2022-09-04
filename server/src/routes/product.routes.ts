import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Product from "./../models/product.model";

const router = express.Router();

// Products
// GET request - fetch all products.
router.get(
    "/",
    asyncHandler(async (request: Request, response: Response) => {
        const products = await Product.find({});

        response.status(200).json(products);
    })
);

// GET request - fetch a product by ID.
router.get(
    "/:id",
    asyncHandler(async (request: Request, response: Response) => {
        const id: string = request.params.id;
        const product = await Product.findById(id);

        if (product) {
            response.status(200).json(product);
        } else {
            response.status(404);
            throw new Error("Product not found.");
        }
    })
);

export default router;
