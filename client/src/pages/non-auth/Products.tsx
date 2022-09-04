import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";
import { BsFillBagPlusFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import ProductInterface from "./../../interfaces/Product";

const Products: React.FC = (): JSX.Element => {
    const [products, setProducts] = useState<ProductInterface[] | []>([]);

    const fetchProducts = async () => {
        const { data: productsData } = await axios.get("/api/products");

        setProducts(productsData);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const addToCartDirectly = (e: any) => {
        e.preventDefault();
        console.log("STOPPED!! YAEHAAHEEEE! Now add the product to the cart!");
    };

    return (
        <div className="products">
            <h1 className="main__title">
                Our Tote Bags are waiting for you...
            </h1>
            <div className="products__cards">
                {products.map((product) => (
                    <Link to={`/product/${product._id}`} key={product._id}>
                        <div className="card">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="card__image"
                            />
                            <h4 className="card__name">{product.name}</h4>
                            <h6 className="card__small">${product.price}</h6>
                            <button
                                className="card__button"
                                onClick={addToCartDirectly}
                            >
                                <BsFillBagPlusFill />
                                <span className="card__button__text">
                                    Add to bag directly
                                </span>
                            </button>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;
