import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Rating } from "../../components";
import { BsChevronLeft, BsBagPlusFill } from "react-icons/bs";

const Product: React.FC = (): JSX.Element => {
    const [product, setProduct] = useState<any>({});
    const { id } = useParams<string>();

    const fetchProduct = async () => {
        const { data: productData } = await axios.get(`/api/products/${id}`);

        setProduct(productData);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            <Link to="/" className="go-back">
                <BsChevronLeft />
                <span className="go-back__text">Go back</span>
            </Link>
            <div className="product">
                <div className="product__details">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product__details__image"
                    />
                    <div className="related">
                        <h1 className="main__title">{product.name}</h1>
                        <p className="related__description">
                            {product.description}
                        </p>
                        <Rating
                            value={1}
                            text={`${product.numReviews} reviews`}
                        />
                        <p className="related__stock-status">
                            {product.countInStock > 0
                                ? "In stock"
                                : "Out of stock"}
                        </p>
                        <p className="related__price">${product.price}</p>
                        <button className="btn">
                            <BsBagPlusFill />
                            <span className="btn__text">Add to bag</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
