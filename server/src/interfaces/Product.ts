import { Types } from "mongoose";
import ReviewInterface from "./Review";
export default interface ProductInterface {
    _id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
}

export interface ProductMongoInterface extends ProductInterface {
    user: Types.ObjectId;
    reviews: ReviewInterface[];
}
