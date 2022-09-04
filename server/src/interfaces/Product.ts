import { Types } from "mongoose";
import ReviewInterface from "./Review";
export default interface ProductInterface {
    name: string;
    image: string;
    description: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
    user: Types.ObjectId;
    reviews: ReviewInterface[];
}
