import { ProductMongoInterface } from "./Product";

export default interface ReviewInterface {
    name: String;
    rating: Number;
    comment: String;
    product: ProductMongoInterface;
}
