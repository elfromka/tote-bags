import ProductInterface from "./Product";

export default interface ReviewInterface {
    name: String;
    rating: Number;
    comment: String;
    product: ProductInterface;
}
