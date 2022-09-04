import { NextFunction, Request, Response } from "express";

// Custom error handling for:
// - URL paths which doesn't have any routes => return 404
const notFound = (request: Request, response: Response, next: NextFunction) => {
    const error = new Error(`Not found - ${request.originalUrl}`);

    response.status(404);
    next(error);
};

// - any other errors (errors from MongoDB - not found product, etc.)
const errorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const statusCode: number =
        response.statusCode === 200 ? 500 : response.statusCode;

    response.status(statusCode);
    response.json({
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? null : error.stack,
    });
};

export { notFound, errorHandler };
