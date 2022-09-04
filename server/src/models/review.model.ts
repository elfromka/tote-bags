import { Schema, model } from "mongoose";
import ReviewInterface from "./../interfaces/Review";

const reviewSchema = new Schema<ReviewInterface>(
    {
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    },
    {
        timestamps: true,
    }
);

const Review = model("Review", reviewSchema);

export default Review;
export { reviewSchema };
