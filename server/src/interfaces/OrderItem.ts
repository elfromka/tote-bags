import { ProductMongoInterface } from "./Product";

export default interface OrderItemInterface {
    name: string;
    quantity: number;
    image: string;
    product: ProductMongoInterface;
}
