interface ProductInterface {
    name: string;
    image: string;
    description: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
}

const products: ProductInterface[] = [
    {
        name: "Tote Bag - bananas",
        image: "/images/tb-1.jpg",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi alias reiciendis eligendi perferendis suscipit pariatur ad saepe sunt beatae! Accusamus quam nulla voluptate at rerum cumque vero ratione, mollitia accusantium, voluptatibus neque minus? Illo, quae quam.",
        price: 11.99,
        countInStock: 4,
        rating: 3.6,
        numReviews: 2,
    },
    {
        name: "Tote Bag - colorful marks",
        image: "/images/tb-2.jpg",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi alias reiciendis eligendi perferendis suscipit pariatur ad saepe sunt beatae! Accusamus quam nulla voluptate at rerum cumque vero ratione, mollitia accusantium, voluptatibus neque minus? Illo, quae quam.",
        price: 13.99,
        countInStock: 12,
        rating: 4.5,
        numReviews: 9,
    },
    {
        name: "Tote Bag - hand prints",
        image: "/images/tb-3.jpg",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi alias reiciendis eligendi perferendis suscipit pariatur ad saepe sunt beatae! Accusamus quam nulla voluptate at rerum cumque vero ratione, mollitia accusantium, voluptatibus neque minus? Illo, quae quam.",
        price: 10.99,
        countInStock: 3,
        rating: 4.2,
        numReviews: 4,
    },
    {
        name: "Tote Bag - cactuses everywhere",
        image: "/images/tb-4.jpg",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi alias reiciendis eligendi perferendis suscipit pariatur ad saepe sunt beatae! Accusamus quam nulla voluptate at rerum cumque vero ratione, mollitia accusantium, voluptatibus neque minus? Illo, quae quam.",
        price: 14.0,
        countInStock: 8,
        rating: 4.5,
        numReviews: 3,
    },
    {
        name: "Tote Bag - blue marks",
        image: "/images/tb-5.jpg",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi alias reiciendis eligendi perferendis suscipit pariatur ad saepe sunt beatae! Accusamus quam nulla voluptate at rerum cumque vero ratione, mollitia accusantium, voluptatibus neque minus? Illo, quae quam.",
        price: 16.99,
        countInStock: 24,
        rating: 4.9,
        numReviews: 12,
    },
    {
        name: "Tote Bag - swimmers",
        image: "/images/tb-6.jpg",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi alias reiciendis eligendi perferendis suscipit pariatur ad saepe sunt beatae! Accusamus quam nulla voluptate at rerum cumque vero ratione, mollitia accusantium, voluptatibus neque minus? Illo, quae quam.",
        price: 15.0,
        countInStock: 19,
        rating: 4.5,
        numReviews: 5,
    },
];

export default products;
