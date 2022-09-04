import ProductInterface from "./Product";
export default interface OrderItemInterface {
    name: string;
    quantity: number;
    image: string;
    product: ProductInterface;
}
