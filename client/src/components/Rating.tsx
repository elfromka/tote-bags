import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import RatingInterface from "../interfaces/Rating";

const Rating: React.FC<RatingInterface> = ({ value, text }): JSX.Element => {
    return (
        <div className="rating">
            <span className="rating__star">
                {value >= 1 ? (
                    <BsStarFill />
                ) : value >= 0.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
            <span className="rating__star">
                {value >= 2 ? (
                    <BsStarFill />
                ) : value >= 1.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
            <span className="rating__star">
                {value >= 3 ? (
                    <BsStarFill />
                ) : value >= 2.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
            <span className="rating__star">
                {value >= 4 ? (
                    <BsStarFill />
                ) : value >= 3.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
            <span className="rating__star">
                {value >= 5 ? (
                    <BsStarFill />
                ) : value >= 4.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
            <small className="rating__text">{text && text}</small>
        </div>
    );
};

export default Rating;
