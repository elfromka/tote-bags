import UserInterface from "./User";
import OrderItemInterface from "./OrderItem";

export default interface OrderInterface {
    user: UserInterface;
    orderItems: OrderItemInterface[];
    shippingAddress: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    };
    paymentMethod: string;
    paymentResult: {
        id: string;
        status: string;
        updateTime: string;
        emailAddress: string;
    };
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    paidAt: Date;
    isDelivered: boolean;
    deliveredAt: Date;
}
