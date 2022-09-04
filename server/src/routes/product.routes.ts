import express, { Request, Response } from "express";
import Product from "./../models/product.model";

const router = express.Router();

// Products
/**
 * GET request - fetch all products.
 */
router.get("/", async (request: Request, response: Response) => {
    try {
        const products = await Product.find({});

        response.status(200).json(products);
    } catch (error: any) {
        throw new Error(error);
    }
});

/**
 * GET request - fetch a product by ID.
 */
router.get("/:id", async (request: Request, response: Response) => {
    try {
        const id: string = request.params.id;
        const product = await Product.findById(id);

        response.status(200).json(product);
    } catch (error: any) {
        throw new Error(error);
    }
});

export default router;
